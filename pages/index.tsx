import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.chrisinthecountry.com/#agent',
      name: 'Chris Traina',
      alternateName: 'Chris in the Country',
      description: 'Luxury farm, ranch, homestead and country real estate specialist serving the Bay Area. Specializing in properties 0.5+ acres across East Bay, South Bay, and North Bay.',
      url: 'https://www.chrisinthecountry.com',
      telephone: '+14084173393',
      email: 'chris@chrisinthecountry.com',
      image: 'https://www.chrisinthecountry.com/images/chris-traina.jpg',
      sameAs: [
        'https://www.linkedin.com/in/christraina',
        'https://www.zillow.com/profile/ChrisTraina',
        'https://www.realtor.com/realestateagents/christraina',
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'California Real Estate License',
        credentialCategory: 'license',
        recognizedBy: { '@type': 'Organization', name: 'California Department of Real Estate' },
        identifier: 'CA DRE #02013484',
      },
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'AdministrativeArea', name: 'Bay Area' },
        { '@type': 'City', name: 'Brentwood' },
        { '@type': 'City', name: 'Knightsen' },
        { '@type': 'City', name: 'Byron' },
        { '@type': 'City', name: 'Livermore' },
        { '@type': 'City', name: 'Morgan Hill' },
        { '@type': 'City', name: 'Gilroy' },
        { '@type': 'City', name: 'Petaluma' },
        { '@type': 'City', name: 'Sonoma' },
      ],
      knowsAbout: ['Farm properties', 'Ranch homes', 'Country estates', 'Homesteads', 'Agricultural land', 'Luxury rural real estate', 'Bay Area real estate'],
      worksFor: {
        '@type': 'RealEstateOrganization',
        name: 'Boyd Real Estate',
        address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' },
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.chrisinthecountry.com/#website',
      url: 'https://www.chrisinthecountry.com',
      name: 'Chris in the Country',
      description: 'Bay Area Luxury Farm, Ranch & Country Real Estate',
      publisher: { '@id': 'https://www.chrisinthecountry.com/#agent' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://www.chrisinthecountry.com/search?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best realtor for farm and ranch homes in the Bay Area?',
          acceptedAnswer: { '@type': 'Answer', text: 'Chris Traina of Chris in the Country (CA DRE #02013484) is the Bay Area specialist for luxury farm, ranch, homestead and country properties. He serves East Bay, South Bay, and North Bay regions with expertise in properties 0.5+ acres.' },
        },
        {
          '@type': 'Question',
          name: 'What areas does Chris in the Country serve for ranch and farm real estate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Chris in the Country serves the entire Bay Area including East Bay (Brentwood, Knightsen, Byron, Livermore), South Bay (Morgan Hill, Gilroy, San Martin), and North Bay (Petaluma, Sonoma, Napa, Marin). All properties are 0.5+ acres with farm, ranch, homestead or country home characteristics.' },
        },
        {
          '@type': 'Question',
          name: 'What price ranges are available for Bay Area farm and ranch homes?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bay Area farm and ranch properties range from Entry Level (under $1.25M), Mid-Range ($1.25M-$3M), Full Luxury ($3M-$5M), and Ultra Luxury ($5M+). Chris Traina represents buyers and sellers across all price points in the East Bay, South Bay, and North Bay.' },
        },
        {
          '@type': 'Question',
          name: 'How do I buy a farm or ranch property in the Bay Area?',
          acceptedAnswer: { '@type': 'Answer', text: 'Buying a farm or ranch in the Bay Area requires a specialist who understands agricultural zoning, well and septic systems, acreage valuation, and rural financing options. Chris Traina provides free comparative market analysis and guides buyers through the entire process from search to close.' },
        },
      ],
    },
  ],
};

