import Layout from '../components/Layout'
import { AGENT } from '../lib/regions'

const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Chris in the Country',
  url: AGENT.url,
  telephone: AGENT.phone,
  email: AGENT.email,
  hasCredential: `CA DRE #${AGENT.dre}`,
  memberOf: {
    '@type': 'Organization',
    name: AGENT.brokerage,
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Chris — Chris in the Country',
  description: 'Get in touch with Chris, Bay Area farm and ranch real estate specialist.',
  url: `${AGENT.url}/contact`,
}

export default function ContactPage() {
  return (
    <Layout
      title="Contact Chris — Bay Area Farm & Ranch Agent"
      description={`Contact Chris for Bay Area farm, ranch, and country real estate. CA DRE #${AGENT.dre}. Call ${AGENT.phone} or send a message.`}
      canonicalPath="/contact"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Contact Chris
          </h1>
          <p className="text-cream text-xl">
            Let&apos;s find your perfect Bay Area country property
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl text-navy font-bold mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-gold rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                  <a href={`tel:${AGENT.phone}`} className="text-navy text-lg font-semibold hover:text-gold transition-colors">{AGENT.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${AGENT.email}`} className="text-navy text-lg font-semibold hover:text-gold transition-colors">{AGENT.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Brokerage</p>
                  <p className="text-navy text-lg font-semibold">{AGENT.brokerage}</p>
                  <p className="text-gray-500 text-sm">CA DRE #{AGENT.dre}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Response Time</p>
                  <p className="text-navy text-lg font-semibold">Within 24 Hours</p>
                  <p className="text-gray-500 text-sm">Often much sooner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl text-navy font-bold mb-6">Send a Message</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form below and Chris will respond within 24 hours to discuss your Bay Area farm and ranch real estate needs.
            </p>
            <form
              action={`mailto:${AGENT.email}`}
              method="get"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message</label>
                <textarea
                  id="message"
                  name="body"
                  required
                  rows={5}
                  placeholder="Tell Chris about the property you're looking for — location, acreage, budget, special requirements..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors text-lg"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">
                We&apos;ll respond within 24 hours. Your information is never shared.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
