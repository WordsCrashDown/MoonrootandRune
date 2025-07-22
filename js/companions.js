const GRID_UNIT = 1; // inches
const gridCanvas = document.getElementById('gridCanvas');
const tooltip = document.getElementById('tooltip');
let planters = [];
let selectedPlant = null;

const planter = {
  id: `planter_${Date.now()}`,
  name,
  widthIn: width * 12,
  heightIn: height * 12,
  x: 0,
  y: 0,
  cells: [],
  plants: [],
  occupiedCells: {}  // 🔧 new: track occupied grid cells
};
function placePlant(cell, plant) {
  const planterId = cell.dataset.planterId;
  const planter = planters.find(p => p.id === planterId);
  const x = parseInt(cell.dataset.x);
  const y = parseInt(cell.dataset.y);
  const spacing = plant.spacing || 12;
function placePlantAt(planter, x, y, plant) {
  const spacing = plant.spacing || 12;
  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      const cell = planter.cells.find(c =>
        parseInt(c.dataset.x) === x + dx && parseInt(c.dataset.y) === y + dy
      );
      if (cell) cell.classList.add('footprint');

      const key = `${x + dx},${y + dy}`;
      planter.occupiedCells[key] = plant.name;
    }
  }

  const label = document.createElement('div');
  label.textContent = plant.name;
  label.style.position = 'absolute';
  label.style.left = `${inchToPx(x)}px`;
  label.style.top = `${inchToPx(y)}px`;
  label.style.color = '#fff';
  label.style.fontSize = '0.7em';
  label.style.background = 'rgba(0,0,0,0.5)';
  label.style.padding = '1px 3px';
  gridCanvas.appendChild(label);
}

  // Track plant position
  planter.plants.push({ plant, x, y });

  // Mark occupied cells
  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      const key = `${x + dx}_${y + dy}`;
      planter.occupiedCells[key] = plant;
    }
  }

  // Visual label
  const label = document.createElement('div');
  label.textContent = plant.name;
  label.style.position = 'absolute';
  label.style.left = `${cell.style.left}`;
  label.style.top = `${cell.style.top}`;
  label.style.color = '#fff';
  label.style.fontSize = '0.7em';
  label.style.background = 'rgba(0,0,0,0.5)';
  label.style.padding = '1px 3px';
  gridCanvas.appendChild(label);
}
function validatePlantFootprint(planter, x, y, plant) {
  const spacing = plant.spacing || 12;
  let valid = true;

  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      const cellX = x + dx;
      const cellY = y + dy;

      if (cellX >= planter.widthIn || cellY >= planter.heightIn) return false;

      const key = `${cellX},${cellY}`;
      const occupant = planter.occupiedCells?.[key];
      if (occupant) {
        // Check for enemy conflict
        const enemyList = plant.enemies || [];
        if (enemyList.includes(occupant)) return false;

        // Spacing conflict (same cell already taken)
        valid = false;
      }
    }
  }

  return valid;
}

function validateLayout() {
  let messages = [];

  planters.forEach(planter => {
    const placed = planter.plants;

    for (let i = 0; i < placed.length; i++) {
      const a = placed[i];
      const aName = a.plant.name.toLowerCase();

      for (let j = 0; j < placed.length; j++) {
        if (i === j) continue;
        const b = placed[j];
        const bName = b.plant.name.toLowerCase();

        const dist = Math.hypot(a.x - b.x, a.y - b.y);

        // Companion/enemy check
        if (a.plant.enemies?.map(n => n.toLowerCase()).includes(bName)) {
          messages.push(`⚠️ ${a.plant.name} should not be near ${b.plant.name}`);
        }
        if (a.plant.companions?.map(n => n.toLowerCase()).includes(bName) && dist > (a.plant.spacing || 12) * 2) {
          messages.push(`ℹ️ ${a.plant.name} may be too far from companion ${b.plant.name}`);
        }
      }
    }
  });

  if (messages.length === 0) {
    alert('✅ Layout is valid! No enemy or spacing conflicts detected.');
  } else {
    alert(messages.join('\n'));
  }
  function highlightFootprint(planter, x, y, plant, valid) {
  clearFootprint();
  const spacing = plant.spacing || 12;

  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      const cellX = x + dx;
      const cellY = y + dy;
      const cell = planter.cells.find(c =>
        parseInt(c.dataset.x) === cellX && parseInt(c.dataset.y) === cellY
      );

      if (cell) {
        const key = `${cellX},${cellY}`;
        const occupant = planter.occupiedCells?.[key];
        if (occupant && (plant.enemies || []).includes(occupant)) {
          cell.classList.add('hover-invalid');
        } else if (occupant) {
          cell.classList.add('hover-warning');
        } else {
          cell.classList.add('hover-valid');
        }
      }
    }
  }
}