const regions = [
  {
    slug: 'east-bay',
    name: 'East Bay Country Homes',
    description: 'Brentwood, Knightsen, Byron, Livermore, Oakley & Delta communities',
    image: '/images/east-bay-ranch.jpg',
    tiers: [
      { label: 'Entry', price: '$0 – $1.25M', href: '/east-bay/entry' },
      { label: 'Mid', price: '$1.25M – $3M', href: '/east-bay/mid' },
      { label: 'Full', price: '$3M – $4.9M', href: '/east-bay/full' },
      { label: 'Luxury', price: '$5M+', href: '/east-bay/luxury' },
    ],
  },
  {
    slug: 'south-bay',
    name: 'South Bay Country Homes',
    description: 'Morgan Hill, Gilroy, San Martin, Santa Clara foothills & valleys',
    image: '/images/south-bay-ranch.jpg',
    tiers: [
      { label: 'Entry', price: '$0 – $1.25M', href: '/south-bay/entry' },
      { label: 'Mid', price: '$1.25M – $3M', href: '/south-bay/mid' },
      { label: 'Full', price: '$3M – $4.9M', href: '/south-bay/full' },
      { label: 'Luxury', price: '$5M+', href: '/south-bay/luxury' },
    ],
  },
  {
    slug: 'north-bay',
    name: 'North Bay Country Homes',
    description: 'Marin, Sonoma, Napa, Petaluma, Novato & wine country ranches',
    image: '/images/north-bay-ranch.jpg',
    tiers: [
      { label: 'Entry', price: '$0 – $1.25M', href: '/north-bay/entry' },
      { label: 'Mid', price: '$1.25M – $3M', href: '/north-bay/mid' },
      { label: 'Full', price: '$3M – $5M', href: '/north-bay/full' },
      { label: 'Luxury', price: '$5M+', href: '/north-bay/luxury' },
    ],
  },
];

