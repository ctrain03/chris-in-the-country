import Link from 'next/link'
import Layout from '../components/Layout'
import { AGENT } from '../lib/regions'

const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Chris in the Country',
  description: 'Chris is a Bay Area real estate agent specializing in farm, ranch, and country properties of 0.5 acres or more across the East Bay, South Bay, and North Bay.',
  url: AGENT.url,
  telephone: AGENT.phone,
  email: AGENT.email,
  areaServed: [
    'East Bay, California',
    'South Bay, California',
    'North Bay, California',
    'Livermore Valley',
    'Tri-Valley',
    'Morgan Hill',
    'Gilroy',
    'Sonoma County',
    'Napa County',
    'Marin County',
  ],
  knowsAbout: [
    'Farm Real Estate',
    'Ranch Real Estate',
    'Country Properties',
    'Equestrian Estates',
    'Vineyard Properties',
    'Hobby Farms',
    'Rural Land',
  ],
  hasCredential: `CA DRE #${AGENT.dre}`,
  memberOf: {
    '@type': 'Organization',
    name: AGENT.brokerage,
  },
}

export default function AboutPage() {
  return (
    <Layout
      title="About Chris — Bay Area Farm & Ranch Agent"
      description={`Learn about Chris, a Bay Area real estate agent specializing in farm, ranch, and country properties. CA DRE #${AGENT.dre}, ${AGENT.brokerage}.`}
      canonicalPath="/about"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-28 px-4 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1920&q=80&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            About Chris
          </h1>
          <p className="text-cream text-xl">
            Bay Area Farm, Ranch &amp; Country Real Estate Specialist
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-3xl text-navy font-bold">
              A Passion for Country Living
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chris has spent years helping Bay Area buyers and sellers navigate the unique world of farm, ranch, and country real estate. With a deep appreciation for the land and an intimate knowledge of the Bay Area&apos;s diverse countryside — from the rolling ranchlands of the Livermore Valley to the vineyard estates of Sonoma — Chris brings both expertise and genuine passion to every transaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Specializing exclusively in properties of 0.5 acres or more, Chris understands the distinct needs of buyers seeking space, privacy, and a connection to the land. Whether you&apos;re dreaming of an equestrian estate in Morgan Hill, a hobby farm in the East Bay hills, or a wine country retreat north of the Golden Gate, Chris has the knowledge and network to make it happen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an agent with Boyd Real Estate, Chris combines local expertise with the resources of a trusted brokerage to deliver an exceptional client experience from first showing to closing day.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-cream rounded-xl p-6 border border-gray-200">
              <h3 className="font-serif text-xl text-navy font-bold mb-4">Credentials</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">License</dt>
                  <dd className="text-navy font-medium">CA DRE #{AGENT.dre}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Brokerage</dt>
                  <dd className="text-navy font-medium">{AGENT.brokerage}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Specialty</dt>
                  <dd className="text-navy font-medium">Farm, Ranch &amp; Country Properties (0.5+ acres)</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Phone</dt>
                  <dd><a href={`tel:${AGENT.phone}`} className="text-gold hover:text-yellow-600 font-medium">{AGENT.phone}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-cream py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl text-navy font-bold mb-6 text-center">Areas Served</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="font-serif text-lg text-gold font-bold mb-3">East Bay</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Livermore Valley</li>
                <li>Tri-Valley</li>
                <li>East Bay Hills</li>
                <li>Contra Costa County</li>
                <li>Alameda County</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="font-serif text-lg text-gold font-bold mb-3">South Bay</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Morgan Hill</li>
                <li>Gilroy</li>
                <li>Santa Clara Valley Foothills</li>
                <li>Santa Cruz Mountains</li>
                <li>Santa Clara County</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="font-serif text-lg text-gold font-bold mb-3">North Bay</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Sonoma County</li>
                <li>Napa County</li>
                <li>Marin County</li>
                <li>Wine Country</li>
                <li>Petaluma &amp; Surrounding Areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-gold font-bold mb-4">
            Ready to Start Your Country Property Search?
          </h2>
          <p className="text-cream mb-6">
            Contact Chris today for a free consultation on Bay Area farm and ranch real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${AGENT.phone}`} className="bg-gold text-navy px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Call {AGENT.phone}
            </a>
            <Link href="/contact" className="border-2 border-cream text-cream px-8 py-3 rounded font-semibold hover:bg-cream hover:text-navy transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
