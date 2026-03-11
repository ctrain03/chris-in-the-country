import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { AGENT, REGIONS, REGION_KEYS, TIER_KEYS } from '../lib/regions'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  canonicalPath?: string
}

export default function Layout({ children, title, description, canonicalPath = '' }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const pageTitle = title ? `${title} | Chris in the Country` : 'Chris in the Country | Bay Area Farm & Ranch Real Estate'
  const pageDesc = description || 'Chris is a Bay Area real estate agent specializing in farm, ranch, and country properties in the East Bay, South Bay, and North Bay. CA DRE #02013484.'
  const canonical = `https://${AGENT.domain}${canonicalPath}`

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chris in the Country" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Head>

      {/* HEADER */}
      <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-bold text-gold hover:text-yellow-300 transition-colors">
              Chris in the Country
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm text-cream hover:text-gold transition-colors">Home</Link>
              {REGION_KEYS.map(regionKey => {
                const region = REGIONS[regionKey]
                return (
                  <div key={regionKey} className="relative"
                    onMouseEnter={() => setOpenDropdown(regionKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link href={`/${regionKey}`} className="text-sm text-cream hover:text-gold transition-colors flex items-center gap-1">
                      {region.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    {openDropdown === regionKey && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded shadow-xl border border-gray-100 py-1 z-50">
                        {TIER_KEYS.map(tier => (
                          <Link key={tier} href={`/${regionKey}/${tier}`}
                            className="block px-4 py-2 text-sm text-navy hover:bg-cream hover:text-gold transition-colors">
                            {region.tiers[tier].label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link href="/about" className="text-sm text-cream hover:text-gold transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-cream hover:text-gold transition-colors">Contact</Link>
              <a href={`tel:${AGENT.phone}`} className="bg-gold text-navy px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition-colors">
                {AGENT.phone}
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-cream hover:text-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-navy border-t border-blue-900 pb-4">
            <div className="px-4 pt-2 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-cream hover:text-gold">Home</Link>
              {REGION_KEYS.map(regionKey => (
                <div key={regionKey}>
                  <Link href={`/${regionKey}`} onClick={() => setMobileOpen(false)} className="block py-2 text-cream hover:text-gold font-medium">
                    {REGIONS[regionKey].label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {TIER_KEYS.map(tier => (
                      <Link key={tier} href={`/${regionKey}/${tier}`} onClick={() => setMobileOpen(false)}
                        className="block py-1 text-sm text-blue-200 hover:text-gold">
                        {REGIONS[regionKey].tiers[tier].label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-cream hover:text-gold">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-cream hover:text-gold">Contact</Link>
              <a href={`tel:${AGENT.phone}`} className="block mt-2 bg-gold text-navy px-4 py-2 rounded text-center font-semibold">{AGENT.phone}</a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-navy text-cream mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-serif text-gold text-lg font-bold mb-3">Chris in the Country</h3>
              <p className="text-sm text-blue-200">Bay Area Farm, Ranch & Country Real Estate</p>
              <p className="text-sm text-blue-200 mt-1">{AGENT.brokerage}</p>
              <p className="text-sm text-blue-200 mt-1">CA DRE #{AGENT.dre}</p>
              <a href={`tel:${AGENT.phone}`} className="block mt-2 text-gold hover:text-yellow-300 text-sm">{AGENT.phone}</a>
            </div>
            <div>
              <h4 className="font-serif text-gold font-semibold mb-3">East Bay</h4>
              <ul className="space-y-1">
                {TIER_KEYS.map(tier => (
                  <li key={tier}><Link href={`/east-bay/${tier}`} className="text-sm text-blue-200 hover:text-gold transition-colors">{REGIONS['east-bay'].tiers[tier].label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-gold font-semibold mb-3">South Bay</h4>
              <ul className="space-y-1">
                {TIER_KEYS.map(tier => (
                  <li key={tier}><Link href={`/south-bay/${tier}`} className="text-sm text-blue-200 hover:text-gold transition-colors">{REGIONS['south-bay'].tiers[tier].label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-gold font-semibold mb-3">North Bay</h4>
              <ul className="space-y-1">
                {TIER_KEYS.map(tier => (
                  <li key={tier}><Link href={`/north-bay/${tier}`} className="text-sm text-blue-200 hover:text-gold transition-colors">{REGIONS['north-bay'].tiers[tier].label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900 mt-8 pt-6 text-center">
            <p className="text-xs text-blue-300">
              © {new Date().getFullYear()} Chris in the Country. All rights reserved. | CA DRE #{AGENT.dre} | {AGENT.brokerage}
            </p>
            <p className="text-xs text-blue-400 mt-1">
              Information deemed reliable but not guaranteed. All properties subject to prior sale or withdrawal.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
