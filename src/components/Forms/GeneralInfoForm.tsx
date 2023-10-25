import { useFormik } from 'formik'
import { Pencil } from 'lucide-react'

export default function GeneralInfoForm() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email_address: '',
      delivery_method: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='w-full items-center justify-center '>
        <span className='flex justify-center text-3xl font-bold text-primary'>General Info</span>
        <form onSubmit={formik.handleSubmit} className='mt-5 flex flex-col gap-5'>
          {/* First Name */}
          <div className='flex items-center rounded-lg bg-[#DEF0FF] p-3'>
            <div className='flex w-full flex-col'>
              <span className='text-sm text-[#757575]'>First Name</span>

              <input
                className=' h-[25px] w-full rounded-lg border-none bg-transparent  outline-none'
                id='first_name'
                name='first_name'
                type='text'
                placeholder='Enter your first name'
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </div>
            <div>
              <Pencil size={20} className='cursor-pointer text-btnsecondary' />
            </div>
          </div>

          {/* Last Name */}
          <div className='flex items-center rounded-lg bg-[#DEF0FF] p-3'>
            <div className='flex w-full flex-col'>
              <span className='text-sm text-[#757575]'>Last Name</span>

              <input
                className=' h-[25px] w-full rounded-lg border-none bg-transparent  outline-none'
                id='last_name'
                name='last_name'
                type='text'
                placeholder='Enter your last name'
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </div>
            <div>
              <Pencil size={20} className='cursor-pointer text-btnsecondary' />
            </div>
          </div>

          {/* Email Address */}
          <div className='flex items-center rounded-lg bg-[#DEF0FF] p-3'>
            <div className='flex w-full flex-col'>
              <span className='text-sm text-[#757575]'>Email Address</span>

              <input
                className=' h-[25px] w-full rounded-lg border-none bg-transparent  outline-none'
                id='email_address'
                name='email_address'
                type='email'
                placeholder='Enter your email address'
                onChange={formik.handleChange}
                value={formik.values.email_address}
              />
            </div>
            <div>
              <Pencil size={20} className='cursor-pointer text-btnsecondary' />
            </div>
          </div>

          {/* Delivery Method */}
          <div className='flex items-center rounded-lg bg-[#DEF0FF] p-3'>
            <div className='flex w-full flex-col'>
              <span className='text-sm text-[#757575]'>Delivery Method</span>

              <input
                className=' h-[25px] w-full rounded-lg border-none bg-transparent  outline-none'
                id='delivery_method'
                name='delivery_method'
                type='text'
                placeholder='Enter your delivery method'
                onChange={formik.handleChange}
                value={formik.values.delivery_method}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
