
import { jsPDF } from "jspdf";
import { useState } from "react";
import menuCategories, {
  fallbackFoodImage,
} from "./assets/data/menudata.js";
import "./App.css";

const UNIT_OPTIONS = [
  "kg",
  "g",
  "L",
  "ml",
  "pcs",
  "bunch",
  "cup",
  "tbsp",
  "tsp",
  "pinch",
  "to taste",
];

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [memberCount, setMemberCount] = useState(100);
  const [currentPage, setCurrentPage] = useState("menu");
  const [ingredientQuantities, setIngredientQuantities] = useState({});
  const [ingredientUnits, setIngredientUnits] = useState({});
  const [downloadEnabled, setDownloadEnabled] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("stopped");

  function stopVoice() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setVoiceStatus("stopped");
  }

  function playVoice(text) {
    if (!("speechSynthesis" in window) || !text.trim()) {
      alert("Voice is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.9;

    utterance.onstart = () => setVoiceStatus("playing");
    utterance.onend = () => setVoiceStatus("stopped");
    utterance.onerror = () => setVoiceStatus("stopped");

    window.speechSynthesis.speak(utterance);
  }

  function pauseVoice() {
    if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setVoiceStatus("paused");
    }
  }

  function resumeVoice() {
    if ("speechSynthesis" in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setVoiceStatus("playing");
    }
  }

  const allMenuItems = menuCategories.flatMap(
    (category) => category.items
  );

  const combinedIngredients = Array.from(
    new Map(
      selectedItems.flatMap((item) =>
        (item.ingredients || []).map((ingredient) => {
          const key = ingredient.name.trim().toLowerCase();

          return [
            key,
            {
              ...ingredient,
              displayName: ingredient.name.trim(),
              key,
            },
          ];
        })
      )
    ).values()
  ).sort((a, b) => a.displayName.localeCompare(b.displayName));

  function getIngredientUnit(ingredient) {
    const savedUnit = ingredientUnits[ingredient.key];
    if (savedUnit) return savedUnit;

    const recipeUnit = ingredient.unit || "";
    return UNIT_OPTIONS.includes(recipeUnit) ? recipeUnit : "kg";
  }

  function toggleItem(item) {
    const exists = selectedItems.some(
      (selected) => selected.id === item.id
    );

    if (exists) {
      setSelectedItems((previous) =>
        previous.filter((selected) => selected.id !== item.id)
      );
      return;
    }

    setSelectedItems((previous) => [
      ...previous,
      { ...item, quantity: 1 },
    ]);

    // Speak the selected food item immediately.
    playVoice(item.name);
  }

  function updateQuantity(itemId, value) {
    setSelectedItems((previous) =>
      previous.map((item) =>
        item.id === itemId ? { ...item, quantity: value } : item
      )
    );
  }

  function updateIngredientQuantity(key, value) {
    setIngredientQuantities((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  function updateIngredientUnit(key, value) {
    setIngredientUnits((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  function readMenu() {
    const names = allMenuItems.map((item) => item.name);
    playVoice("Catering menu. " + names.join(". "));
  }

  function readIngredients() {
    const lines = combinedIngredients.map((ingredient) => {
      const quantity = ingredientQuantities[ingredient.key];
      const unit = getIngredientUnit(ingredient);
      const quantityText = quantity
        ? `${quantity} ${unit}`
        : `quantity not entered, ${unit}`;

      return `${ingredient.displayName}, ${quantityText}`;
    });

    playVoice("Ingredients list. " + lines.join(". "));
  }

  function clearSelection() {
    stopVoice();
    setSelectedItems([]);
    setIngredientQuantities({});
    setIngredientUnits({});
    setCurrentPage("menu");
    setDownloadEnabled(false);
  }

  function downloadIngredientsPDF() {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = 20;

    function drawBorder() {
      pdf.setDrawColor(25, 75, 65);
      pdf.setLineWidth(0.8);
      pdf.rect(8, 8, pageWidth - 16, pageHeight - 16);

      pdf.setDrawColor(210, 170, 90);
      pdf.setLineWidth(0.3);
      pdf.rect(11, 11, pageWidth - 22, pageHeight - 22);
    }

    function checkSpace(height = 8) {
      if (y + height > pageHeight - 18) {
        pdf.addPage();
        drawBorder();
        y = 20;
      }
    }

    function addSectionHeading(title) {
      checkSpace(15);
      pdf.setFillColor(25, 75, 65);
      pdf.roundedRect(15, y - 5, pageWidth - 30, 10, 2, 2, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text(title, 20, y + 1.5);
      pdf.setTextColor(40, 40, 40);
      y += 14;
    }

    drawBorder();

    pdf.setFillColor(25, 75, 65);
    pdf.roundedRect(15, 15, pageWidth - 30, 25, 3, 3, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);
    pdf.text("CATERING ORDER LIST", pageWidth / 2, 25, {
      align: "center",
    });

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(`Members: ${memberCount}`, pageWidth / 2, 33, {
      align: "center",
    });

    pdf.setTextColor(40, 40, 40);
    y = 50;

    addSectionHeading("1. SELECTED FOOD ITEMS");

    selectedItems.forEach((item, index) => {
      checkSpace(9);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.text(`${index + 1}. ${item.name}`, 19, y);
      pdf.text(`Qty: ${item.quantity || 1}`, pageWidth - 20, y, {
        align: "right",
      });
      y += 8;
    });

    y += 5;
    addSectionHeading("2. COMBINED INGREDIENTS LIST");

    if (combinedIngredients.length === 0) {
      checkSpace(10);
      pdf.setFontSize(10);
      pdf.text(
        "No ingredients available for the selected items.",
        19,
        y
      );
      y += 8;
    }

    combinedIngredients.forEach((ingredient, index) => {
      checkSpace(10);

      const quantity = ingredientQuantities[ingredient.key] ?? "";
      const unit = getIngredientUnit(ingredient);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text(`${index + 1}. ${ingredient.displayName}`, 19, y);

      const quantityLabel = quantity
        ? `${quantity} ${unit}`
        : `— ${unit}`;

      pdf.text(quantityLabel, pageWidth - 20, y, {
        align: "right",
      });

      y += 7;
      pdf.setDrawColor(225, 225, 225);
      pdf.setLineWidth(0.2);
      pdf.line(18, y - 3, pageWidth - 18, y - 3);
    });

    pdf.save("catering-order-list.pdf");
  }

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">MANIKANTA BIRIYANI POINT</p>
        <h1>🍽️ Catering Menu</h1>

        {currentPage === "menu" ? (
          <>
            <p>Select food items for your function.</p>

            <div className="member-input">
              <label htmlFor="memberCount">
                👥 Number of Members
              </label>
              <input
                id="memberCount"
                type="number"
                min="1"
                value={memberCount}
                onChange={(event) =>
                  setMemberCount(event.target.value)
                }
              />
            </div>

            <p className="selected-count">
              Selected Items: <strong>{selectedItems.length}</strong>
            </p>

            <div className="voice-controls">
              <button type="button" onClick={readMenu}>
                ▶ Play Menu Voice
              </button>
              <button type="button" onClick={pauseVoice}>
                ⏸ Pause
              </button>
              <button type="button" onClick={resumeVoice}>
                ▶ Resume
              </button>
              <button type="button" onClick={stopVoice}>
                ⏹ Stop
              </button>
            </div>
          </>
        ) : (
          <>
            <p>Enter ingredient and masala quantities manually.</p>

            <div className="voice-controls">
              <button type="button" onClick={readIngredients}>
                ▶ Play Ingredients Voice
              </button>
              <button type="button" onClick={pauseVoice}>
                ⏸ Pause
              </button>
              <button type="button" onClick={resumeVoice}>
                ▶ Resume
              </button>
              <button type="button" onClick={stopVoice}>
                ⏹ Stop
              </button>
            </div>
          </>
        )}
      </header>

      {currentPage === "menu" ? (
        <>
          <main>
            {menuCategories.map((category) => (
              <section className="category" key={category.id}>
                <h2>{category.name}</h2>

                <div className="menu-grid">
                  {category.items.map((item) => {
                    const isSelected = selectedItems.some(
                      (selected) => selected.id === item.id
                    );

                    return (
                      <button
                        type="button"
                        className={`menu-card ${
                          isSelected ? "selected" : ""
                        }`}
                        key={item.id}
                        onClick={() => toggleItem(item)}
                        aria-pressed={isSelected}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = fallbackFoodImage;
                          }}
                        />
                        <span className="item-name">{item.name}</span>
                        <span className="item-status">
                          {isSelected ? "✓ Selected" : "+ Select"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </main>

          <footer className="footer">
            <h2>🧾 Catering Order Summary</h2>
            <p>
              Members: <strong>{memberCount || 0}</strong>
            </p>

            {selectedItems.length === 0 ? (
              <p>Select food items to enter their quantities.</p>
            ) : (
              <div className="quantity-list">
                {selectedItems.map((item) => (
                  <div className="quantity-row" key={item.id}>
                    <div className="quantity-item-name">
                      <strong>{item.name}</strong>
                      <small>Unit: {item.unit || "serving"}</small>
                    </div>

                    <label className="quantity-control">
                      <span>Quantity</span>
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(item.id, event.target.value)
                        }
                      />
                    </label>

                    <button
                      type="button"
                      className="remove-item-button"
                      onClick={() => toggleItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              className="next-page-button"
              disabled={selectedItems.length === 0}
              onClick={() => {
                stopVoice();
                setCurrentPage("ingredients");
              }}
            >
              Next: Ingredients & Masala →
            </button>

            <button
              type="button"
              className="clear-button"
              onClick={clearSelection}
            >
              Clear Selection
            </button>
          </footer>
        </>
      ) : (
        <main className="ingredients-page">
          <h2>🧂 Ingredients & Masala</h2>
          <p>
            Members: <strong>{memberCount || 0}</strong>
          </p>
          <p className="quantity-tip">
            Example quantities: 0.25 kg, 0.5 kg, 1 kg or 250 g.
          </p>

          {combinedIngredients.length === 0 ? (
            <p>
              Ingredients are not available for these selected menu items.
            </p>
          ) : (
            <div className="manual-ingredient-list">
              {combinedIngredients.map((ingredient) => {
                const key = ingredient.key;

                return (
                  <div className="manual-ingredient-row" key={key}>
                    <span className="ingredient-name">
                      {ingredient.displayName}
                    </span>

<input
                      className="ingredient-quantity-input"
                      type="number"
                      min="0"
                      step="any"
                      inputMode="decimal"
                      placeholder="Enter quantity"
                      aria-label={`Quantity for ${ingredient.displayName}`}
                      value={ingredientQuantities[key] ?? ""}
                      onChange={(event) =>
                        updateIngredientQuantity(key, event.target.value)
                      }
                    />

                    <select
                      className="ingredient-unit-select"
                      aria-label={`Unit for ${ingredient.displayName}`}
                      value={getIngredientUnit(ingredient)}
                      onChange={(event) =>
                        updateIngredientUnit(key, event.target.value)
                      }
                    >
                      {UNIT_OPTIONS.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          )}

          <div className="page-navigation">
            <button
              type="button"
              className="back-page-button"
              onClick={() => {
                stopVoice();
                setCurrentPage("menu");
              }}
            >
              ← Back to Menu
            </button>

            <label className="pdf-option">
              <input
                type="checkbox"
                checked={downloadEnabled}
                onChange={(event) =>
                  setDownloadEnabled(event.target.checked)
                }
              />
              Download ingredients as PDF
            </label>

            <button
              type="button"
              className="next-page-button"
              disabled={!downloadEnabled}
              onClick={downloadIngredientsPDF}
            >
              📄 Download PDF
            </button>
          </div>
        </main>
      )}
    </div>
  );
}
