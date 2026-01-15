import { useState } from 'react'
// import Navbar from '@/components/NavBar'
import landing from '../assets/landing.png'
import AnimatedSection from '@/components/AnimatedSection'
// import PageHeader from '@/components/PageHeader'

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
    <AnimatedSection>
      {/* <Navbar /> */}
      <main id="about" className="w-full pt-20">
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Built on Trust, Driven by Results
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              For over two decades, we've been helping businesses and individuals make confident
              financial decisions through expert guidance and unwavering commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={landing}
                  alt="Team collaborating"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="flex gap-3 flex-wrap">
                {tabs.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`px-6 py-2 rounded-full border-2 transition-all text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ${
                      activeTab === t.key
                        ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-orange-500'
                    }`}
                    aria-pressed={activeTab === t.key}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {tabs.find(x => x.key === activeTab)?.label}
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  {tabs.find(x => x.key === activeTab)?.content}
                </p>
              </div>

              <p className="text-slate-600 text-base leading-relaxed border-l-4 border-orange-500 pl-4">
                Through this commitment, we aim not only to meet expectations but to consistently
                exceed them, building lasting partnerships founded on trust, integrity, and
                measurable results.
              </p>
            </div>
          </div>
          <section className="mt-20 border-t pt-16">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Founded</h4>
                <p className="text-slate-600 mt-2">Built on decades of professional integrity</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Growth</h4>
                <p className="text-slate-600 mt-2">
                  Expanded across Nigeria serving diverse sectors
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Today</h4>
                <p className="text-slate-600 mt-2">
                  Trusted advisors to institutions and businesses
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Integrity</h4>
              <p className="text-slate-600">
                We uphold the highest standards of professionalism and ethics in every client
                engagement.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">★</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Excellence</h4>
              <p className="text-slate-600">
                Delivering exceptional results through expertise, innovation, and continuous
                improvement.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">◆</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Partnership</h4>
              <p className="text-slate-600">
                Building long-term relationships based on trust, transparency, and mutual success.
              </p>
            </div>
          </div>
        </section>
      </main>
    </AnimatedSection>
  )
}

export default AboutUs
