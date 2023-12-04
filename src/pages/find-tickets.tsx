import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ContactUs from '@/components/ContactUs/ContactUs'
import Link from 'next/link'

export default function FindTickets() {
  return (
    <>
      <div className='flex w-full flex-col  bg-[#EFF8FF] '>
        <Header />
        <div className='flex justify-end  py-2 pr-4 font-normal text-btnsecondary'>
          <Link href='/help-center'>Help Center</Link>/ Your Tickets
        </div>
        <div className='flex w-full flex-col gap-3  p-10'>
          <span className=' text-center text-6xl font-bold text-primary max-sm:text-5xl'>
            Find your tickets
          </span>
          <span className='py-6 text-center text-3xl font-normal text-[#757575] max-md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br className='max-sm:hidden' /> elit. Sed egestas nisl magna, non malesuada metus
            <br className='max-sm:hidden' /> ornare in.
          </span>
        </div>
      </div>

      <div className='w-full  py-12'>
        <div className=' flex w-full flex-col gap-2 bg-[#F2F9FF] p-10 md:w-3/4'>
          <span className='text-4xl font-bold text-primary'>Where to find your tickets</span>
          <span className='py-6 text-3xl font-normal text-[#757575] max-md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br className='max-sm:hidden' /> elit. Sed egestas nisl magna, non malesuada metus
            <br className='max-sm:hidden' /> ornare in.
          </span>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden p-10'>
          <div className='flex w-full flex-col lg:w-1/2'>
            <span className='text-center text-4xl font-bold text-primary'>
              What information is included on your tickets
            </span>
            <span className='py-6 text-center text-3xl font-normal text-[#757575] max-md:text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nisl magna, non
              malesuada metus ornare in.
            </span>
          </div>
          <div className='mt-6 flex w-full flex-col lg:w-1/2'>
            <span className='text-center text-4xl font-bold text-primary'>
              Why tickets might be missing
            </span>
            <span className='py-6 text-center text-3xl font-normal text-[#757575] max-md:text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nisl magna, non
              malesuada metus ornare in.
            </span>
          </div>
          <div className='absolute bottom-0 right-0 top-0 -z-10 w-1/2 bg-[#F2F9FF]'></div>
        </div>
      </div>
      <div className='mb-8 mt-8 flex w-full justify-center text-center'>
        <div className='mt-6 flex w-full flex-col lg:w-1/2'>
          <span className='text-center text-4xl font-bold text-primary'>
            What to do if your tickets are missing
          </span>
          <span className='py-6 text-center text-3xl font-normal text-[#757575] max-md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nisl magna, non
            malesuada metus ornare in.
          </span>
        </div>
      </div>

      <ContactUs />

      <Footer />
    </>
  )
}
