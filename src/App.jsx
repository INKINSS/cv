import './App.css'
import BackInitial from './components/BackInitial'
import Banner from './components/Banner'
import MiMundo from './components/MiMundo'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import Skills from './components/Skills'

function App() {

  return (
    <main className='relative bg-customWhite'>
      <NavBar />
      <article className='absolute translate-y-24 -z-10 ssm:px-9 lg:translate-y-40 md:px-40'>
        <Banner />
        <MiMundo />
        <Proyects />
        <Skills />
        <BackInitial />
      </article>
    </main>
  )
}

export default App
