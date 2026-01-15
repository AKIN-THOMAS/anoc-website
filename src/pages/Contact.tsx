import AnimatedSection from '@/components/AnimatedSection'
// import Navbar from '@/components/NavBar'
import { MapPin, Map, Globe, Mail } from 'lucide-react'

const offices = [
  {
    title: 'Head Office – Lagos',
    addr: 'Address: No 1, Oyediran Street off Bode Thomas Street, Surulere, Lagos Nigeria',
    phone1: '+234 803 304 3363',
    phone2: '+234 803 403 0156',
    phone3: '+234 906 935 6174',
  },
  {
    title: 'Branch – Port Harcourt',
    addr: 'Address: No 1A Isaac Boro Park Road, Old GRA, Port Harcourt, Rivers State',
    phone1: '+234 803 312 6198',
    phone2: '+234 803 307 2905',
    phone3: '',
  },
  {
    title: 'Branch – Abuja',
    addr: 'Address: Plot 574 Yakubu Gowon Crescent, Opposite World Bank, Asokoro, Abuja.',
    phone1: '+234 806 416 8608',
    phone2: '',
    phone3: '',
  },
  {
    title: 'Branch – Nnewi',
    addr: 'Address: No. 3, New Market Road, Nnewi, Anambra State.',
    phone1: '+234 806 148 0399',
    phone2: '',
    phone3: '',
  },
]

export default function Contact() {
  return (
    <AnimatedSection>
      {/* <Navbar /> */}
      <main id="contact" className="w-full pt-20">
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We're here to answer your questions and provide the support you need. Reach out to
                us through any of our offices or send us a direct message.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/30 text-orange-400 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">Office Locations</h4>
                      <p className="text-sm text-slate-300">
                        Contact our regional offices for location specific support.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 text-sm text-slate-200 mt-4">
                    {offices.map(o => (
                      <li
                        key={o.title}
                        className="flex gap-3 pb-4 border-b border-white/10 last:border-0"
                      >
                        <Map className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">{o.title}</div>
                          <div className="text-xs text-slate-400 mt-1">{o.addr}</div>
                          <div className="text-xs text-slate-400 mt-2 space-y-0.5">
                            <div>{o.phone1}</div>
                            {o.phone2 && <div>{o.phone2}</div>}
                            {o.phone3 && <div>{o.phone3}</div>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg text-center">
                    <Globe className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="font-medium text-sm text-white mb-1">Website</div>
                    <a
                      href="http://www.anoc.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:text-orange-300"
                    >
                      www.anoc.ng
                    </a>
                  </div>
                  <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg text-center">
                    <Mail className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="font-medium text-sm text-white mb-1">Email</div>
                    <a
                      href="mailto:info@anoc.ng"
                      className="text-xs text-orange-400 hover:text-orange-300"
                    >
                      info@anoc.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex justify-center">
                <form
                  onSubmit={e => e.preventDefault()}
                  className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl"
                  aria-label="Contact form"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 mt-6 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimatedSection>
  )
}