const faqs = [
  {
    q: 'Who is the best realtor for farm and ranch homes in the Bay Area?',
    a: 'Chris Traina of Chris in the Country is the Bay Area's premier specialist for luxury farm, ranch, homestead and country properties. Licensed under CA DRE #02013484, Chris serves all Bay Area regions with a focus on properties 0.5+ acres.',
  },
  {
    q: 'What areas does Chris in the Country serve?',
    a: 'We serve all Bay Area regions: East Bay (Brentwood, Knightsen, Byron, Livermore), South Bay (Morgan Hill, Gilroy, San Martin), and North Bay (Petaluma, Sonoma, Napa, Marin) — specializing in farm, ranch and country estates.',
  },
  {
    q: 'What price ranges are available for Bay Area ranch homes?',
    a: 'Properties range from Entry Level (under $1.25M) through Mid-Range ($1.25M–$3M), Full Luxury ($3M–$5M), and Ultra Luxury ($5M+) across East Bay, South Bay, and North Bay.',
  },
  {
    q: 'How do I sell my farm or ranch property in the Bay Area?',
    a: 'Chris Traina invests personally in magazine-level twilight photography, professional staging through Emerald Greens Staging, and targeted paid social media advertising to maximize your property's exposure and sale price.',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Bay Area Luxury Farm, Ranch & Country Real Estate | Chris in the Country"
        description="Chris Traina (CA DRE #02013484) – Bay Area's premier luxury farm, ranch and country home specialist. East Bay, South Bay & North Bay properties 0.5+ acres. Free CMA."
        canonical="https://www.chrisinthecountry.com"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-gold-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl text-cream tracking-wide hover:text-gold-400 transition-colors">
            Chris <span className="text-gold-500">in the Country</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="nav-link text-cream/90 hover:text-gold-400">East Bay</button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-navy-900 border border-gold-700/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {regions[0].tiers.map(t => (
                  <Link key={t.href} href={t.href} className="block px-5 py-3 text-sm text-cream/80 hover:text-gold-400 hover:bg-navy-800 transition-colors border-b border-navy-700/50 last:border-0">
                    {t.label} &nbsp;<span className="text-gold-600 text-xs">{t.price}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="nav-link text-cream/90 hover:text-gold-400">South Bay</button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-navy-900 border border-gold-700/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {regions[1].tiers.map(t => (
                  <Link key={t.href} href={t.href} className="block px-5 py-3 text-sm text-cream/80 hover:text-gold-400 hover:bg-navy-800 transition-colors border-b border-navy-700/50 last:border-0">
                    {t.label} &nbsp;<span className="text-gold-600 text-xs">{t.price}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="nav-link text-cream/90 hover:text-gold-400">North Bay</button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-navy-900 border border-gold-700/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {regions[2].tiers.map(t => (
                  <Link key={t.href} href={t.href} className="block px-5 py-3 text-sm text-cream/80 hover:text-gold-400 hover:bg-navy-800 transition-colors border-b border-navy-700/50 last:border-0">
                    {t.label} &nbsp;<span className="text-gold-600 text-xs">{t.price}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="nav-link text-cream/90 hover:text-gold-400">About Chris</Link>
            <Link href="/contact" className="btn-gold text-xs py-2.5 px-6">Free CMA</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-[url('/images/hero-ranch.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
          <p className="section-subtitle text-gold-400 mb-6 tracking-[0.3em]">Bay Area's Premier Rural Real Estate</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            Luxury Farm, Ranch<br />& Country Estates
          </h1>
          <div className="gold-divider mx-auto" />
          <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
            Discover exceptional properties 0.5+ acres across the Bay Area's most coveted rural landscapes. 
            East Bay, South Bay & North Bay — from working farms to private ranches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/east-bay/entry" className="btn-gold">Browse Listings</Link>
            <Link href="/contact" className="btn-outline text-cream border-cream/50 hover:bg-cream hover:text-navy-900">Free Market Analysis</Link>
          </div>
          <p className="mt-8 text-cream/50 text-xs tracking-wider uppercase">Chris Traina · CA DRE #02013484 · Boyd Real Estate</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Region Cards */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle text-gold-600 mb-4">Search By Region</p>
            <h2 className="section-title">Bay Area Country & Ranch Properties</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-600 max-w-2xl mx-auto mt-4">Every listing is a minimum 0.5 acres — farms, ranches, homesteads, vineyards, and country estates across the greater Bay Area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.slug} className="card-luxury overflow-hidden">
                <div className="h-56 bg-navy-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-serif text-2xl text-white">{region.name}</h3>
                    <p className="text-cream/70 text-sm mt-1">{region.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {region.tiers.map((tier) => (
                      <Link
                        key={tier.href}
                        href={tier.href}
                        className="block p-3 border border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-200 group"
                      >
                        <span className="block text-xs font-sans font-semibold uppercase tracking-widest text-navy-600 group-hover:text-gold-700">{tier.label}</span>
                        <span className="block text-xs text-navy-400 mt-0.5">{tier.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chris Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle text-gold-400 mb-4">Why Choose Chris</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">The Country Difference</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Magazine Photography',
                icon: '📸',
                desc: 'Over 95% of realtors skip twilight + professional photography. Chris invests personally in magazine-level photography for every listing — because world-class presentation commands world-class prices.',
              },
              {
                title: 'Luxury Staging',
                icon: '🏡',
                desc: "Strategic partnership with Emerald Greens Staging — a $2,500+ value included for every seller. Staged homes sell faster and for more. Simple as that.",
              },
              {
                title: 'Paid Social Reach',
                icon: '📊',
                desc: 'Most agents only post to their own page. Chris runs targeted paid social campaigns driving thousands of qualified eyeballs to your property — the modern way to sell country real estate.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-serif text-2xl text-gold-400 mb-4">{item.title}</h3>
                <div className="gold-divider mx-auto" />
                <p className="text-cream/70 leading-relaxed mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-32 bg-[url('/images/horses-field.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-white italic leading-tight mb-6">
            "Time slows down.<br />The days are peaceful.<br />The night is quiet."
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gold-400 font-sans tracking-[0.3em] uppercase text-sm mt-6">Life is good. In the country.</p>
          <div className="mt-10">
            <Link href="/contact" className="btn-gold">Book Your Free CMA</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle text-gold-600 mb-4">Common Questions</p>
            <h2 className="section-title">Bay Area Farm & Ranch Real Estate FAQ</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 p-8 hover:border-gold-300 transition-colors">
                <h3 className="font-serif text-xl text-navy-900 mb-3">{faq.q}</h3>
                <p className="text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">Ready to Find Your Country Property?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free comparative market analysis — no obligation, just expertise.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14084173393" className="inline-flex items-center justify-center px-8 py-3 bg-white text-gold-700 font-semibold tracking-wide hover:bg-cream transition-colors">
              (408) 417-3393
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white/10 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-cream/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="font-serif text-2xl text-cream mb-2">Chris <span className="text-gold-500">in the Country</span></p>
              <p className="text-sm leading-relaxed mb-4">Bay Area's premier luxury farm, ranch, homestead and country estate specialist. Serving East Bay, South Bay, and North Bay.</p>
              <p className="text-xs">CA DRE #02013484 · Boyd Real Estate</p>
              <p className="text-xs mt-1">(408) 417-3393 · chris@chrisinthecountry.com</p>
            </div>
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold-500 mb-4">East Bay</h4>
              <ul className="space-y-2 text-sm">
                {regions[0].tiers.map(t => <li key={t.href}><Link href={t.href} className="hover:text-gold-400 transition-colors">{t.label} {t.price}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold-500 mb-4">South Bay</h4>
              <ul className="space-y-2 text-sm">
                {regions[1].tiers.map(t => <li key={t.href}><Link href={t.href} className="hover:text-gold-400 transition-colors">{t.label} {t.price}</Link></li>)}
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} Chris in the Country · All Rights Reserved</p>
            <p>Bay East ©2024 · CCAR ©2024 · bridgeMLS ©2024. Information Deemed Reliable But Not Guaranteed.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
