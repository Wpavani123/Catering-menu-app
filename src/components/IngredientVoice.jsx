
import React, { useEffect, useState } from "react";

export default function IngredientVoice({ ingredients = [] }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const readIngredients = () => {
    if (!("speechSynthesis" in window)) {
      alert("Voice reading is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    if (!ingredients.length) {
      alert("No ingredients available to read.");
      return;
    }

    const text = ingredients
      .map((item, index) => {
        const name = item.name?.trim();
        const quantity = String(item.quantity ?? "").trim();
        const unit = String(item.unit ?? "").trim();

        if (!name) return "";

        const quantityText = quantity
          ? `, quantity ${quantity} ${unit}`
          : "";

        return `${index + 1}. ${name}${quantityText}.`;
      })
      .filter(Boolean)
      .join(" ");

    if (!text) {
      alert("Please add ingredient names first.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setStatus("playing");
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("idle");

    window.speechSynthesis.speak(utterance);
  };

  const pauseVoice = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  };

  const resumeVoice = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  };

  const stopVoice = () => {
    window.speechSynthesis.cancel();
    setStatus("idle");
  };

  return (
    <div className="ingredient-voice">
      <button type="button" onClick={readIngredients}>
        🔊 Read Ingredients
      </button>

      <button
        type="button"
        onClick={pauseVoice}
        disabled={status !== "playing"}
      >
        ⏸ Pause
      </button>

      <button
        type="button"
        onClick={resumeVoice}
        disabled={status !== "paused"}
      >
        ▶ Resume
      </button>

      <button
        type="button"
        onClick={stopVoice}
        disabled={status === "idle"}
      >
        ⏹ Stop
      </button>

      <p aria-live="polite">
        {status === "playing" && "Reading ingredients..."}
        {status === "paused" && "Voice paused."}
      </p>
    </div>
  );
}
