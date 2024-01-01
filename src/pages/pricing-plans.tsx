import PricingCard from '@/components/Cards/PricingCard'
import Header from '@/components/Header/Header'

import { plans } from '@/utils/fakeBackend'

const PricingPlans = () => {
  return (
    <>
      <Header />
      <div className='mt-12 h-full px-6 py-12 lg:flex lg:items-center lg:justify-center'>
        <div className='grid gap-12 lg:grid-cols-3 lg:gap-0'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`mx-auto w-full max-w-md ${
                plan.featured
                  ? 'order-first lg:z-10 lg:order-none lg:scale-110 lg:transform '
                  : 'lg:scale-90 lg:transform'
              }`}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PricingPlans
