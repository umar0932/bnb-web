import { FormikProvider, useFormik } from 'formik'
import { Button } from '@/core/ui/button'
import useUpdateEmailMutation from '@/api/AccountSettings/useUpdateEmailMutation'

export default function ChangeEmailForm() {
  const { mutateAsync } = useUpdateEmailMutation()
  const formik = useFormik({
    initialValues: {
      email_address: '',
      confirm_email: ''
    },
    onSubmit: async values => {
      try {
        await mutateAsync({ email: values.email_address })
      }catch(e){
        
      }
    }
  })
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-5 bg-[#DEF0FF] p-5'>
        <span className='text-xl font-bold text-primary'>Change your Email</span>
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className='flex w-full flex-col items-center justify-center gap-5 max-lg:flex-col'
          >
            <div className='flex w-full flex-col gap-5'>
              {/* Email Address */}
              <div className=' flex  flex-col rounded-lg bg-white p-3 '>
                <span className='text-sm text-[#757575]'>Email Address</span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='email_address'
                  name='email_address'
                  type='email'
                  placeholder='Enter your email address'
                  onChange={formik.handleChange}
                  value={formik.values.email_address}
                />
              </div>
              {/*Confirm Email Address */}
              <div className=' flex  flex-col rounded-lg bg-white p-3'>
                <span className='text-sm text-[#757575]'>Confirm Email</span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='confirm_email'
                  name='confirm_email'
                  type='email'
                  placeholder='Re-Enter your email address'
                  onChange={formik.handleChange}
                  value={formik.values.confirm_email}
                />
              </div>
            </div>
            <Button className='mt-5 flex w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary' disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </FormikProvider>
      </div>
    </>
  )
}
