import { MapPin, Map, Globe, Mail } from "lucide-react";

const offices = [
  { title: "Head Office – Lagos", addr: "Address: No 1, Oyediran Street off Bode Thomas Street, Surulere, Lagos Nigeria", phone1: '+234 803 304 3363', phone2: '+234 803 403 0156' , phone3: '+234 906 935 6174' },
  { title: "Branch – Port Harcourt", addr: "Address: No 1A Isaac Boro Park Road, Old GRA, Port Harcourt, Rivers State", phone1: '+234 803 312 6198', phone2: '+234 803 307 2905' , phone3: ''  },
  { title: "Branch – Abuja", addr: "Address: Plot 574 Yakubu Gowon Crescent, Opposite World Bank, Asokoro, Abuja.", phone1: '+234 806 416 8608', phone2: '' , phone3: ''  },
  { title: "Branch – Nnewi", addr: "Address: No. 3, New Market Road, Nnewi, Anambra State.", phone1: '+234 806 148 0399', phone2: '' , phone3: ''  },
];

export default function Contact() {
  return (
    <section id="contact"  className="bg-[#0f2b57] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold">Get in Touch</h3>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            We're here to answer your questions and provide the support you need. Reach out to us
            through any of our offices or send us a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-400 text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Office Locations</h4>
                <p className="text-sm text-slate-300 max-w-xl">
                  Contact our regional offices for location specific support.
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-200">
              {offices.map((o) => (
                <li key={o.title} className="flex items-start gap-3">
                  <div className="mt-1 text-slate-100/90">
                    <Map className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">{o.title}</div>
                    <div className="text-xs text-slate-300">{o.addr}</div>
                    <div className="text-xs text-slate-300 mt-1">
                      {o.phone1}<br />
                      {o.phone2 && (<>{o.phone2}<br /></>)}
                      {o.phone3 && (<>{o.phone3}<br /></>)}
                    </div>
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-3 mt-4">
                <div className="mt-1 text-slate-100/90">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">Website</div>
                  <div className="text-xs text-slate-300">
                    <a href="http://www.anoc.ng">www.anoc.ng</a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 text-slate-100/90">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-xs text-slate-300">
                    <a href="mailto:info@anoc.ng">info@anoc.ng</a>  
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md bg-white rounded-xl p-6 shadow-xl relative"
              aria-label="Contact form"
            >
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <textarea
                  placeholder="Message"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 text-sm h-36 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                />
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-[#0b2a57] hover:bg-[#081f46] text-white py-3 rounded-md font-medium transition"
                >
                  Submit Now
                </button>
              </div>

              {/* small contact quick icons at bottom-left inside card (mobile friendly) */}
              {/* <div className="absolute left-4 bottom-4 hidden sm:flex items-center gap-2 text-xs text-slate-500">
                <Phone className="w-3 h-3" />
                <span className="text-slate-600">+234 000 000 0000</span>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
