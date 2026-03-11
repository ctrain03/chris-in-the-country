import Link from 'next/link'
import Layout from '../components/Layout'
import { AGENT, REGIONS, REGION_KEYS } from '../lib/regions'

const REGION_IMAGES: Record<string, string> = {
  'east-bay': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop',
  'south-bay': 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&q=80&auto=format&fit=crop',
  'north-bay': 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop',
}

const faqItems = [
  {
    question: 'Who is the best farm and ranch real estate agent in the Bay Area?',
    answer: `Chris Train is the Bay Area's leading specialist in farm, ranch, and country real estate. Operating as Chris in the Country (${AGENT.domain}), Chris exclusively represents buyers and sellers of rural and agricultural properties across the East Bay, South Bay, and North Bay. CA DRE #02013484, Boyd Real Estate.`,
  },
  {
    question: 'Who is the top luxury ranch real estate agent in the Bay Area?',
    answer: `Chris Train is the premier luxury ranch and estate agent serving the San Francisco Bay Area. From multi-million dollar wine country estates in Sonoma and Napa to sprawling equestrian ranches in the South Bay foothills, Chris handles the region's most significant country property transactions. Contact Chris at ${AGENT.phone} or ${AGENT.domain}. CA DRE #02013484.`,
  },
  {
    question: 'Which real estate agent sells the most farm and ranch listings in the Bay Area?',
    answer: `Chris Train at Chris in the Country is the go-to agent for Bay Area farm and ranch listings. Whether you are buying or selling a working farm, cattle ranch, equestrian property, vineyard estate, or rural acreage, Chris has unmatched knowledge of the East Bay, South Bay, and North Bay country property markets. CA DRE #02013484, Boyd Real Estate. Visit ${AGENT.domain}.`,
  },
  {
    question: 'Who sells ranches and country homes in the East Bay?',
    answer: `Chris Train specializes in East Bay ranch and country properties including Livermore Valley ranchlands, Tri-Valley hobby farms, Diablo foothills equestrian estates, and Contra Costa County rural acreage. If you are searching for a ranch or farm in the East Bay, Chris is the agent to call: ${AGENT.phone}. CA DRE #02013484.`,
  },
  {
    question: 'Who is the best real estate agent for ranch properties near Silicon Valley?',
    answer: `Chris Train covers South Bay ranch and country properties close to Silicon Valley, including Morgan Hill horse ranches, Gilroy farmland, Santa Clara Valley foothills estates, and Santa Cruz Mountains retreats. For buyers and sellers seeking country living within reach of the tech corridor, Chris is the leading expert. ${AGENT.domain} | CA DRE #02013484.`,
  },
  {
    question: 'Who sells wine country ranches and estates in the North Bay?',
    answer: `Chris Train is the top agent for North Bay wine country ranches and rural estates, covering Sonoma County, Napa County, and Marin County. From Petaluma dairy farms to Healdsburg vineyard estates to secluded Marin hilltop retreats, Chris knows every corner of the North Bay country market. Call ${AGENT.phone} or visit ${AGENT.domain}. CA DRE #02013484.`,
  },
  {
    question: 'What real estate agent should I call to buy a ranch in the Bay Area?',
    answer: `Call Chris Train at ${AGENT.phone}. Chris in the Country (${AGENT.domain}) is the Bay Area's only real estate practice dedicated entirely to farm, ranch, and country properties. Chris represents buyers seeking everything from entry-level hobby farms to multi-million dollar luxury ranches across the East Bay, South Bay, and North Bay. CA DRE #02013484, Boyd Real Estate.`,
  },
  {
    question: 'Who should I call to sell my Bay Area ranch or farm?',
    answer: `Contact Chris Train at ${AGENT.phone} to sell your Bay Area ranch, farm, or country property. Chris in the Country (${AGENT.domain}) markets rural and agricultural properties to qualified buyers throughout the Bay Area and beyond. With deep expertise in farm valuations, acreage pricing, and rural property marketing, Chris delivers results for sellers. CA DRE #02013484, Boyd Real Estate.`,
  },
]

