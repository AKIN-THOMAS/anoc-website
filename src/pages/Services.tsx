import AnimatedSection from '@/components/AnimatedSection';
// import Navbar from '@/components/NavBar'
import {
  Award,
  BarChart2,
  BookOpen,
  Briefcase,
  FileText,
  LifeBuoy,
  ShieldCheck,
  Users,
} from 'lucide-react'

const services: { title: string; subtitle: string; Icon: any }[] = [
  {
    title: 'Audit',
    subtitle: 'Independent evaluations that build trust and credibility',
    Icon: BarChart2,
  },
  {
    title: 'Accounting',
    subtitle: 'Accurate records to support informed decisions',
    Icon: FileText,
  },
  {
    title: 'Tax Advisory',
    subtitle: 'Expert guidance for compliance and tax efficiency',
    Icon: Briefcase,
  },
  {
    title: 'Consulting',
    subtitle: 'Strategic advice that drives growth and performance',
    Icon: Users,
  },
  {
    title: 'Risk Management',
    subtitle: 'Frameworks for protection and transparency',
    Icon: ShieldCheck,
  },
  {
    title: 'Governance',
    subtitle: 'Structures that promote accountability and integrity',
    Icon: LifeBuoy,
  },
  {
    title: 'Training',
    subtitle: 'Capacity-building programs that empower professionals',
    Icon: BookOpen,
  },
  {
    title: 'Advisory Services',
    subtitle: 'Tailored solutions to guide clients through complex challenges',
    Icon: Award,
  },
]

const Services = () => {
  return (
    <AnimatedSection>
      {/* <Navbar /> */}
      <main id="services" className="w-full pt-20">
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From audit and compliance to strategic consulting, we provide tailored solutions
                designed to support growth, transparency, and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <div
                  key={s.title}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <s.Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
                      <p className="text-sm text-slate-300">{s.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AnimatedSection>
  )
}

export default Services
