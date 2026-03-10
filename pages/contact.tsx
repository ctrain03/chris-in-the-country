import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Chris Traina | Chris in the Country',
  url: 'https://www.chrisinthecountry.com/contact',
  mainEntity: {
    '@type': 'RealEstateAgent',
    name: 'Chris Traina',
    telephone: '+14084173393',
    email: 'chris@chrisinthecountry.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    openingHours: 'Mo-Su 08:00-20:00',
    priceRange: 'Free Consultation',
  },
};

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact Chris Traina | Free Bay Area Farm & Ranch CMA"
        description="Contact Chris Traina for a free comparative market analysis on your Bay Area farm, ranch or country property. (408) 417-3393. CA DRE #02013484."
        canonical="https://www.chrisinthecountry.com/contact"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <nav className="bg-navy-900 border-b border-gold-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl text-cream hover:text-gold-400 transition-colors">
            Chris <span className="text-gold-500">in the Country</span>
          </Link>
        </div>
      </nav>

      <section className="min-h-screen bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle text-gold-600 mb-4">Get In Touch</p>
            <h1 className="section-title">Free Market Analysis</h1>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-600 max-w-xl mx-auto mt-4">
              Whether you're buying or selling a farm, ranch, or country property in the Bay Area — let's talk. No pressure, just expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-navy-900 p-8 mb-8">
                <h2 className="font-serif text-2xl text-white mb-6">Chris Traina</h2>
                <div className="space-y-4">
                  <a href="tel:+14084173393" className="flex items-center gap-3 text-cream/80 hover:text-gold-400 transition-colors">
                    <span className="text-gold-500">📞</span>
                    <span>(408) 417-3393</span>
                  </a>
                  <a href="mailto:chris@chrisinthecountry.com" className="flex items-center gap-3 text-cream/80 hover:text-gold-400 transition-colors">
                    <span className="text-gold-500">✉️</span>
                    <span>chris@chrisinthecountry.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-cream/60">
                    <span className="text-gold-500">🏛️</span>
                    <span>CA DRE #02013484 · Boyd Real Estate</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/60">
                    <span className="text-gold-500">🕐</span>
                    <span>Available Mon–Sun, 8am–8pm</span>
                  </div>
                </div>
              </div>
              
              {/* Appointment Booking */}
              <div className="bg-gold-600 p-6">
                <h3 className="font-serif text-xl text-white mb-2">Free Comparative Market Analysis</h3>
                <p className="text-white/80 text-sm mb-4">1 hour · Free · Your property or virtual</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Chris will visit your property and provide a detailed CMA — what your farm, ranch, or country home is worth in today's market, with a full marketing strategy included.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-100">
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Send a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  // Netlify/Vercel form handling
                  alert('Thank you! Chris will be in touch within 24 hours.');
                  form.reset();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-600 mb-1">Name *</label>
                  <input required name="name" type="text" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-600 mb-1">Email *</label>
                  <input required name="email" type="email" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-600 mb-1">Phone</label>
                  <input name="phone" type="tel" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-600 mb-1">I'm interested in</label>
                  <select name="interest" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-white">
                    <option value="">Select one...</option>
                    <option value="buying">Buying a farm/ranch/country home</option>
                    <option value="selling">Selling my property</option>
                    <option value="cma">Free market analysis only</option>
                    <option value="investing">Investment property</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-navy-600 mb-1">Message</label>
                  <textarea name="message" rows={4} className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Tell Chris about your property or search criteria..." />
                </div>
                <button type="submit" className="btn-gold w-full">Send Message</button>
                <p className="text-xs text-gray-400 text-center">Chris responds within 24 hours, usually much faster.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy-900 text-cream/60 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Chris in the Country · CA DRE #02013484 · Boyd Real Estate</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
