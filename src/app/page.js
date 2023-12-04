
import Intro from './components/Intro'
import Divider from './components/divider'
import About from './components/about'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experiance from './components/Experiance'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <Divider/>
      <About/>
      <Projects/> 
      <Skills/>
      <Experiance/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}
