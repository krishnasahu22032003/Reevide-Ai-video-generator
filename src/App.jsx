
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SolutionsSection from './components/SolutionsSection'
import TrustedBySection from './components/TrustedBySection'

function App() {

  return (
    <>
    <main className='overflow-x-hidden w-auto' >
<Navbar/>
<Hero/>
<TrustedBySection/>
<SolutionsSection/>

    </main>
    </>
  )
}

export default App
