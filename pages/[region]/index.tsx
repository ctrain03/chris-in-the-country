import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { AGENT, REGIONS, REGION_KEYS, TIER_KEYS, Region, Tier } from '../../lib/regions'

interface RegionPageProps {
  regionKey: Region
  regionLabel: string
  regionDescription: string
  tiers: Array<{
    key: Tier
    label: string
    priceRange: string
  }>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: REGION_KEYS.map(region => ({ params: { region } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<RegionPageProps> = async ({ params }) => {
  const regionKey = params?.region as Region
  const region = REGIONS[regionKey]

  return {
    props: {
      regionKey,
      regionLabel: region.label,
      regionDescription: region.description,
      tiers: TIER_KEYS.map(tier => ({
        key: tier,
        label: region.tiers[tier].label,
        priceRange: region.tiers[tier].priceRange,
      })),
    },
  }
}

export default function RegionPage({ regionKey, regionLabel, regionDescription, tiers }: RegionPageProps) {
  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Chris in the Country',
    url: AGENT.url,
    telephone: AGENT.phone,
    areaServed: regionLabel,
    hasCredential: `CA DRE #${AGENT.dre}`,
    memberOf: {
      '@type': 'Organization',
      name: AGENT.brokerage,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: AGENT.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: regionLabel,
        item: `${AGENT.url}/${regionKey}`,
      },
    ],
  }

  return (
    <Layout
      title={`${regionLabel} Farm & Ranch Properties`}
      description={`Browse farm, ranch, and country real estate in the ${regionLabel}. ${regionDescription} CA DRE #${AGENT.dre}.`}
      canonicalPath={`/${regionKey}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">{regionLabel}</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            {regionLabel} Farm &amp; Ranch Properties
          </h1>
          <p className="text-cream text-xl leading-relaxed max-w-2xl mx-auto">
            {regionDescription}
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl text-navy font-bold mb-8 text-center">
          Browse by Price Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(tier => (
            <Link key={tier.key} href={`/${regionKey}/${tier.key}`} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
              <div className="bg-navy p-5 group-hover:bg-gold transition-colors">
                <h3 className="font-serif text-lg text-gold group-hover:text-navy font-bold transition-colors">
                  {tier.label}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">
                  {regionLabel} properties in the {tier.priceRange} range.
                </p>
                <span className="text-navy group-hover:text-gold font-medium text-sm flex items-center gap-1 transition-colors">
                  View Listings
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cream py-12 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-navy font-bold mb-3">
            Looking for {regionLabel} Country Properties?
          </h2>
          <p className="text-gray-600 mb-6">
            Chris specializes in {regionLabel} farm and ranch real estate. Get in touch for a personalized search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${AGENT.phone}`} className="bg-navy text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              Call {AGENT.phone}
            </a>
            <Link href="/contact" className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
