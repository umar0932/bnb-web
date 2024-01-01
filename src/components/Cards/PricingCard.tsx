import { Button } from '@/core/ui/button'
import { CheckIcon } from 'lucide-react'

const PricingCard = ({
  name = '',
  price = 0,
  currency = '$',
  frequency = 'month',
  featured = false,
  features = []
}) => {
  return (
    <>
      <div
        className={`relative cursor-pointer rounded-md  border-indigo-600 bg-white shadow-xl ${
          featured ? 'border-2' : 'border border-opacity-10'
        }`}
      >
        {/* popular tag */}
        {featured ? (
          <span className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-full bg-indigo-600 px-6 py-1 text-sm font-semibold uppercase text-white'>
            Most popular
          </span>
        ) : null}

        {/* Card Header */}
        <div className='border-b-2 border-gray-200 px-6 py-12'>
          <p className='mb-4 text-center text-3xl font-semibold'>{name}</p>
          <div className='flex items-center justify-center'>
            <div className='flex items-center'>
              <p className='text-4xl font-medium'>{currency}</p>
              <p className='text-7xl font-bold'>{price}</p>
            </div>

            <p className='text-2xl text-gray-400'>/{frequency}</p>
          </div>
        </div>
        {/* Card body */}
        <div className='bg-gray-100 p-12'>
          <ul className='space-y-3'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center space-x-4'>
                <CheckIcon className='h-6 w-6 flex-shrink-0 text-green-500' />
                <p className='text-lg text-gray-600'>{feature}</p>
              </li>
            ))}
          </ul>
          {/* Call to action */}
          <Button
            className={`${
              featured
                ? 'mt-6 transform bg-indigo-600 text-white hover:scale-105 hover:bg-indigo-700'
                : 'bg-white text-indigo-600 hover:bg-gray-50'
            } mt-6 w-full cursor-pointer 
            whitespace-nowrap  rounded-lg px-6 py-2 text-lg
            transition-all  focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50`}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </>
  )
}

export default PricingCard