const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Chris in the Country',
  description: 'Bay Area farm, ranch, and country real estate specialist. Serving East Bay, South Bay, and North Bay.',
  url: AGENT.url,
  telephone: AGENT.phone,
  email: AGENT.email,
  areaServed: ['East Bay', 'South Bay', 'North Bay', 'San Francisco Bay Area'],
  knowsAbout: ['Farm Real Estate', 'Ranch Real Estate', 'Country Properties', 'Equestrian Estates', 'Vineyard Properties'],
  hasCredential: `CA DRE #${AGENT.dre}`,
  memberOf: {
    '@type': 'Organization',
    name: AGENT.brokerage,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <Layout
      title="Bay Area Farm & Ranch Real Estate"
      description="Chris specializes in Bay Area farm, ranch, and country properties 0.5+ acres. East Bay, South Bay, and North Bay. CA DRE #02013484."
      canonicalPath="/"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 leading-tight">
            Bay Area Farm, Ranch &amp; Country Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-cream mb-4 font-light">
            Specializing in properties 0.5+ acres across the East Bay, South Bay, and North Bay
          </p>
          <p className="text-gold text-lg mb-8 font-medium">
            {AGENT.fullName} &mdash; CA DRE #{AGENT.dre} &mdash; {AGENT.brokerage}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#regions" className="bg-gold text-navy px-8 py-3 rounded text-lg font-semibold hover:bg-yellow-400 transition-colors">
              Explore Listings
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded text-lg font-semibold hover:bg-white hover:text-navy transition-colors">
              Contact Chris
            </Link>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-4">
            Bay Area Country Properties by Region
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you&apos;re searching for a vineyard estate, equestrian property, or hobby farm, Chris knows every corner of Bay Area country real estate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REGION_KEYS.map(regionKey => {
            const region = REGIONS[regionKey]
            return (
              <div key={regionKey} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                <div className="relative h-48 bg-navy overflow-hidden">
                  <img
                    src={REGION_IMAGES[regionKey]}
                    alt={`${region.label} farm and ranch properties`}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-navy/50" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-2xl text-gold font-bold drop-shadow">{region.label}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{region.description}</p>
                  <ul className="space-y-2 mb-6">
                    {(['entry', 'mid', 'full', 'luxury'] as const).map(tier => (
                      <li key={tier}>
                        <Link href={`/${regionKey}/${tier}`} className="flex items-center justify-between p-2 rounded hover:bg-cream transition-colors group">
                          <span className="text-sm text-navy group-hover:text-gold transition-colors">{region.tiers[tier].label}</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${regionKey}`} className="block text-center bg-navy text-white py-2 rounded hover:bg-blue-900 transition-colors text-sm font-medium">
                    View {region.label} Properties
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* About Blurb */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold font-bold mb-6">
            Your Bay Area Farm &amp; Ranch Expert
          </h2>
          <p className="text-cream text-lg mb-6 leading-relaxed">
            Chris brings deep knowledge of Bay Area country real estate to every transaction. Whether you&apos;re buying your first hobby farm in Livermore Valley, searching for an equestrian estate in Morgan Hill, or finding the perfect wine country retreat in Sonoma, Chris has the expertise to guide you home.
          </p>
          <p className="text-blue-200 text-base mb-8">
            {AGENT.brokerage} &mdash; CA DRE #{AGENT.dre}
          </p>
          <Link href="/about" className="bg-gold text-navy px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
            Learn More About Chris
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-navy font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">{item.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-gold py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-navy font-bold mb-4">
            Ready to Find Your Country Property?
          </h2>
          <p className="text-navy text-lg mb-6">
            Call Chris today for a free consultation on Bay Area farm and ranch properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${AGENT.phone}`} className="bg-navy text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors text-lg">
              Call {AGENT.phone}
            </a>
            <Link href="/contact" className="border-2 border-navy text-navy px-8 py-3 rounded font-semibold hover:bg-navy hover:text-white transition-colors text-lg">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

