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
    <div>
      <section id="services" className="bg-[#0A1A44] text-white scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium">Our Services</h3>
            <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto text-slate-300">
              From audit and compliance to strategic consulting, we provide tailored solutions
              designed to support growth, transparency, and long-term success.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <article
                key={s.title}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-400"
                tabIndex={0}
                aria-label={s.title}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center">
                    <s.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">{s.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{s.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
