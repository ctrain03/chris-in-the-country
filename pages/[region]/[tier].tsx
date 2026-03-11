import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { AGENT, REGIONS, REGION_KEYS, TIER_KEYS, Region, Tier } from '../../lib/regions'

const REGION_IMAGES: Record<string, string> = {
  'east-bay': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop',
  'south-bay': 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80&auto=format&fit=crop',
  'north-bay': 'https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=1920&q=80&auto=format&fit=crop',
}

interface TierPageProps {
  regionKey: Region
  regionLabel: string
  tierKey: Tier
  tierLabel: string
  priceRange: string
  widgetId: number
  regionDescription: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Array<{ params: { region: string; tier: string } }> = []
  for (const region of REGION_KEYS) {
    for (const tier of TIER_KEYS) {
      paths.push({ params: { region, tier } })
    }
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<TierPageProps> = async ({ params }) => {
  const regionKey = params?.region as Region
  const tierKey = params?.tier as Tier
  const region = REGIONS[regionKey]
  const tierData = region.tiers[tierKey]

  return {
    props: {
      regionKey,
      regionLabel: region.label,
      tierKey,
      tierLabel: tierData.label,
      priceRange: tierData.priceRange,
      widgetId: tierData.widgetId,
      regionDescription: region.description,
    },
  }
}

export default function TierPage({
  regionKey,
  regionLabel,
  tierKey,
  tierLabel,
  priceRange,
  widgetId,
  regionDescription,
}: TierPageProps) {
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

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${regionLabel} ${tierLabel} Farm & Ranch Properties`,
    description: `Browse ${priceRange} farm and ranch listings in the ${regionLabel}. ${regionDescription}`,
    url: `${AGENT.url}/${regionKey}/${tierKey}`,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Chris in the Country',
      telephone: AGENT.phone,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: tierLabel,
        item: `${AGENT.url}/${regionKey}/${tierKey}`,
      },
    ],
  }

  return (
    <Layout
      title={`${regionLabel} ${tierLabel} — Farm & Ranch Listings`}
      description={`Browse ${priceRange} farm, ranch, and country properties in the ${regionLabel}. ${regionDescription} CA DRE #${AGENT.dre}.`}
      canonicalPath={`/${regionKey}/${tierKey}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb + Header */}
      <section
        className="relative bg-cover bg-center py-20 px-4"
        style={{ backgroundImage: `url(${REGION_IMAGES[regionKey]})` }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${regionKey}`} className="hover:text-gold transition-colors">{regionLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">{tierLabel}</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3">
            {regionLabel} {tierLabel}
          </h1>
          <p className="text-gold text-xl font-medium mb-3">{priceRange}</p>
          <p className="text-cream text-base max-w-2xl leading-relaxed">{regionDescription}</p>
        </div>
      </section>

      {/* Listings / IDX Widget */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl text-navy font-bold mb-6">
          Available Listings — {regionLabel} {tierLabel}
        </h2>
        <p className="text-gray-600 mb-8 text-sm">
          Showing farm, ranch, and country properties priced at {priceRange} in the {regionLabel}. All listings updated in real time via IDX Broker.
        </p>

        {/* IDX Broker Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 min-h-96">
          <div dangerouslySetInnerHTML={{
            __html: `<script charset="UTF-8" type="text/javascript" id="idxwidgetsrc-${widgetId}" src="//idxbroker.com/idx/widget.php?widgetid=${widgetId}"></script>`
          }} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cream py-12 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-navy font-bold mb-3">
            Questions About These Listings?
          </h2>
          <p className="text-gray-600 mb-6">
            Chris can walk you through any property in the {regionLabel}. Schedule a showing or get more information today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${AGENT.phone}`} className="bg-navy text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              Call {AGENT.phone}
            </a>
            <Link href="/contact" className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Request Info
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-4">CA DRE #{AGENT.dre} | {AGENT.brokerage}</p>
        </div>
      </section>
    </Layout>
  )
}
