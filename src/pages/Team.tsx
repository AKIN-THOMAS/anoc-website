import TeamModal from '@/components/TeamModal'
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
    <div id="team" className="w-full">
      <section className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Meet Our Team</h3>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            A distinguished group of partners and professionals with decades of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map(person => (
            <div
              key={person.name}
              onClick={() => setSelected(person)}
              className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-70 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white">
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm opacity-80">{person.role}</p>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <TeamModal person={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default Team