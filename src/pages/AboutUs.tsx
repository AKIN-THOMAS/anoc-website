import { useState } from 'react'
import landing from '../assets/landing.png'

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'story'>('mission')
  const tabs: {
    key: 'mission' | 'vision' | 'story'
    label: string
    content: string
  }[] = [
    {
      key: 'mission',
      label: 'Our Mission',
      content:
        'Our mission is to provide exceptional accounting, consulting, and advisory services that empower our clients to make sound financial decisions with clarity and confidence. We are committed to upholding the highest standards of professionalism, integrity, and excellence in every engagement.',
    },
    {
      key: 'vision',
      label: 'Our Vision',
      content:
        'To be the trusted partner for businesses and institutions seeking long-term financial strength and governance. We envision a world where transparent financial practices and strategic advice enable every client to achieve sustainable growth.',
    },
    {
      key: 'story',
      label: 'Our Story',
      content:
        'For over two decades we have worked alongside businesses, government and nonprofits — building trusted relationships and delivering measurable results. Our team blends global experience with local knowledge to create tailored solutions.',
    },
  ]
  return (
    <div className="w-full">
      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-28">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Built on Trust, Driven by Results
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            For over two decades, we’ve been helping businesses and individuals make confident
            financial decisions through expert guidance.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:gap-16">
          <div className="mt-10 gap-8 items-center">
            <div className="">
              <div className=" w-70 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={landing}
                  alt="Team collaborating"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className=" mt-10 max-w-3xl mx-auto text-center">
            <div className="flex gap-3 items-center">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`px-4 py-1 rounded-full border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${
                    activeTab === t.key
                      ? 'bg-orange-400 text-white border-transparent'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                  aria-pressed={activeTab === t.key}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6 text-slate-700 text-sm md:text-base">
              {tabs.find(x => x.key === activeTab)?.content}
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Through this, we aim not only to meet expectations but to consistently exceed them,
              building lasting partnerships founded on trust and results.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
