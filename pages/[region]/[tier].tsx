import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

// IDX Broker widget IDs - replace with your actual widget IDs from IDX Broker dashboard
const IDX_WIDGETS: Record<string, Record<string, string>> = {
  'east-bay': {
    entry:   '146505',
    mid:     '146510',
    full:    '146516',
    luxury:  '146526',
  },
  'south-bay': {
    entry:   '146539',
    mid:     '146543',
    full:    '146548',
    luxury:  '146551',
  },
  'north-bay': {
    entry:   '146554',
    mid:     '146556',
    full:    '146559',
    luxury:  '146562',
  },
};

const REGION_DATA = {
  'east-bay': {
    name: 'East Bay',
    fullName: 'East Bay Country Homes',
    description: 'Farm, ranch and country properties throughout Brentwood, Knightsen, Byron, Livermore, Oakley, and the Delta — the Bay Area's heartland for rural living.',
    areas: 'Brentwood, Knightsen, Byron, Livermore, Oakley, Antioch, Pittsburg, Clayton, Concord foothills',
    highlights: [
      'Delta waterfront and farmland properties',
      'Horse properties with arena and barn',
      'Vineyard and orchard estates',
      'Historic homesteads with acreage',
    ],
  },
  'south-bay': {
    name: 'South Bay',
    fullName: 'South Bay Country Homes',
    description: 'Luxury farm, ranch and country estates in Morgan Hill, Gilroy, San Martin, and the Santa Clara Valley foothills — where Silicon Valley meets wide open spaces.',
    areas: 'Morgan Hill, Gilroy, San Martin, Hollister, Coyote Valley, Santa Clara foothills',
    highlights: [
      'Equestrian estates with riding trails',
      'Wine country ranches',
      'Private gated country compounds',
      'Agricultural land with development potential',
    ],
  },
  'north-bay': {
    name: 'North Bay',
    fullName: 'North Bay Country Homes',
    description: 'Premier wine country ranches, Marin County estates and Sonoma Valley properties — Northern California's most coveted rural real estate.',
    areas: 'Marin County, Sonoma, Petaluma, Novato, Napa Valley, Pope Valley, Lake County',
    highlights: [
      'Sonoma wine country ranches',
      'Marin hillside country estates',
      'Napa Valley vineyard properties',
      'Coastal-access ranch properties',
    ],
  },
};

const TIER_DATA = {
  entry: {
    name: 'Entry Level',
    label: 'Entry',
    priceRange: '$0 – $1.25 Million',
    minPrice: 0,
    maxPrice: 1250000,
    description: 'Discover accessible entry points into Bay Area country living. These properties offer genuine rural character — acreage, agricultural potential, and space to breathe — at accessible price points.',
  },
  mid: {
    name: 'Mid-Range',
    label: 'Mid',
    priceRange: '$1.25M – $3 Million',
    minPrice: 1250000,
    maxPrice: 3000000,
    description: 'The sweet spot for serious country buyers. Mid-range properties offer meaningful acreage, established improvements, and room to grow your vision — whether that's horses, vines, or simply privacy.',
  },
  full: {
    name: 'Full Luxury',
    label: 'Full',
    priceRange: '$3M – $4.9 Million',
    minPrice: 3000000,
    maxPrice: 4900000,
    description: 'Estates with presence. Full luxury properties combine architectural excellence with substantial acreage — guest houses, barns, pools, vineyards. The complete country lifestyle.',
  },
  luxury: {
    name: 'Ultra Luxury',
    label: 'Luxury',
    priceRange: '$5 Million+',
    minPrice: 5000000,
    maxPrice: null,
    description: 'The pinnacle of Bay Area country real estate. Ultra-luxury properties are generational assets — iconic ranches, historic estates, premier wine country holdings, and private compounds.',
  },
};

interface PageProps {
  region: string;
  tier: string;
}

