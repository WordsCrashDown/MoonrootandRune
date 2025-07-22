// companions.js

//Collision Detection
function placePlant(cell, plant) {
  const x = parseInt(cell.dataset.x);
  const y = parseInt(cell.dataset.y);
  const planter = planters.find(p => p.id === cell.dataset.planterId);
  if (!planter) return;

  function placePlant(cell, plant) {
  const planter = planters.find(p => p.id === cell.dataset.planterId);
  if (!planter) return;

  const x = parseInt(cell.dataset.x);
  const y = parseInt(cell.dataset.y);
  const spacing = plant.spacing || 12;

  // Save plant placement for future checks
  planter.plants.push({ name: plant.name, x, y, spacing });

  // Visually label the plant
  const label = document.createElement('div');
  label.textContent = plant.name;
  label.style.position = 'absolute';
  label.style.left = cell.style.left;
  label.style.top = cell.style.top;
  label.style.color = '#fff';
  label.style.fontSize = '0.7em';
  label.style.background = 'rgba(0,0,0,0.5)';
  label.style.padding = '1px 3px';
  gridCanvas.appendChild(label);
}

// validate Plant Footprint
function validatePlantFootprint(planter, x, y, plant) {
  const spacing = plant.spacing || 12; // inches
  const px = x, py = y;

  // Check bounds
  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      if (px + dx >= planter.widthIn || py + dy >= planter.heightIn) return false;
    }
  }

  // Check for overlaps with other placed plants
  for (let placed of planter.plants) {
    const pSpacing = placed.spacing || 12;

    const overlapX = !(x + spacing <= placed.x || x >= placed.x + pSpacing);
    const overlapY = !(y + spacing <= placed.y || y >= placed.y + pSpacing);

    if (overlapX && overlapY) {
      return false; // collision detected
    }
  }

  return true;
}

 // Enemy proximity check
  if (planter.plants) {
    for (const other of planter.plants) {
      const enemyDistance = plant.spacing || 12;
      if ((plant.enemies || []).includes(other.name)) {
        const distX = Math.abs(other.x - px);
        const distY = Math.abs(other.y - py);
        if (distX < enemyDistance && distY < enemyDistance) {
          return false;
        }
      }
    }
  }

  return true;
}

// AUTO-arrange button function
function autoArrange() {
  const selectedPlanter = planters[0]; // Assume 1 for now
  if (!selectedPlanter) return;

  const unplacedPlants = companions.slice(); // Copy of all plants
  for (const plant of unplacedPlants) {
    let placed = false;

    for (let x = 0; x < selectedPlanter.widthIn; x += GRID_UNIT) {
      for (let y = 0; y < selectedPlanter.heightIn; y += GRID_UNIT) {
        if (validatePlantFootprint(selectedPlanter, x, y, plant)) {
          const cell = selectedPlanter.cells.find(c => parseInt(c.dataset.x) === x && parseInt(c.dataset.y) === y);
          if (cell) {
            placePlant(cell, plant);
            placed = true;
            break;
          }
        }
      }
      if (placed) break;
    }
  }

  alert('Auto-arrangement complete.');
}
function renderPlantList() {
  const zone = document.getElementById('filterZone').value.toLowerCase();
  const season = document.getElementById('filterSeason').value;
  const lifecycle = document.getElementById('filterLifecycle').value;

  const list = document.getElementById('plantList');
  list.innerHTML = '';

  companions.forEach(plant => {
    if (
      (zone && !plant.zones?.some(z => z.toLowerCase() === zone)) ||
      (season && plant.season !== season) ||
      (lifecycle && plant.lifecycle !== lifecycle)
    ) return;

    const div = document.createElement('div');
    div.className = 'plant-draggable';
    div.textContent = plant.name;
    div.draggable = true;
    div.ondragstart = () => selectedPlant = plant;

    // Tooltip on hover with filter details
    div.title = `Light: ${plant.light}, Water: ${plant.water}, Zones: ${plant.zones?.join(', ')}, Lifecycle: ${plant.lifecycle}`;

    list.appendChild(div);
  });
}
function applyPlantFilters() {
  renderPlantList();
}



