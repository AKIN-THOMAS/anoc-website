import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import AboutUs from './AboutUs'
import Services from './Services'
import Team from './Team'
import Contact from './Contact'



export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Stats />
        <AboutUs />
        <Services />
        <Team />
        <Contact />
      </main>
    </>
  )
}
