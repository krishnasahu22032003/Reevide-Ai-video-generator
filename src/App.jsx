
import AIAvatarSection from './components/AIAvatarSection'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection '
import ResourcesSection from './components/ResourcesSection '
import SolutionsSection from './components/SolutionsSection'
import TestimonialsSection from './components/TestimonialCard'
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
<TestimonialsSection/>
<HowItWorks/>

    </main>
    </>
  )
}

export default App
