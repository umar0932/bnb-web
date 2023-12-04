import BrowseEventCard from '@/components/Cards/BrowseEventCard'
import GoogleMap from '@/components/GoogleMaps/GoogleMap'
import AuthHeader from '@/components/Header/AuthHeader'
import { browse_events } from '@/utils/fakeBackend'
import { Button } from '@/core/ui/button'
import { useFormik } from 'formik'

export default function BrowseEvents() {
  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  const browseArray = browse_events
  return (
    <>
      <div className='flex flex-col'>
        <AuthHeader />
        <div className='flex w-full gap-5 max-md:flex-col'>
          {/* MAP INTEGRATION */}
          <div className='h-[70%] w-[30%] max-md:order-2 max-md:w-full'>
            <GoogleMap />
          </div>

          {/* Browse Events Card */}
          <div className='flex w-[70%] flex-col gap-5 p-10 max-md:w-full max-sm:p-3'>
            <div className='flex w-full items-center gap-3 max-sm:flex-col '>
              <form onSubmit={formik.handleSubmit} className='mx-4 w-full'>
                <input
                  className='h-[38px] w-full rounded-lg bg-navcolors p-3 text-xs font-normal italic placeholder-tertiary outline-none'
                  id='search'
                  name='search'
                  type='search'
                  placeholder='Search Event'
                  onChange={formik.handleChange}
                  value={formik.values.search}
                />
              </form>
              <Button className='h-[38px] w-[140px] bg-btnprimary text-white hover:bg-btnsecondary'>
                Search
              </Button>
            </div>
            <div className='mt-5 flex w-full items-center gap-60 border-b border-b-[#B5B5B5] p-2 max-lg:gap-20 max-md:flex-col max-md:gap-5'>
              <span className='text-3xl font-bold text-primary'>California</span>
              <span className='text-lg text-tertiary'>
                Danica hairstylist: <span className='font-bold text-primary'>Haircut</span>
              </span>
            </div>
            {browseArray.map((browse_event, index) => (
              <BrowseEventCard key={index} browse_event={browse_event} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