// Global plant dataset with full companion planting ruleset
// This is loaded externally in the HTML and consumed by the UI logic

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
    placement: ["windowsill", "counter"],
    harvestsPerYear: 3,
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
    placement: ["outdoor"],
    harvestsPerYear: 2,
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
    placement: ["counter", "outdoor"],
    harvestsPerYear: 3,
    companions: ["Carrot", "Tomato", "Basil"],
    enemies: []
  },
  {
    name: "Mint",
    type: "herb",
    spacing: 12,
    height: 24,
    light: "partial shade",
    water: "High - 1.5 inches/week",
    wateringLevel: "high",
    temperature: "60-75°F",
    zone: [3, 4, 5, 6, 7, 8],
    lifecycle: "perennial",
    season: "spring",
    placement: ["container", "windowsill"],
    harvestsPerYear: 4,
    companions: ["Cabbage", "Tomato"],
    enemies: ["Parsley"]
  },
  {
    name: "Lavender",
    type: "herb",
    spacing: 18,
    height: 24,
    light: "full sun",
    water: "Low - 0.5 inch/week",
    wateringLevel: "low",
    temperature: "60-85°F",
    zone: [5, 6, 7, 8],
    lifecycle: "perennial",
    season: "summer",
    placement: ["windowsill", "outdoor"],
    harvestsPerYear: 1,
    companions: ["Rosemary", "Echinacea"],
    enemies: ["Mint"]
  },
  {
    name: "Echinacea",
    type: "flower",
    spacing: 12,
    height: 36,
    light: "full sun",
    water: "Medium - 1 inch/week",
    wateringLevel: "medium",
    temperature: "60-80°F",
    zone: [3, 4, 5, 6, 7],
    lifecycle: "perennial",
    season: "summer",
    placement: ["outdoor"],
    harvestsPerYear: 1,
    companions: ["Lavender"],
    enemies: []
  },
  {
    name: "Aloe Vera",
    type: "succulent",
    spacing: 8,
    height: 14,
    light: "full sun",
    water: "Low - 0.25 inch/week",
    wateringLevel: "low",
    temperature: "70-95°F",
    zone: [9, 10],
    lifecycle: "perennial",
    season: "summer",
    placement: ["windowsill", "counter"],
    harvestsPerYear: 2,
    companions: ["Cactus"],
    enemies: []
  },
  {
    name: "Cilantro",
    type: "herb",
    spacing: 6,
    height: 12,
    light: "partial sun",
    water: "Medium - 0.75 inch/week",
    wateringLevel: "medium",
    temperature: "50-75°F",
    zone: [2, 3, 4, 5, 6, 7],
    lifecycle: "annual",
    season: "spring",
    placement: ["windowsill", "outdoor"],
    harvestsPerYear: 2,
    companions: ["Spinach"],
    enemies: ["Fennel"]
  },
  {
    name: "Fennel",
    type: "vegetable",
    spacing: 12,
    height: 30,
    light: "full sun",
    water: "Medium - 1 inch/week",
    wateringLevel: "medium",
    temperature: "60-75°F",
    zone: [4, 5, 6, 7, 8],
    lifecycle: "annual",
    season: "summer",
    placement: ["outdoor"],
    harvestsPerYear: 1,
    companions: [],
    enemies: ["Cilantro", "Tomato", "Basil"]
  },
  {
    name: "Lemon Tree",
    type: "fruit",
    spacing: 48,
    height: 96,
    light: "full sun",
    water: "High - 2 inches/week",
    wateringLevel: "high",
    temperature: "65-95°F",
    zone: [9, 10, 11],
    lifecycle: "perennial",
    season: "year-round",
    placement: ["floor", "outdoor"],
    harvestsPerYear: 2,
    companions: ["Marigold"],
    enemies: ["Potato"]
  }
];
