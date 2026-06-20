import StarField from '@/components/ui/StarField'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CountdownSection from '@/components/sections/CountdownSection'
import LoveStorySection from '@/components/sections/LoveStorySection'
import EventDetailsSection from '@/components/sections/EventDetailsSection'
import RSVPSection from '@/components/sections/RSVPSection'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void">
      <StarField />
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <LoveStorySection />
      <EventDetailsSection />
      <RSVPSection />
      <Footer />
    </main>
  )
}