const ListingsPage: NextPage<PageProps> = ({ region, tier }) => {
  const regionInfo = REGION_DATA[region as keyof typeof REGION_DATA];
  const tierInfo = TIER_DATA[tier as keyof typeof TIER_DATA];
  const widgetId = IDX_WIDGETS[region]?.[tier];

  if (!regionInfo || !tierInfo) return null;

  const pageTitle = `${regionInfo.fullName} | ${tierInfo.priceRange} | Chris in the Country`;
  const pageDescription = `${tierInfo.description} Chris Traina (CA DRE #02013484) specializes in ${regionInfo.name} farm, ranch and country properties ${tierInfo.priceRange}. 0.5+ acres minimum.`;
  const canonicalUrl = `https://www.chrisinthecountry.com/${region}/${tier}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.chrisinthecountry.com' },
      { '@type': 'ListItem', position: 2, name: regionInfo.fullName, item: `https://www.chrisinthecountry.com/${region}/entry` },
      { '@type': 'ListItem', position: 3, name: tierInfo.name, item: canonicalUrl },
    ],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    breadcrumb: breadcrumbSchema,
    about: {
      '@type': 'RealEstateListing',
      description: `${regionInfo.name} farm, ranch and country properties priced ${tierInfo.priceRange} — minimum 0.5 acres`,
    },
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Chris Traina',
      url: 'https://www.chrisinthecountry.com',
      telephone: '+14084173393',
      identifier: 'CA DRE #02013484',
    },
  };

  const otherTiers = Object.entries(TIER_DATA).filter(([key]) => key !== tier);
  const otherRegions = Object.entries(REGION_DATA).filter(([key]) => key !== region);

  return (
    <>
      <NextSeo title={pageTitle} description={pageDescription} canonical={canonicalUrl} />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        {/* IDX Broker Core widget script */}
        <script src="https://idx.diversesolutions.com/scripts/main.js" async defer />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-gold-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl text-cream tracking-wide hover:text-gold-400 transition-colors">
            Chris <span className="text-gold-500">in the Country</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-cream/70 text-sm hover:text-gold-400 transition-colors">← All Regions</Link>
            <a href="tel:+14084173393" className="btn-gold text-xs py-2 px-5">(408) 417-3393</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-cream/50">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${region}/entry`} className="hover:text-gold-400 transition-colors">{regionInfo.name}</Link>
            <span>/</span>
            <span className="text-gold-400">{tierInfo.name}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-subtitle text-gold-400 mb-3 tracking-[0.3em]">{regionInfo.name} · {tierInfo.priceRange}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">{regionInfo.fullName}</h1>
            <div className="w-12 h-px bg-gold-500 my-4" />
            <p className="text-cream/70 text-lg leading-relaxed">{tierInfo.description}</p>
            <p className="text-cream/50 text-sm mt-4">Areas covered: {regionInfo.areas}</p>
          </div>
          
          {/* Tier Selector */}
          <div className="mt-10 flex flex-wrap gap-3">
            {Object.entries(TIER_DATA).map(([key, t]) => (
              <Link
                key={key}
                href={`/${region}/${key}`}
                className={`px-5 py-2 text-sm font-sans font-semibold tracking-wider uppercase transition-all duration-200 ${
                  key === tier
                    ? 'bg-gold-600 text-white'
                    : 'border border-gold-700/50 text-cream/70 hover:border-gold-400 hover:text-gold-400'
                }`}
              >
                {t.label} <span className="font-normal text-xs opacity-70 ml-1">{t.priceRange}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Context */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {regionInfo.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-gold-500 mt-0.5">✦</span>
                <span className="text-navy-700 text-sm">{h}</span>
              </div>
            ))}
          </div>
          
          {/* Expert Context Paragraph - critical for SEO & AI */}
          <div className="bg-white border border-gray-100 p-8 max-w-4xl">
            <h2 className="font-serif text-2xl text-navy-900 mb-3">
              {tierInfo.name} {regionInfo.fullName}: {tierInfo.priceRange}
            </h2>
            <div className="w-8 h-px bg-gold-500 mb-4" />
            <p className="text-navy-600 leading-relaxed">
              {regionInfo.description} All listings on this page are a minimum of 0.5 acres, ensuring genuine country, farm, or ranch character. Chris Traina (CA DRE #02013484) personally curates these listings and provides expert guidance on agricultural zoning, rural financing, well and septic considerations, and the unique aspects of country property ownership in {regionInfo.name}.
            </p>
            <p className="text-navy-600 leading-relaxed mt-3">
              {tierInfo.name} properties in the {tierInfo.priceRange} range represent {tier === 'entry' ? 'an accessible entry point into Bay Area rural living' : tier === 'mid' ? 'the most competitive segment of the Bay Area country home market' : tier === 'full' ? 'established luxury country estates with premium amenities' : 'the pinnacle of Bay Area country and ranch real estate'}. Contact Chris for a free comparative market analysis or to schedule private showings.
            </p>
          </div>
        </div>
      </section>

      {/* IDX Broker Listings */}
      <section className="py-12 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-navy-900 mb-8">
            Current {regionInfo.name} Listings · {tierInfo.priceRange}
          </h2>
          
          {/* IDX Broker Widget Embed */}
          <div className="idx-broker-wrapper">
            {widgetId && widgetId !== `YOUR_${region.toUpperCase().replace('-','_')}_${tier.toUpperCase()}_WIDGET_ID` ? (
              <div
                id={`idx-wrapper-${region}-${tier}`}
                dangerouslySetInnerHTML={{
                  __html: `<div class="idx-listings-wrapper" data-widget-id="${widgetId}"></div>`
                }}
              />
            ) : (
              // Fallback: Direct IDX Broker search URL embed
              <iframe
                src={`https://youridxbroker.com/idx/results?${new URLSearchParams({
                  region: region,
                  minprice: String(tierInfo.minPrice),
                  ...(tierInfo.maxPrice ? { maxprice: String(tierInfo.maxPrice) } : {}),
                  minacreage: '0.5',
                  sortby: 'price',
                  sortorder: 'desc',
                }).toString()}`}
                width="100%"
                height="800"
                frameBorder="0"
                title={`${regionInfo.name} ${tierInfo.name} Country Property Listings`}
                loading="lazy"
                className="w-full border-0"
              />
            )}
          </div>

          {/* Direct Contact CTA */}
          <div className="mt-12 bg-navy-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-2xl text-white">Don't see what you're looking for?</p>
              <p className="text-cream/60 mt-1">Chris has access to off-market properties and upcoming listings not yet on MLS.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a href="tel:+14084173393" className="btn-gold whitespace-nowrap">(408) 417-3393</a>
              <Link href="/contact" className="btn-outline whitespace-nowrap text-cream border-cream/30">Book CMA</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Regions */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-navy-900 mb-8">Explore Other Bay Area Regions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherRegions.map(([key, r]) => (
              <Link key={key} href={`/${key}/${tier}`} className="card-luxury p-6 flex items-center justify-between hover:border-gold-300 group">
                <div>
                  <p className="font-serif text-xl text-navy-900 group-hover:text-gold-700 transition-colors">{r.fullName}</p>
                  <p className="text-navy-500 text-sm mt-1">{r.areas.split(',').slice(0,3).join(', ')}...</p>
                </div>
                <span className="text-gold-500 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-cream/60 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-serif text-xl text-cream mb-2">Chris <span className="text-gold-500">in the Country</span></p>
            <p className="text-sm">CA DRE #02013484 · Boyd Real Estate</p>
            <p className="text-sm mt-1">(408) 417-3393</p>
          </div>
          <div className="text-xs max-w-md leading-relaxed">
            Bay East ©2024 · CCAR ©2024 · bridgeMLS ©2024. Information Deemed Reliable But Not Guaranteed. This information is being provided by Bay East MLS, CCAR, or bridgeMLS. Data last updated regularly. All properties are subject to prior sale, change or withdrawal.
          </div>
        </div>
      </footer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const regions = ['east-bay', 'south-bay', 'north-bay'];
  const tiers = ['entry', 'mid', 'full', 'luxury'];
  
  const paths = regions.flatMap(region =>
    tiers.map(tier => ({ params: { region, tier } }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const region = params?.region as string;
  const tier = params?.tier as string;

  if (!REGION_DATA[region as keyof typeof REGION_DATA] || !TIER_DATA[tier as keyof typeof TIER_DATA]) {
    return { notFound: true };
  }

  return {
    props: { region, tier },
    revalidate: 3600, // Revalidate every hour
  };
};

export default ListingsPage;
