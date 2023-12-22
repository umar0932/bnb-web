import { useFormik } from 'formik'
import { Button } from '@/core/ui/button'
import { useUpdatePasswordMutation } from '@/api/AccountSettings/useUpdatePasswordMutation'
export default function ChangePasswordForm() {
  const { mutateAsync } = useUpdatePasswordMutation()
  const formik = useFormik({
    initialValues: {
      new_password: '',
      confirm_password: ''
    },
    onSubmit: async values => {
      await mutateAsync({ input: values.new_password })
    }
  })

  return (
    <>
      <div className='card-drop-shadow flex h-[450px] gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
        <div className='flex w-full flex-col'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Change Password</span>

          <div className='mt-5 h-[1px] bg-[#BEBEBE]'> </div>

          <form
            onSubmit={formik.handleSubmit}
            className='mt-5 flex w-full flex-col gap-5 max-lg:flex-col'
          >
            <div className='flex w-full flex-col gap-5'>
              {/* New Password */}
              <div className=' flex  flex-col rounded-lg bg-[#EFF8FF] p-3 '>
                <span className='text-sm text-[#757575]'>New Password</span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='new_password'
                  name='new_password'
                  type='password'
                  placeholder='Enter your new password'
                  onChange={formik.handleChange}
                  value={formik.values.new_password}
                />
              </div>
              {/*Confirm Password */}
              <div className=' flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                <span className='text-sm text-[#757575]'>Confirm Password</span>
                <input
                  className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                  id='confirm_password'
                  name='confirm_password'
                  type='password'
                  placeholder='Confirm your password'
                  onChange={formik.handleChange}
                  value={formik.values.confirm_password}
                />
              </div>
            </div>
            <Button
              className='mt-5 flex w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary'
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
