import { useFormik } from 'formik'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/core/ui/select'

const ContactSalesForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      company_name: '',
      password: '',
      first_name: '',
      last_name: '',
      phone_number: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='w-full max-w-[700px] rounded-2xl bg-white p-6 md:p-10'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5 md:gap-5'>
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Email<span className='text-[#F00]'>*</span>
            </span>
            <input
              className='h-[35px] w-full rounded-lg p-3 outline-none'
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
            />
          </div>
          {/* Company Name */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Company name<span className='text-[#F00]'>*</span>
            </span>
            <input
              className='h-[35px] w-full rounded-lg p-3 outline-none'
              id='company_name'
              name='company_name'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.company_name}
              style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
            />
          </div>
          {/* First and Last Name */}

          <div className='flex flex-col justify-between gap-6 sm:flex-row'>
            <div className='flex w-full flex-col gap-3'>
              <span className='text-base text-[#757575]'>
                First name<span className='text-[#F00]'>*</span>
              </span>
              <input
                className='  h-[35px] w-full rounded-lg p-3 outline-none'
                id='first_name'
                name='first_name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.first_name}
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              />
            </div>
            <div className='flex w-full flex-col gap-3'>
              <span className='text-base text-[#757575]'>
                Last name<span className='text-[#F00]'>*</span>
              </span>
              <input
                className='  h-[35px] w-full rounded-lg p-3 outline-none'
                id='last_name'
                name='last_name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.last_name}
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              />
            </div>
          </div>
          {/* Organization Type */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Organization type<span className='text-[#F00]'>*</span>
            </span>
            <Select>
              <SelectTrigger
                className='w-full rounded-lg  border-none bg-white font-normal text-[#A8A8A8] outline-none'
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              >
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className=' font-normal'>United State</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Phone Number */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Phone number<span className='text-[#F00]'>*</span>
            </span>
            <input
              className='h-[35px] w-full rounded-lg p-3 outline-none'
              id='phone_number'
              name='phone_number'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
            />
          </div>
          {/* Country */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Country<span className='text-[#F00]'>*</span>
            </span>
            <Select>
              <SelectTrigger
                className='w-full rounded-lg  border-none bg-white font-normal text-[#A8A8A8] outline-none'
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              >
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className=' font-normal'>United State</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Number of Tickets */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              How many tickets do you normally sell in one year?
              <span className='text-[#F00]'>*</span>
            </span>
            <Select>
              <SelectTrigger
                className='w-full rounded-lg  border-none bg-white font-normal text-[#A8A8A8] outline-none'
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              >
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className=' font-normal'>United State</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* getting in touch */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              Reason for getting in touch
              <span className='text-[#F00]'>*</span>
            </span>
            <Select>
              <SelectTrigger
                className='w-full rounded-lg  border-none bg-white font-normal text-[#A8A8A8] outline-none'
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              >
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className=' font-normal'>United State</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* about bnb */}
          <div className='flex flex-col gap-3'>
            <span className='text-base text-[#757575]'>
              How did you hear about bnb?
              <span className='text-[#F00]'>*</span>
            </span>
            <Select>
              <SelectTrigger
                className='w-full rounded-lg  border-none bg-white font-normal text-[#A8A8A8] outline-none'
                style={{ boxShadow: '0px 0px 4px 0px rgba(21, 86, 173, 0.55)' }}
              >
                <SelectValue placeholder='Please Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className=' font-normal'>United State</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactSalesForm
