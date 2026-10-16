
const localImage = (filename) =>
  `${import.meta.env.BASE_URL}images1/${filename}`;

export const fallbackFoodImage = localImage("dosa.jpg");

const foodImages = {
  // Breakfast Items
  "Idli": localImage("dosa.jpg"),
  "Plain Dosa": localImage("dosa.jpg"),
  "Masala Dosa": localImage("dosa.jpg"),
  "Mysore Masala Dosa": localImage("dosa.jpg"),
  "Upma": localImage("pongal.jpg"),
  "Pongal": localImage("pongal.jpg"),
  "Vada": localImage("gobi-manchurian.jpg"),
  "Onion Dosa": localImage("dosa.jpg"),

  // Chicken Items
  "Chicken Curry": localImage("chicken-curry.jpg"),
  "Chicken Fry": localImage("chicken-fry.jpg"),
  "Chicken Roast": localImage("chicken-roast.webp"),
  "Chicken 65": localImage("chicken-65.webp"),
  "Chilli Chicken": localImage("chilli-chicken.webp"),
  "Chicken Lollipop": localImage("chicken-lollipops.jpg"),

  // Biryani and Rice Items
  "Chicken Biryani": localImage("chicken-biryani.jpeg"),
  "Chicken Dum Biryani": localImage("chicken-dum-biryani.webp"),
  "Special Chicken Biryani": localImage("chicken-biryani.jpeg"),
  "Boneless Chicken Biryani": localImage("chicken-biryani.jpeg"),
  "Mutton Biryani": localImage("mutton-biryani.webp"),
  "Mutton Dum Biryani": localImage("mutton-dum-biryani.png"),
  "Egg Biryani": localImage("egg-biryani.jpg"),
  "Veg Biryani": localImage("veg-biryani.webp"),
  "Mushroom Biryani": localImage("mushroom-biryani.jpg"),
  "Paneer Biryani": localImage("paneer-biryani.avif"),
  "Jeera Rice": localImage("ghee-rice.jpg"),
  "Ghee Rice": localImage("ghee-rice.jpg"),
  "Bagara Rice": localImage("bagara-rice.jpg"),

  // Vegetarian Curries
  "Mushroom Masala": localImage("mushroom-masala.webp"),
  "Paneer Butter Masala": localImage("paneer-butter-masala.webp"),
  "Mixed Vegetable Curry": localImage("mixed-vegetable-curry.jpg"),
  "Aloo Curry": localImage("aloo-curry.jpg"),
  "Brinjal Curry": localImage("brinjal-curry.jpg"),
  "Gobi Manchurian": localImage("gobi-manchurian.jpg"),

  // Lunch and Meals
  "White Rice": localImage("gee raice.jpg"),
  "Sambar": localImage("sambar.jpg"),
  "Rasam": localImage("rasam.jpg"),
  "Charu": localImage("charu.jpg"),
  "Curd Rice": localImage("curd raice.jpg"),
  "Lemon Rice": localImage("lemon raice.jpg"),
  "Tamarind Rice": localImage("lemon raice.jpg"),
  "Dal": localImage("dal.jpg"),
  "Papad": localImage("papad.jpg"),
  "Pickle": localImage("pickle.jpg"),
  "Curd": localImage("curd.jpg"),
  "Buttermilk": localImage("buttermilk.jpg"),

  // Sweets and Desserts
  "Gulab Jamun": localImage("gulab jum.jpg"),
  "Rasgulla": localImage("rasgulla.jpg"),
  "Semiya Payasam": localImage("semiya payasam.jpg"),
  "Rice Kheer": localImage("semiya payasam.jpg"),
  "Double Ka Meetha": localImage("double ka metha.jpg"),
  "Carrot Halwa": localImage("carrot halwa.jpg"),
  "Boondi Laddu": localImage("boondi laddu.jpg"),
  "Poornam Boorelu": localImage("poornam burelu.jpg"),
  "Bobbatlu": localImage("bobbatlu.jpg"),
  "Jilebi": localImage("jilabi.jpg"),
  "Ice Cream": localImage("ice cream.jpg"),

  // Breads and Rotis
  "Butter Chapati": localImage("dosa.jpg"),
  "Plain Naan": localImage("dosa.jpg"),
  "Butter Naan": localImage("dosa.jpg"),

  // Drinks
  "Mineral Water": localImage("buttermilk.jpg"),
  "Soft Drinks": localImage("buttermilk.jpg"),
  "Lemon Soda": localImage("buttermilk.jpg"),
  "Tea": localImage("buttermilk.jpg"),
  "Coffee": localImage("buttermilk.jpg"),

  // Catering Function Packages
  "Wedding Catering": localImage("chicken-biryani.jpeg"),
  "Engagement Function": localImage("bagara-rice.jpg"),
  "Birthday Party": localImage("ice cream.jpg"),
  "Housewarming Function": localImage("bagara-rice.jpg"),
  "Baby Shower": localImage("carrot halwa.jpg"),
  "Half Saree Function": localImage("bobbatlu.jpg"),
  "Festival Catering": localImage("veg-biryani.webp"),
  "Anniversary Function": localImage("gulab jum.jpg"),
  "Traditional Andhra Meals Package": localImage("bagara-rice.jpg"),
};

