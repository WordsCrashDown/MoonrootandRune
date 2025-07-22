window.companions = [
  {
    name: "Basil",
    type: "herb",
    spacing: 12,
    height: 18,
    light: "full sun",
    water: "Medium - 1 inch/week",
    wateringLevel: "medium",
    temperature: "70-90°F",
    zone: [5, 6, 7, 8, 9],
    lifecycle: "annual",
    season: "summer",
    companions: ["Tomato", "Oregano", "Chives"],
    enemies: ["Rue", "Sage"]
  },
  {
    name: "Tomato",
    type: "vegetable",
    spacing: 18,
    height: 48,
    light: "full sun",
    water: "High - 1.5 inches/week",
    wateringLevel: "high",
    temperature: "70-85°F",
    zone: [4, 5, 6, 7, 8],
    lifecycle: "annual",
    season: "summer",
    companions: ["Basil", "Marigold", "Chives"],
    enemies: ["Potato", "Corn"]
  },
  {
    name: "Chives",
    type: "herb",
    spacing: 6,
    height: 10,
    light: "full sun",
    water: "Medium - 0.5 inch/week",
    wateringLevel: "medium",
    temperature: "60-75°F",
    zone: [3, 4, 5, 6, 7, 8],
    lifecycle: "perennial",
    season: "spring",
    companions: ["Carrot", "Tomato", "Basil"],
    enemies: []
  }
  // Add more plants here as needed...
];
