import landing from '@/assets/landing.png'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 bg-[#FAFAF6] scroll-mt-28">
      {/* <svg
        className="absolute right-30 top-6 w-56 md:w-72 opacity-10 pointer-events-none"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="10" y="60" width="12" height="50" rx="2" fill="#12305a" />
        <rect x="34" y="40" width="12" height="70" rx="2" fill="#12305a" />
        <rect x="58" y="20" width="12" height="90" rx="2" fill="#12305a" />
        <rect x="82" y="8" width="12" height="102" rx="2" fill="#12305a" />
        <circle cx="20" cy="52" r="3" fill="#12305a" />
        <circle cx="44" cy="32" r="3" fill="#12305a" />
        <circle cx="68" cy="12" r="3" fill="#12305a" />
        <path
          d="M20 52L44 32L68 12L96 4"
          stroke="#12305a"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg> */}

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-block bg-white shadow-sm rounded-full px-4 py-2 text-sm font-medium mb-5">
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-900 rounded-md text-white">
                {/* tiny camera/brief icon (keeps it simple) */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3.5" y="6.5" width="17" height="11" rx="1.5" stroke="white" strokeWidth="1.2"/>
                  <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.2"/>
                </svg>
              </span>
              <span>A firm of Chartered Accountants</span>
            </span>
          </div>


          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A44] leading-tight">
            Delivering trusted
            <br />
            Financial/Consulting
            <br />
            Services for over 25 years
            <span className="text-orange-500">*</span>
          </h1>

          <p className="text-gray-700 mt-4 mb-6 leading-relaxed max-w-md">
            At ANOC, we combine technical excellence with prompt delivery to help businesses and
            individuals make confident financial decisions.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
              <a href="#contact">Book Now</a>
            </button>

            <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
              <a href="#services">Our Services</a>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={landing} alt="Team Image" className="rounded-xl shadow-lg object-cover" />
        </div>
      </div>
    </section>
  )
}
