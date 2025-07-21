const companionMap = {
  aloe: {
    companions: ['succulents', 'cacti'],
    enemies: ['shade plants'],
    type: 'succulent',
    spacing: 12,
    height: 12,
    season: 'year-round',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) every 2–3 weeks; allow soil to dry fully'
    },
    light: 'full sun',
    zones: [8, 9, 10, 11],
    indoorPlacement: ['windowsill'],
    temperature: { min: 55, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  basil: {
    companions: ['tomato', 'pepper', 'oregano', 'chamomile'],
    enemies: ['sage', 'fennel'],
    type: 'herb',
    spacing: 10,
    height: 18,
    season: 'summer',
    watering: {
      level: 'medium',
      description: 'About 1 inch (2.5 cm) per week; keep soil evenly moist'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8, 9, 10],
    indoorPlacement: ['windowsill', 'counter'],
    temperature: { min: 70, max: 90 },
    harvestsPerYear: 2,
    lifecycle: 'annual'
  },
  blueberry: {
    companions: ['thyme', 'pine', 'azalea'],
    enemies: ['tomato', 'potato'],
    type: 'fruit',
    spacing: 36,
    height: 36,
    season: 'spring',
    watering: {
      level: 'high',
      description: '1.5–2 inches (3.8–5 cm) per week; keep acidic soil moist'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8],
    indoorPlacement: [],
    temperature: { min: 45, max: 80 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  carrot: {
    companions: ['chives', 'lettuce', 'peas'],
    enemies: ['dill'],
    type: 'vegetable',
    spacing: 3,
    height: 12,
    season: 'spring',
    watering: {
      level: 'medium',
      description: 'About 1 inch (2.5 cm) per week; keep soil consistently moist but not soggy'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8],
    indoorPlacement: [],
    temperature: { min: 50, max: 75 },
    harvestsPerYear: 1,
    lifecycle: 'biennial'
  },
  chamomile: {
    companions: ['cabbage', 'onion', 'herbs'],
    enemies: [],
    type: 'herb',
    spacing: 6,
    height: 10,
    season: 'spring',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) per week; prefers dry, well-drained soil'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8],
    indoorPlacement: ['windowsill'],
    temperature: { min: 50, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'annual'
  },
  cinnamon: {
    companions: ['alliums', 'chamomile'],
    enemies: [],
    type: 'tree',
    spacing: 120,
    height: 240,
    season: 'year-round',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week in well-drained soil'
    },
    light: 'partial shade',
    zones: [10, 11],
    indoorPlacement: [],
    temperature: { min: 75, max: 95 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  dill: {
    companions: ['cabbage', 'cucumber', 'lettuce'],
    enemies: ['carrot', 'tomato'],
    type: 'herb',
    spacing: 12,
    height: 36,
    season: 'spring',
    watering: {
      level: 'medium',
      description: 'About 1 inch (2.5 cm) per week; water when top 1 inch is dry'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8, 9],
    indoorPlacement: ['windowsill'],
    temperature: { min: 60, max: 75 },
    harvestsPerYear: 1,
    lifecycle: 'annual'
  },
  echinacea: {
    companions: ['lavender', 'chamomile'],
    enemies: [],
    type: 'herb',
    spacing: 18,
    height: 36,
    season: 'summer',
    watering: {
      level: 'low',
      description: '0.5–1 inch (1.2–2.5 cm) per week; drought-tolerant once established'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: [],
    temperature: { min: 60, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  fennel: {
    companions: [],
    enemies: ['almost all plants'],
    type: 'herb',
    spacing: 15,
    height: 48,
    season: 'summer',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; avoid overwatering'
    },
    light: 'full sun',
    zones: [5, 6, 7, 8, 9],
    indoorPlacement: [],
    temperature: { min: 60, max: 80 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  garlic: {
    companions: ['tomato', 'roses', 'carrot', 'cabbage'],
    enemies: ['peas', 'beans'],
    type: 'vegetable',
    spacing: 4,
    height: 18,
    season: 'fall',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; water regularly until tops begin to yellow'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8],
    indoorPlacement: [],
    temperature: { min: 40, max: 75 },
    harvestsPerYear: 1,
    lifecycle: 'annual'
  },
  ginger: {
    companions: ['turmeric'],
    enemies: [],
    type: 'root',
    spacing: 12,
    height: 24,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; keep soil moist but not soggy'
    },
    light: 'partial shade',
    zones: [8, 9, 10, 11],
    indoorPlacement: ['floor', 'counter'],
    temperature: { min: 65, max: 90 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  hibiscus: {
    companions: ['basil', 'lemongrass'],
    enemies: [],
    type: 'flower',
    spacing: 24,
    height: 60,
    season: 'summer',
    watering: {
      level: 'high',
      description: '2 inches (5 cm) per week or more in heat; keep soil moist'
    },
    light: 'full sun',
    zones: [8, 9, 10, 11],
    indoorPlacement: ['floor', 'balcony'],
    temperature: { min: 65, max: 90 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  hyssop: {
    companions: ['cabbage', 'grapes'],
    enemies: [],
    type: 'herb',
    spacing: 12,
    height: 18,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; drought-tolerant once established'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8],
    indoorPlacement: ['windowsill'],
    temperature: { min: 55, max: 80 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
   indoor_fern: {
    companions: ['air_plant', 'pothos'],
    enemies: ['cactus'],
    type: 'houseplant',
    spacing: 18,
    height: 24,
    season: 'year-round',
    watering: {
      level: 'high',
      description: 'Keep soil moist; water 2–3 times/week or as needed indoors'
    },
    light: 'indirect light',
    zones: [],
    indoorPlacement: ['floor', 'counter'],
    temperature: { min: 60, max: 75 },
    harvestsPerYear: 0,
    lifecycle: 'perennial'
  },
   lavender: {
    companions: ['rosemary', 'thyme', 'echinacea'],
    enemies: ['mint'],
    type: 'herb',
    spacing: 18,
    height: 24,
    season: 'summer',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) per week; drought-tolerant, do not overwater'
    },
    light: 'full sun',
    zones: [5, 6, 7, 8, 9],
    indoorPlacement: ['windowsill'],
    temperature: { min: 65, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  lemon: {
    companions: ['basil', 'chamomile'],
    enemies: ['walnut'],
    type: 'tree',
    spacing: 120,
    height: 180,
    season: 'year-round',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; increase during hot weather'
    },
    light: 'full sun',
    zones: [9, 10, 11],
    indoorPlacement: ['floor', 'balcony'],
    temperature: { min: 60, max: 90 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  lemon_balm: {
    companions: ['basil', 'chamomile'],
    enemies: ['lavender'],
    type: 'herb',
    spacing: 12,
    height: 24,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; prefers moist soil'
    },
    light: 'partial shade',
    zones: [4, 5, 6, 7, 8, 9],
    indoorPlacement: ['windowsill', 'counter'],
    temperature: { min: 55, max: 80 },
    harvestsPerYear: 2,
    lifecycle: 'perennial'
  },
  lemongrass: {
    companions: ['basil', 'hibiscus'],
    enemies: ['mint'],
    type: 'herb',
    spacing: 24,
    height: 48,
    season: 'summer',
    watering: {
      level: 'high',
      description: '2 inches (5 cm) per week; do not allow soil to dry out'
    },
    light: 'full sun',
    zones: [9, 10, 11],
    indoorPlacement: ['floor', 'balcony'],
    temperature: { min: 70, max: 95 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  mint: {
    companions: ['cabbage', 'tomato'],
    enemies: ['lavender', 'rosemary'],
    type: 'herb',
    spacing: 18,
    height: 24,
    season: 'spring',
    watering: {
      level: 'high',
      description: 'Keep soil consistently moist; about 1.5–2 inches (3.8–5 cm) per week'
    },
    light: 'partial shade',
    zones: [3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: ['counter', 'windowsill'],
    temperature: { min: 55, max: 85 },
    harvestsPerYear: 2,
    lifecycle: 'perennial'
  },
  moringa: {
    companions: ['basil', 'beans'],
    enemies: [],
    type: 'tree',
    spacing: 72,
    height: 300,
    season: 'summer',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; drought-resistant once mature'
    },
    light: 'full sun',
    zones: [9, 10, 11],
    indoorPlacement: [],
    temperature: { min: 70, max: 100 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
   nasturtium: {
    companions: ['bean', 'cucumber', 'radish'],
    enemies: ['potato'],
    type: 'flower',
    spacing: 12,
    height: 12,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; allow topsoil to dry between waterings'
    },
    light: 'full sun',
    zones: [2, 3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: ['windowsill'],
    temperature: { min: 55, max: 75 },
    harvestsPerYear: 1,
    lifecycle: 'annual'
  },
  oregano: {
    companions: ['basil', 'tomato', 'pepper'],
    enemies: ['mint'],
    type: 'herb',
    spacing: 12,
    height: 18,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; prefers slightly dry soil'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8],
    indoorPlacement: ['windowsill', 'counter'],
    temperature: { min: 60, max: 80 },
    harvestsPerYear: 2,
    lifecycle: 'perennial'
  },
  parsley: {
    companions: ['tomato', 'asparagus', 'corn'],
    enemies: ['mint', 'lettuce'],
    type: 'herb',
    spacing: 6,
    height: 12,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; keep soil evenly moist'
    },
    light: 'full sun',
    zones: [4, 5, 6, 7, 8, 9],
    indoorPlacement: ['counter', 'windowsill'],
    temperature: { min: 55, max: 75 },
    harvestsPerYear: 2,
    lifecycle: 'biennial'
  },
  rosemary: {
    companions: ['cabbage', 'bean', 'sage'],
    enemies: ['mint'],
    type: 'herb',
    spacing: 18,
    height: 36,
    season: 'spring',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) per week; allow soil to dry between waterings'
    },
    light: 'full sun',
    zones: [6, 7, 8, 9],
    indoorPlacement: ['windowsill'],
    temperature: { min: 60, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  sage: {
    companions: ['rosemary', 'carrot', 'cabbage'],
    enemies: ['cucumber'],
    type: 'herb',
    spacing: 18,
    height: 24,
    season: 'spring',
    watering: {
      level: 'low',
      description: '0.5–1 inch (1.2–2.5 cm) per week; drought-tolerant'
    },
    light: 'full sun',
    zones: [5, 6, 7, 8],
    indoorPlacement: ['windowsill'],
    temperature: { min: 60, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  spearmint: {
    companions: ['cabbage', 'tomato'],
    enemies: ['lavender', 'rosemary'],
    type: 'herb',
    spacing: 18,
    height: 18,
    season: 'spring',
    watering: {
      level: 'high',
      description: '1.5–2 inches (3.8–5 cm) per week; keep soil consistently moist'
    },
    light: 'partial shade',
    zones: [3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: ['counter', 'windowsill'],
    temperature: { min: 55, max: 85 },
    harvestsPerYear: 2,
    lifecycle: 'perennial'
  },
    thyme: {
    companions: ['lavender', 'rosemary', 'sage'],
    enemies: [],
    type: 'herb',
    spacing: 12,
    height: 12,
    season: 'spring',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) per week; drought-tolerant and well-drained soil'
    },
    light: 'full sun',
    zones: [5, 6, 7, 8, 9],
    indoorPlacement: ['windowsill'],
    temperature: { min: 60, max: 85 },
    harvestsPerYear: 2,
    lifecycle: 'perennial'
  },
  tomato: {
    companions: ['basil', 'carrot', 'onion', 'marigold', 'parsley'],
    enemies: ['corn', 'fennel'],
    type: 'vegetable',
    spacing: 24,
    height: 60,
    season: 'summer',
    watering: {
      level: 'high',
      description: '2 inches (5 cm) per week; water at base, keep foliage dry'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: ['balcony'],
    temperature: { min: 65, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'annual'
  },
  turmeric: {
    companions: ['ginger'],
    enemies: [],
    type: 'root',
    spacing: 12,
    height: 36,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; keep soil evenly moist'
    },
    light: 'partial shade',
    zones: [8, 9, 10, 11],
    indoorPlacement: ['floor', 'counter'],
    temperature: { min: 65, max: 90 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  valerian: {
    companions: ['chamomile', 'catnip'],
    enemies: [],
    type: 'herb',
    spacing: 18,
    height: 48,
    season: 'spring',
    watering: {
      level: 'medium',
      description: '1 inch (2.5 cm) per week; prefers moist soil'
    },
    light: 'partial shade',
    zones: [4, 5, 6, 7, 8],
    indoorPlacement: ['windowsill'],
    temperature: { min: 60, max: 75 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  },
  yarrow: {
    companions: ['lavender', 'echinacea'],
    enemies: [],
    type: 'herb',
    spacing: 12,
    height: 24,
    season: 'summer',
    watering: {
      level: 'low',
      description: '0.5 inch (1.2 cm) per week; very drought-tolerant'
    },
    light: 'full sun',
    zones: [3, 4, 5, 6, 7, 8, 9],
    indoorPlacement: ['balcony'],
    temperature: { min: 60, max: 85 },
    harvestsPerYear: 1,
    lifecycle: 'perennial'
  }
};
    