const categoryFallbackImages = {
  breakfast: "dosa.jpg",
  chicken: "chicken-curry.jpg",
  biryani: "chicken-biryani.jpeg",
  vegetarian: "mushroom-masala.webp",
  lunch: "sambar.jpg",
  sweets: "gulab jum.jpg",
  breads: "dosa.jpg",
  starters: "gobi-manchurian.jpg",
  drinks: "buttermilk.jpg",
  functions: "chicken-biryani.jpeg",
};

const placeholderImage = (name, categoryId) => {
  return (
    foodImages[name] ||
    localImage(categoryFallbackImages[categoryId] || "dosa.jpg")
  );
};

const ingredientRecipes = {
  // =========================
  // ANDHRA RESTAURANT CHICKEN ITEMS
  // =========================

  "Chicken Curry": [
    { name: "Chicken", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Cumin Powder", unit: "kg" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chicken Fry": [
    { name: "Chicken", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Cumin Powder", unit: "kg" },
    { name: "Lemon", unit: "pieces" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Rice Flour", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chicken Roast": [
    { name: "Chicken", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chicken 65": [
    { name: "Boneless Chicken", unit: "kg" },
    { name: "Corn Flour", unit: "kg" },
    { name: "Rice Flour", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Lemon", unit: "pieces" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chilli Chicken": [
    { name: "Boneless Chicken", unit: "kg" },
    { name: "Corn Flour", unit: "kg" },
    { name: "Maida", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Capsicum", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Soy Sauce", unit: "litres" },
    { name: "Chilli Sauce", unit: "litres" },
    { name: "Tomato Ketchup", unit: "litres" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chicken Lollipop": [
    { name: "Chicken Lollipop Pieces", unit: "pieces" },
    { name: "Corn Flour", unit: "kg" },
    { name: "Maida", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Soy Sauce", unit: "litres" },
    { name: "Chilli Sauce", unit: "litres" },
    { name: "Eggs", unit: "pieces" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  // =========================
  // ANDHRA RESTAURANT BIRYANI ITEMS
  // =========================

  "Chicken Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Chicken", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Star Anise", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Chicken Dum Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Chicken", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Star Anise", unit: "kg" },
    { name: "Saffron or Food Colour", unit: "grams" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Mutton Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Mutton", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Mutton Dum Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Mutton", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Star Anise", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Egg Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Eggs", unit: "pieces" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Veg Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Mixed Vegetables", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Mushroom Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Mushrooms", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Paneer Biryani": [
    { name: "Basmati Rice", unit: "kg" },
    { name: "Paneer", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Curd", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Biryani Masala", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  // =========================
  // RICE ITEMS
  // =========================

  "Jeera Rice": [
    { name: "Rice", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Ghee", unit: "litres" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Cashews", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Salt", unit: "kg" },
  ],

  "Ghee Rice": [
    { name: "Rice", unit: "kg" },
    { name: "Ghee", unit: "litres" },
    { name: "Onions", unit: "kg" },
    { name: "Cashews", unit: "kg" },
    { name: "Raisins", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Salt", unit: "kg" },
  ],

  "Bagara Rice": [
    { name: "Rice", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Mint Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Cardamom", unit: "kg" },
    { name: "Cloves", unit: "kg" },
    { name: "Cinnamon", unit: "kg" },
    { name: "Bay Leaves", unit: "kg" },
    { name: "Oil or Ghee", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  // =========================
  // ANDHRA VEGETARIAN CURRIES
  // =========================

  "Mushroom Masala": [
    { name: "Mushrooms", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Paneer Butter Masala": [
    { name: "Paneer", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Butter", unit: "kg" },
    { name: "Cream", unit: "litres" },
    { name: "Cashews", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Chilli Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Kasuri Methi", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Salt", unit: "kg" },
  ],

  "Mixed Vegetable Curry": [
    { name: "Mixed Vegetables", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Garam Masala", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Aloo Curry": [
    { name: "Potatoes", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Ginger-Garlic Paste", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Turmeric Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Mustard Seeds", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Coriander Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Brinjal Curry": [
    { name: "Brinjal", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Tomatoes", unit: "kg" },
    { name: "Peanuts", unit: "kg" },
    { name: "Sesame Seeds", unit: "kg" },
    { name: "Dry Coconut", unit: "kg" },
    { name: "Tamarind", unit: "kg" },
    { name: "Andhra Chilli Powder", unit: "kg" },
    { name: "Coriander Powder", unit: "kg" },
    { name: "Cumin Seeds", unit: "kg" },
    { name: "Mustard Seeds", unit: "kg" },
    { name: "Curry Leaves", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],

  "Gobi Manchurian": [
    { name: "Cauliflower", unit: "kg" },
    { name: "Corn Flour", unit: "kg" },
    { name: "Maida", unit: "kg" },
    { name: "Onions", unit: "kg" },
    { name: "Capsicum", unit: "kg" },
    { name: "Ginger-Garlic", unit: "kg" },
    { name: "Green Chillies", unit: "kg" },
    { name: "Soy Sauce", unit: "litres" },
    { name: "Chilli Sauce", unit: "litres" },
    { name: "Tomato Ketchup", unit: "litres" },
    { name: "Black Pepper Powder", unit: "kg" },
    { name: "Spring Onions", unit: "kg" },
    { name: "Oil", unit: "litres" },
    { name: "Salt", unit: "kg" },
  ],
};
const makeItems = (names, categoryId) =>
  names.map((name, index) => ({
    id: `${categoryId}-${index + 1}`,
    name,
    price: 0,
    unit: "serving",
    imageUrl: placeholderImage(name, categoryId),
    ingredients: ingredientRecipes[name] || [],
  }));

const menuCategories = [
  {
    id: "chicken",
    name: "Chicken Items",
    items: makeItems(
      [
        "Chicken Curry",
        "Chicken Fry",
        "Chicken Roast",
        "Chicken 65",
        "Chilli Chicken",
        "Chicken Lollipop",
      ],
      "chicken"
    ),
  },
  {
    id: "biryani",
    name: "Biryani Items",
    items: makeItems(
      [
        "Chicken Biryani",
        "Chicken Dum Biryani",
        "Mutton Biryani",
        "Mutton Dum Biryani",
        "Egg Biryani",
        "Veg Biryani",
        "Mushroom Biryani",
        "Paneer Biryani",
        "Jeera Rice",
        "Ghee Rice",
        "Bagara Rice",
      ],
      "biryani"
    ),
  },
  {
    id: "vegetarian",
    name: "Vegetarian Curries & Mushroom",
    items: makeItems(
      [
        "Mushroom Masala",
        "Paneer Butter Masala",
        "Mixed Vegetable Curry",
        "Aloo Curry",
        "Brinjal Curry",
        "Gobi Manchurian",
      ],
      "vegetarian"
    ),
  },
];

export default menuCategories;

export const getAllMenuItems = () =>
  menuCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );
