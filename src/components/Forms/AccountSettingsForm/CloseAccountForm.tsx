import Link from 'next/link'
import { useFormik } from 'formik'

import { Checkbox } from '@/core/ui/checkbox'
import { Button } from '@/core/ui/button'
import { Input } from '@/core/ui/input'

const CloseAccountForm = () => {
  const formik = useFormik({
    initialValues: {
      other_information: '',
      type_confirm: '',
      password_confirm: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='card-drop-shadow flex gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
        <div className='flex w-full flex-col'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Close Account</span>

          <div className='mt-5 h-[1px] bg-[#BEBEBE]'> </div>

          <div className='mt-5 flex  flex-col '>
            <span className='text-2xl'>Attending Events</span>
            <span className='text-sm text-[#757575]'>
              Thank you for using Bnb Events. If there is anything we can do to keep you with us,
              please <span className='underline'>let us know.</span> Please take a moment to let us
              know why you are leaving:
            </span>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>I do not want my information saved by Bnb</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>I am not interested in managing my attendance at any events</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>The site is too difficult to use</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' defaultChecked={true} />
              <span>I am not attending any events</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox className='text-btnseondary' />
              <span>Others (please explain)</span>
            </div>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className='mt-5 flex w-full flex-col gap-5 max-lg:flex-col'
            >
              {/* Card Holder Name */}
              <div className=' flex  flex-col gap-3'>
                <textarea
                  className='h-[115px] resize-none rounded-lg bg-[#EFF8FF] p-2 outline-none'
                  id='other_information'
                  name='other_information'
                  placeholder=''
                  onChange={formik.handleChange}
                  value={formik.values.other_information}
                />
                <span className='mt-2 text-sm'>
                  Please enter "CLOSE" and your password to confirm that you wish to close your
                  account
                </span>
                <span>Type "CLOSE":</span>

                <Input
                  className='h-[55px] rounded-lg bg-[#EFF8FF] p-2  outline-none'
                  id='type_confirm'
                  name='type_confirm'
                  type='text'
                  placeholder=''
                  onChange={formik.handleChange}
                  value={formik.values.type_confirm}
                />
                <span>Enter Password:</span>
                <Input
                  className='h-[55px] rounded-lg bg-[#EFF8FF] p-2 outline-none'
                  id='password_confirm'
                  name='password_confirm'
                  type='password'
                  placeholder=''
                  onChange={formik.handleChange}
                  value={formik.values.password_confirm}
                />
              </div>
            </form>
            <Link href='/'>
              <Button className='mt-5 flex w-[160px] bg-btnprimary font-bold text-white hover:bg-btnsecondary'>
                Close Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CloseAccountForm
