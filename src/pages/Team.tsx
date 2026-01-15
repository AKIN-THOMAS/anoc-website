import TeamModal from '@/components/TeamModal'
// import Navbar from '@/components/NavBar'
import team1 from '../assets/samplepic.png'
import team8 from '../assets/team10.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import team7 from '../assets/team7.png'
import team9 from '../assets/team8.png'
import team10 from '../assets/team9.png'
import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

type Person = {
  name: string
  role: string
  img: string
  about: string
}

const team: Person[] = [
  {
    name: 'N. C. Oyeka',
    role: 'Managing Partner',
    img: team1,
    about: `
      • Fellow, Association of Chartered Certified Accountants (UK)  
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Associate Member, Chartered Institute of Taxation of Nigeria  
      • B.Sc Accountancy – University of Nigeria, Enugu Campus  
      • Trained at Whinney Murray Ernst & Ernst (now Ernst & Young)  
      • Former Finance Director, Gicen Technical Services Ltd  
      • Over 30 years post-qualification experience  
      • Auditor to numerous private & public companies  
      • Former Managing Partner of Nnamdi Oyeka & Co.  
      • Member, Ikoyi Club 1938  
    `,
  },
  {
    name: 'W. A. Nzewi',
    role: 'Senior Partner',
    img: team2,
    about: `
      • Fellow, Association of Chartered Certified Accountants (UK)  
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Associate Member, Chartered Institute of Taxation of Nigeria  
      • Trained at KPMG (Peat Marwick Ani, Ogunde & Co)  
      • Educated at Yaba College of Technology & London School of Accountancy  
      • Over 30 years post-qualification experience  
      • Member, Ikoyi Club 1938  
    `,
  },
  {
    name: 'Eze N. Alatta',
    role: 'Senior Partner',
    img: team3,
    about: `
      • Fellow, Association of Chartered Certified Accountants (UK)  
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Member, Chartered Institute of Taxation of Nigeria  
      • Educated at Kings College, Lagos & London School of Accountancy  
      • Trained at KPMG (Peat Marwick Ani, Ogunde & Co)  
      • Former Finance Director, Whessoe Engineering Limited  
      • Over 30 years post-qualification experience  
      • Golf & squash player  
    `,
  },
  {
    name: 'R. U. Okoroha',
    role: 'Partner',
    img: team4,
    about: `
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Member, Chartered Institute of Taxation of Nigeria  
      • Joined Nnamdi Oyeka & Co in 1990  
      • Became Partner in 2003  
      • Member, Apapa Club  
      • Honorary Member, AHQ Command Officers Mess  
      • Plays tennis & enjoys football  
    `,
  },
  {
    name: 'L. O. Okorie',
    role: 'Director, Assurance Services',
    img: team5,
    about: `
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Member, Chartered Institute of Taxation of Nigeria  
      • Joined Nnamdi Oyeka & Co in 2000  
      • Became Director in 2024  
      • Plays table tennis & enjoys Christian music  
    `,
  },
  {
    name: "A. I. Irabor",
    role: "Director, Assurance Services",
    img: team6,
    about: `
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Certified Forensic Auditor  
      • IFRS Expert  
      • MSc Economics  
      • Joined Alatta, Nzewi & Co. in 2008  
      • Became Director in 2024  
      • Enjoys Christian music  
    `,
  },
  {
    name: "N. N. Ilonze (Mrs.)",
    role: "Senior Manager, Tax Services",
    img: team7,
    about: `
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • Member, Chartered Institute of Taxation of Nigeria  
      • Joined Nnamdi Oyeka & Co in 1999  
      • Rose to Head of Taxation Department in 2024  
      • Enjoys reading, travelling & music  
    `,
  },

 {
    name: "F. A. Okeke",
    role: "Manager, Assurance Services",
    img: team9,
    about: `
      • Fellow, Institute of Chartered Accountants of Nigeria (FCA)  
      • HND Accountancy – Federal Polytechnic Oko  
      • Joined Alatta Nzewi Oyeka & Co in 2010 → Audit Manager I  
      • Trained with Alatta Nzewi & Co (2003–2007)  
      • Enjoys Christian music  
    `,
  },
  {
    name: "Ikechukwu Ikwuagwu",
    role: "Manager, Assurance Services",
    img: team10,
    about: `
      • Associate, Institute of Chartered Accountants of Nigeria  
      • HND Accountancy – Lagos State Polytechnic  
      • Trained with Alatta Nzewi Oyeka & Co (2010–2019)  
      • Enjoys Christian music  
    `,
  },
  {
    name: "A. O. Okeke",
    role: "Director, Assurance Services",
    img: team8,
    about: `
      • Associate, Institute of Chartered Accountants of Nigeria  
      • HND Accountancy – Federal Polytechnic Oko  
      • Former Audit Manager II – PKF  
      • Former Executive Associate – Sada Idris & Co  
      • Joined ANOC Professional Services in 2024  
      • Trained with Alatta Nzewi & Co (2008–2010)  
      • Former Sales Executive – Niger Insurance Plc  
      • Member – Nigerian Army Senior Officers’ Mess  
      • Member – Knight of St. Mulumba  
      • Plays tennis & enjoys football  
    `,
  },
]
const Team = () => {
  const [selected, setSelected] = useState<Person | null>(null)

  return (
    <AnimatedSection>
      {/* <Navbar /> */}
      <main id="team" className="w-full pt-20">
        <section className="bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Meet Our Team</h1>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                A distinguished group of partners and professionals with decades of combined
                experience in accounting, auditing, tax, and advisory services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.map(person => (
                <div
                  key={person.name}
                  onClick={() => setSelected(person)}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden bg-slate-200 h-80 sm:h-96">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
            {/* <Navbar /> */}
          </div>
        </section>
      </main>

      <TeamModal person={selected} onClose={() => setSelected(null)} />
    </AnimatedSection>
  )
}

export default Team