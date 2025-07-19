
import AIAvatarSection from './components/AIAvatarSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection '
import ResourcesSection from './components/ResourcesSection '
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
<ResourcesSection/>
<PricingSection/>
<AIAvatarSection/>

    </main>
    </>
  )
}

export default App
