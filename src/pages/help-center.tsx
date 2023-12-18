import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ContactUs from '@/components/ContactUs/ContactUs'
import Link from 'next/link'
import { useFormik } from 'formik'
import StaticImage from 'next/image'
import FileSearch from '../../public/assets/file_search.svg'
import FileTransfer from '../../public/assets/file_transfer.svg'
import EditInfo from '../../public/assets/info_icon.svg'
import Register from '../../public/assets/register_icon.svg'
import Ticket from '../../public/assets/ticket_icon.svg'
import Account from '../../public/assets/account_icon.svg'
import File from '../../public/assets/file_icon.svg'
import ContactBook from '../../public/assets/contact_book.svg'
export default function HelpCenter() {
  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='flex w-full flex-col  bg-[#EFF8FF] '>
        <Header colorScheme='second-alternative' />
        <div className='flex justify-end  py-2 pr-4 font-normal text-btnsecondary'>
          <Link href='/help-center'>Help Center</Link>
        </div>
        <div className='flex w-full flex-col gap-3  p-10'>
          <span className=' text-center text-6xl font-bold text-primary max-sm:text-5xl'>
            How can we help?
          </span>
          <form onSubmit={formik.handleSubmit} className=' my-5 flex justify-center'>
            <input
              className='mr-4 flex h-[42px] w-[370px] justify-center rounded-lg
               bg-white p-4 text-center text-sm font-normal italic placeholder-[#757575] outline-none max-sm:w-[280px]'
              id='search'
              name='search'
              type='search'
              placeholder='Search help articles'
              onChange={formik.handleChange}
              value={formik.values.search}
            />
          </form>
        </div>
      </div>
      <div className='top[-22px] relative mx-auto flex  justify-center max-sm:flex-col '>
        <div className='flex max-w-[640px] flex-col'>
          <div className='bg-primary p-2 text-center text-xl font-normal text-white'>
            Attending an event
          </div>
          <div className='flex w-full flex-wrap justify-between gap-8 p-10 max-lg:justify-center'>
            <Link href='/find-tickets'>
              <button className='field-drop-shadow flex items-center gap-4 rounded-lg p-3 px-5 text-xl transition-transform hover:scale-105'>
                <StaticImage src={FileSearch} alt='Logo' className='h-6 w-6' />
                Find your tickets
              </button>
            </Link>
            <Link href='/contact-event-organizer'>
              <button className='field-drop-shadow flex items-center gap-4 rounded-lg p-3 px-5 text-xl transition-transform hover:scale-105'>
                <StaticImage src={ContactBook} alt='Logo' className='h-6 w-6' />
                Contact organizer
              </button>
            </Link>
          </div>
        </div>
        <div className='flex  max-w-[640px] flex-col  '>
          <div className='bg-[#5395EE8C]  p-2 text-center text-xl font-normal text-primary'>
            Organizing an event
          </div>
          <div className='flex w-full flex-wrap justify-between gap-8  p-10 max-lg:justify-center'>
            <button className='field-drop-shadow flex items-center gap-4 rounded-lg p-3 px-5 text-xl transition-transform hover:scale-105'>
              <StaticImage src={FileTransfer} alt='Logo' className=' h-6 w-6' />
              Transfer tickets
            </button>
            <button className='field-drop-shadow flex items-center gap-4 rounded-lg p-3 px-5 text-xl transition-transform hover:scale-105'>
              <StaticImage src={EditInfo} alt='Logo' className=' h-6 w-6' />
              Edit order info
            </button>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <span className=' pl-10 text-4xl font-bold text-primary'>Browse by topics</span>
      </div>

      <div className='mt-10 flex flex-wrap justify-between gap-10 p-10 max-md:justify-center 2xl:justify-evenly'>
        <button className='field-drop-shadow relative flex w-[300px] flex-col items-center justify-center overflow-visible rounded-lg p-5 text-xl'>
          <div className='absolute left-1/2 top-[-26px] -translate-x-1/2 transform rounded-full bg-[#DEF0FF] p-3'>
            <StaticImage src={Register} alt='register-icon' className='h-6 w-6' />
          </div>
          <span className='pt-3'>Buy & Register</span>
        </button>
        <button className='field-drop-shadow relative flex w-[300px] flex-col items-center justify-center overflow-visible rounded-lg p-5 text-xl'>
          <div className='absolute left-1/2 top-[-26px] -translate-x-1/2 transform rounded-full bg-[#DEF0FF] p-3'>
            <StaticImage src={Ticket} alt='ticket-icon' className='h-6 w-6' />
          </div>
          <span className='pt-3'>Your Tickets</span>
        </button>
        <button className='field-drop-shadow relative flex w-[300px] flex-col items-center justify-center overflow-visible rounded-lg p-5 text-xl'>
          <div className='absolute left-1/2 top-[-26px] -translate-x-1/2 transform rounded-full bg-[#DEF0FF] p-3'>
            <StaticImage src={Account} alt='account-icon' className='h-6 w-6' />
          </div>
          <span className='pt-3'>Your Account</span>
        </button>
        <button className='field-drop-shadow relative flex w-[300px] flex-col items-center justify-center overflow-visible rounded-lg p-5 text-xl'>
          <div className='absolute left-1/2 top-[-26px] -translate-x-1/2 transform rounded-full bg-[#DEF0FF] p-3'>
            <StaticImage src={File} alt='account-icon' className='h-6 w-6' />
          </div>
          <span className='pt-3'>Your Account</span>
        </button>
      </div>
      <ContactUs />

      <Footer />
    </>
  )
}
