
import About from './components/About'
import Contract from './components/Contract'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'

const App = () => {
  return (
<main className='relative min-h-screen w-screen overflow-x-hidden'>
<Navbar/>
<Hero/>
<About/>
<Features/>
<Story/>
<Contract/>
<Footer/>
</main>
  )
}

export default App