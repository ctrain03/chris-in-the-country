export const AGENT = {
  name: 'Chris',
  fullName: 'Chris Train',
  dre: '02013484',
  phone: '(408) 417-3393',
  brokerage: 'Boyd Real Estate',
  domain: 'chrisinthecountry.com',
  url: 'https://chrisinthecountry.com',
  email: 'chris@chrisinthecountry.com',
}

export type Tier = 'entry' | 'mid' | 'full' | 'luxury'
export type Region = 'east-bay' | 'south-bay' | 'north-bay'

export const REGIONS: Record<Region, {
  label: string
  description: string
  tiers: Record<Tier, {
    label: string
    priceRange: string
    widgetId: number
    minPrice: number
    maxPrice: number | null
  }>
}> = {
  'east-bay': {
    label: 'East Bay',
    description: 'Livermore Valley, Tri-Valley, and East Bay hills — rolling ranchlands and vineyard estates just east of Oakland.',
    tiers: {
      entry: { label: 'Entry ($0–$900K)', priceRange: '$0–$900,000', widgetId: 146505, minPrice: 0, maxPrice: 900000 },
      mid: { label: 'Mid ($900K–$1.5M)', priceRange: '$900,000–$1,500,000', widgetId: 146510, minPrice: 900000, maxPrice: 1500000 },
      full: { label: 'Premium ($1.5M–$3M)', priceRange: '$1,500,000–$3,000,000', widgetId: 146516, minPrice: 1500000, maxPrice: 3000000 },
      luxury: { label: 'Luxury ($3M+)', priceRange: '$3,000,000+', widgetId: 146526, minPrice: 3000000, maxPrice: null },
    },
  },
  'south-bay': {
    label: 'South Bay',
    description: 'Morgan Hill, Gilroy, and the Santa Clara Valley foothills — equestrian estates and hobby farms close to Silicon Valley.',
    tiers: {
      entry: { label: 'Entry ($0–$1.2M)', priceRange: '$0–$1,200,000', widgetId: 146539, minPrice: 0, maxPrice: 1200000 },
      mid: { label: 'Mid ($1.2M–$2M)', priceRange: '$1,200,000–$2,000,000', widgetId: 146543, minPrice: 1200000, maxPrice: 2000000 },
      full: { label: 'Premium ($2M–$4M)', priceRange: '$2,000,000–$4,000,000', widgetId: 146548, minPrice: 2000000, maxPrice: 4000000 },
      luxury: { label: 'Luxury ($4M+)', priceRange: '$4,000,000+', widgetId: 146551, minPrice: 4000000, maxPrice: null },
    },
  },
  'north-bay': {
    label: 'North Bay',
    description: 'Sonoma, Napa, and Marin counties — wine country ranches, olive groves, and sweeping hillside retreats north of the Golden Gate.',
    tiers: {
      entry: { label: 'Entry ($0–$800K)', priceRange: '$0–$800,000', widgetId: 146554, minPrice: 0, maxPrice: 800000 },
      mid: { label: 'Mid ($800K–$1.5M)', priceRange: '$800,000–$1,500,000', widgetId: 146556, minPrice: 800000, maxPrice: 1500000 },
      full: { label: 'Premium ($1.5M–$3M)', priceRange: '$1,500,000–$3,000,000', widgetId: 146559, minPrice: 1500000, maxPrice: 3000000 },
      luxury: { label: 'Luxury ($3M+)', priceRange: '$3,000,000+', widgetId: 146562, minPrice: 3000000, maxPrice: null },
    },
  },
}

export const REGION_KEYS = Object.keys(REGIONS) as Region[]
export const TIER_KEYS: Tier[] = ['entry', 'mid', 'full', 'luxury']