highlightFootprint();

}
  

function autoArrangePlants() {
  const unplaced = [...companions];
  for (const plant of unplaced) {
    for (const planter of planters) {
      let placed = false;
      for (let x = 0; x < planter.widthIn; x += GRID_UNIT) {
        for (let y = 0; y < planter.heightIn; y += GRID_UNIT) {
          if (validatePlantFootprint(planter, x, y, plant)) {
            placePlantAt(planter, x, y, plant);
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
      if (placed) break;
    }
  }
  alert(`Auto-arranged ${usedPlants.length} plants.`);
}
function validateCompanionsNearby(planter, x, y, plant) {
  const spacing = plant.spacing || 12;

  for (let entry of planter.plants) {
    const dx = Math.abs(entry.x - x);
    const dy = Math.abs(entry.y - y);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= spacing) {
      if (plant.enemies && plant.enemies.includes(entry.plant.name)) return false;
    }
  }

  return true;
}
function placePlantByCoords(planter, x, y, plant) {
  const spacing = plant.spacing || 12;
  const label = document.createElement('div');
  label.textContent = plant.name;
  label.style.position = 'absolute';
  label.style.left = `${inchToPx(x)}px`;
  label.style.top = `${inchToPx(y)}px`;
  label.style.color = '#fff';
  label.style.fontSize = '0.7em';
  label.style.background = 'rgba(0,0,0,0.5)';
  label.style.padding = '1px 3px';
  gridCanvas.appendChild(label);

  // Track occupied cells
  for (let dx = 0; dx < spacing; dx += GRID_UNIT) {
    for (let dy = 0; dy < spacing; dy += GRID_UNIT) {
      const key = `${x + dx}_${y + dy}`;
      planter.occupiedCells = planter.occupiedCells || {};
      planter.occupiedCells[key] = true;
    }
  }

  planter.plants.push({ plant, x, y });
}
function exportLayoutAsImage() {
  const originalScroll = gridCanvas.scrollTop;
  html2canvas(gridCanvas, {
    backgroundColor: null,
    useCORS: true,
    scale: 2
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'moonroot-garden-layout.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    gridCanvas.scrollTop = originalScroll;
  });
}

let scale = 1;
let isPanning = false;
let startX = 0, startY = 0;
let offsetX = 0, offsetY = 0;

gridCanvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  scale = Math.min(Math.max(scale + delta, 0.3), 2.5);
  applyTransform();
});

gridCanvas.addEventListener('mousedown', (e) => {
  isPanning = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  gridCanvas.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isPanning) return;
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  applyTransform();
});

document.addEventListener('mouseup', () => {
  isPanning = false;
  gridCanvas.style.cursor = 'grab';
});

function applyTransform() {
  gridCanvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}
function addPlanter(){
setTimeout(() => {
  autoZoomToFit();
}, 200);
occupiedCells: {}

}
function autoZoomToFit() {
  const canvasRect = gridCanvas.getBoundingClientRect();
  const bounds = gridCanvas.scrollWidth;
  const totalWidth = Math.max(...planters.map(p => p.x + p.widthIn)) * 4;
  const totalHeight = Math.max(...planters.map(p => p.y + p.heightIn)) * 4;

  const scaleX = canvasRect.width / totalWidth;
  const scaleY = canvasRect.height / totalHeight;

  scale = Math.min(scaleX, scaleY, 1);
  offsetX = 0;
  offsetY = 0;
  applyTransform();
}

