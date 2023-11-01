import Footer from '@/components/Footer/Footer'
import EventSection from '@/components/HomePage/EventSection'
import HeroSection from '@/components/HomePage/HeroSection'
import InterestsDialog from '@/components/HomePage/InterestsDialog'
import LocationSearch from '@/components/HomePage/LocationSearch'
import ScrollCategories from '@/components/HomePage/ScrollCategories'
import TrendingCategories from '@/components/HomePage/TrendingCategories'

const Home = () => {
  return (
    <>
      <div className='flex-col'>
        <HeroSection />

        <LocationSearch />
        <TrendingCategories />
        <ScrollCategories />
        <EventSection />
        <InterestsDialog />
        <Footer />
      </div>
    </>
  )
}

export default Home
