import './App.css'
import Banner from './components/Banner'
import MiMundo from './components/MiMundo'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'

function App() {

  return (
    <main className='relative bg-customWhite'>
      <NavBar />
      <body className='absolute translate-y-16 -z-10 ssm:px-14 lg:translate-y-40 md:px-40'>
        <Banner />
        <MiMundo />
        <Proyects />
      </body>
    </main>
  )
}

export default App
