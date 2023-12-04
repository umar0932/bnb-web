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
          <Link href='/help-center'>Help Center</Link>/ Contact an event organizer
        </div>
        <div className='flex w-full flex-col gap-3  p-10'>
          <span className=' text-center text-6xl font-bold text-primary max-sm:text-5xl'>
            Contact the event organizer
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
          <span className='text-4xl font-bold text-primary'>If you already have your ticket</span>
          <span className='py-6 text-3xl font-normal text-[#757575] max-md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br className='max-sm:hidden' /> elit. Sed egestas nisl magna, non malesuada metus
            <br className='max-sm:hidden' /> ornare in.
          </span>
        </div>
      </div>

      <div className='0 relative flex w-full flex-col gap-10 overflow-hidden p-10 max-sm:p-3'>
        <div className='flex w-full gap-5  max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center '>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>1</span>
          </div>
          <div className='ml-5 flex flex-col gap-3'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              See what you can do on your own.
            </span>
            <span className='text-xl text-[#757575] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>
        {/* Number 2 */}
        <div className='mt-8 flex gap-5  max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center lg:relative lg:left-[80px]'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>2</span>
          </div>
          <div className='ml-5 flex flex-col gap-3 '>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Log in and go to "Tickets".
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        {/* Number 3 */}
        <div className='mt-8 flex gap-5  max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center lg:relative lg:left-[150px]'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>3</span>
          </div>
          <div className='ml-5 flex flex-col gap-3'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Select your order.
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        {/* Number 4 */}
        <div className='mt-8 flex gap-5  max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center lg:relative lg:left-[220px]'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>4</span>
          </div>
          <div className='ml-5 flex flex-col gap-3'>
            <span className='text-3xl font-bold text-primary  max-sm:text-2xl'>
              Click "Contact the organizer".
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        {/* Number 5 */}
        <div className='mt-8 flex gap-5 max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center lg:relative lg:left-[300px]'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>5</span>
          </div>
          <div className='ml-5 flex flex-col gap-3'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Fill out the form and click "Continue".
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        <div className='absolute bottom-[180px] right-0 top-[120px] -z-10 w-3/4 bg-[#F2F9FF]'></div>
      </div>

      <div className=' relative w-full  py-12'>
        <div className=' flex w-full flex-col gap-2 bg-[#F2F9FF] p-10 md:w-3/4'>
          <span className='text-4xl font-bold text-primary'>If you don't have a ticket</span>
          <span className='py-6 text-3xl font-normal text-[#757575] max-md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br className='max-sm:hidden' /> elit. Sed egestas nisl magna, non malesuada metus
            <br className='max-sm:hidden' /> ornare in.
          </span>
        </div>
        <div className='flex w-full gap-5 max-lg:flex-col  max-lg:items-center max-lg:justify-center max-lg:text-center lg:flex-row-reverse lg:pr-10 '>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>1</span>
          </div>
          <div className='ml-5 flex flex-col  gap-3 lg:text-end'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Go to the event page.
            </span>
            <span className='text-xl text-[#757575] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>
        {/* Number 2 */}
        <div className='mt-10 flex gap-5 pt-10 max-lg:flex-col  max-lg:items-center max-lg:justify-center max-lg:text-center lg:relative lg:right-[100px] lg:flex-row-reverse'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>2</span>
          </div>
          <div className='ml-5 flex flex-col gap-3 lg:text-end'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Click "Contact", then "Contact the organizer".
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        {/* Number 3 */}
        <div className='mt-10 flex flex-row-reverse gap-5 pt-10  max-lg:flex-col  max-lg:items-center max-lg:justify-center max-lg:text-center lg:relative lg:right-[160px]'>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DEF0FF] p-5'>
            <span className='text-3xl font-bold text-primary'>3</span>
          </div>
          <div className='ml-5 flex flex-col gap-3 lg:text-end'>
            <span className='text-3xl font-bold text-primary max-sm:text-2xl'>
              Fill out the form and click "Continue".
            </span>
            <span className='text-xl text-[#757575]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{' '}
              <br className='max-md:hidden' />
              egestas nisl magna, non malesuada metus ornare in.
            </span>
          </div>
        </div>

        <div className='absolute bottom-[280px] left-0 top-[120px] -z-10 w-3/4 bg-[#F2F9FF] max-sm:w-full'></div>
      </div>

      <ContactUs />

      <Footer />
    </>
  )
}