div.onmouseover = (e) => {
  tooltip.innerHTML = `
    <strong>${plant.name}</strong><br>
    Spacing: ${plant.spacing}"<br>
    Light: ${plant.light}<br>
    Water: ${plant.watering}<br>
    Temp: ${plant.temperature}<br>
    Zone: ${plant.zones?.join(', ') || 'N/A'}<br>
    Season: ${plant.season || 'N/A'}<br>
    Life: ${plant.lifecycle || 'N/A'}
  `;
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 10 + 'px';
  tooltip.style.top = e.pageY + 10 + 'px';
};

div.onmouseleave = () => {
  tooltip.style.display = 'none';
};



const zone = document.getElementById('filterZone')?.value?.toLowerCase() || '';
const season = document.getElementById('filterSeason')?.value?.toLowerCase() || '';
const lifecycle = document.getElementById('filterLifecycle')?.value?.toLowerCase() || '';

const filtered = companions.filter(p => {
  return (!zone || (p.zones || []).some(z => z.toLowerCase().includes(zone))) &&
         (!season || (p.season || '').toLowerCase().includes(season)) &&
         (!lifecycle || (p.lifecycle || '').toLowerCase().includes(lifecycle));
});

filtered.forEach(plant => {
  const div = document.createElement('div');
  div.className = 'plant-draggable';
  div.textContent = plant.name;
  div.draggable = true;
  div.onmouseover = (e) => {
    tooltip.innerHTML = `
      <strong>${plant.name}</strong><br>
      Spacing: ${plant.spacing}"<br>
      Light: ${plant.light}<br>
      Water: ${plant.watering}<br>
      Temp: ${plant.temperature}<br>
      Zone: ${plant.zones?.join(', ') || 'N/A'}<br>
      Season: ${plant.season || 'N/A'}<br>
      Life: ${plant.lifecycle || 'N/A'}
    `;
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  };
  div.onmouseleave = () => tooltip.style.display = 'none';
  div.ondragstart = () => selectedPlant = plant;
  list.appendChild(div);
});
function renderPlantList() {
  const list = document.getElementById('plantList');
  list.innerHTML = '';
  companions.forEach(plant => {
    const div = document.createElement('div');
    div.className = 'plant-draggable';
    div.textContent = plant.name;
    div.draggable = true;
    div.ondragstart = () => selectedPlant = plant;

    div.onmouseover = (e) => {
      const tt = document.getElementById('plantTooltip');
      tt.innerHTML = `
        <strong>${plant.name}</strong><br>
        Lifecycle: ${plant.lifecycle || '—'}<br>
        Zone: ${plant.zones?.join(', ') || '—'}<br>
        Light: ${plant.light || '—'}<br>
        Season: ${plant.season || '—'}
      `;
      tt.style.left = e.pageX + 10 + 'px';
      tt.style.top = e.pageY + 10 + 'px';
      tt.style.display = 'block';
    };

    div.onmouseout = () => {
      document.getElementById('plantTooltip').style.display = 'none';
    };

    div.onclick = () => {
      document.getElementById('modalContent').innerHTML = `
        <h3>${plant.name}</h3>
        <p><strong>Lifecycle:</strong> ${plant.lifecycle || '—'}</p>
        <p><strong>Zones:</strong> ${plant.zones?.join(', ') || '—'}</p>
        <p><strong>Light:</strong> ${plant.light || '—'}</p>
        <p><strong>Season:</strong> ${plant.season || '—'}</p>
      `;
      document.getElementById('plantModal').style.display = 'flex';
    };

    list.appendChild(div);
  });
}
function closeModal() {
  document.getElementById('plantModal').style.display = 'none';
}
