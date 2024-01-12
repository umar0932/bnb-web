import { FormikProvider, useFormik } from 'formik'
import { Checkbox } from '@/core/ui/checkbox'
import { Button } from '@/core/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/core/ui/select'
import useCustomerDataQuery from '@/api/AccountSettings/useCustomerDataQuery'
import useUpdateCustomerMutation from '@/api/AccountSettings/useUpdateCustomerMutation'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import ProfilePicture from '../ProfilePicture'

const FormikSchema = z.object({
  first_name: z.string().default(''),
  last_name: z.string().default(''),
  home_phone: z.string().optional(),
  cell_phone: z.string().optional(),
  job_title: z.string().optional(),
  company_name: z.string().optional(),
  website: z.string().url().optional(),
  address: z.string().optional(),
  address_two: z.string().optional(),
  city: z.string().optional(),
  postal_code: z.string().optional(),
  work_address: z.string().optional(),
  work_address_two: z.string().optional(),
  work_city: z.string().optional(),
  work_postal_code: z.string().optional() 
})

export default function ContactInfoForm() {
  const { data } = useCustomerDataQuery()
  const { mutateAsync } = useUpdateCustomerMutation()
  const formik = useFormik({
    initialValues: {
      first_name: data?.getCustomerData.firstName ?? '',
      last_name: data?.getCustomerData.lastName ?? '',
      home_phone: data?.getCustomerData.homePhone ?? undefined,
      cell_phone: data?.getCustomerData.cellPhone ?? undefined,
      job_title: data?.getCustomerData.jobTitle ?? undefined,
      company_name: data?.getCustomerData.companyName ?? undefined,
      website: data?.getCustomerData.website ?? undefined,
      address: data?.getCustomerData.firstAddress ?? undefined,
      address_two: data?.getCustomerData.secondAddress ?? undefined,
      city: data?.getCustomerData.city ?? undefined,
      postal_code: data?.getCustomerData.zipCode ?? undefined,
      work_address: data?.getCustomerData.firstAddress ?? undefined,
      work_address_two: data?.getCustomerData.secondAddress ?? undefined,
      work_city: data?.getCustomerData.city ?? undefined,
      work_postal_code: data?.getCustomerData.zipCode ?? undefined
    },
    validationSchema:toFormikValidationSchema(FormikSchema),
    enableReinitialize: true,
    onSubmit: async values => {
      
      try {
        await mutateAsync({
          input: {
            firstName: values.first_name,
            lastName: values.last_name,
            companyName: values.company_name,
            homePhone: values.home_phone,
            cellPhone: values.cell_phone,
            website: values.website,
            firstAddress: values.address,
            secondAddress: values.address_two,
            city: values.city,
            zipCode: values.postal_code,
            jobTitle: values.job_title
          }
        })
      } catch (e) {}
    }
  })
  return (
    <>
      <div className='card-drop-shadow flex gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
        <div className='flex w-full flex-col'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
            Account Information
          </span>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <div className='mt-2 flex w-full gap-5 max-lg:flex-col'>
                <div className='flex w-[80%] flex-col max-lg:w-full'>
                  {/* First Name */}
                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>First Name</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='first_name'
                      name='first_name'
                      type='text'
                      placeholder='Enter your first name'
                      onChange={formik.handleChange}
                      value={formik.values.first_name}
                    />
                  </div>

                  {/* Last Name */}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Last Name</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='last_name'
                      name='last_name'
                      type='text'
                      placeholder='Enter your last name'
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
                    />
                  </div>

                  {/* Home Phone */}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Home Phone</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='home_phone'
                      name='home_phone'
                      type='string'
                      placeholder='Enter your home phone'
                      onChange={formik.handleChange}
                      value={formik.values.home_phone}
                    />
                  </div>

                  {/* Cell Phone */}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Cell Phone</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='cell_phone'
                      name='cell_phone'
                      type='string'
                      placeholder='Enter your cell phone'
                      onChange={formik.handleChange}
                      value={formik.values.cell_phone}
                    />
                  </div>

                  {/* Job Title */}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Job Title</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='job_title'
                      name='job_title'
                      type='text'
                      placeholder='Enter your job title'
                      onChange={formik.handleChange}
                      value={formik.values.job_title}
                    />
                  </div>

                  {/* Company/Organization Name */}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Company/ Organization</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='company_name'
                      name='company_name'
                      type='text'
                      placeholder='Enter your company name'
                      onChange={formik.handleChange}
                      value={formik.values.company_name}
                    />
                  </div>

                  {/*Website Name*/}

                  <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                    <span className='text-sm text-[#757575]'>Website</span>
                    <input
                      className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                      id='website_name'
                      name='website_name'
                      type='url'
                      placeholder='Enter website address'
                      onChange={formik.handleChange}
                      value={formik.values.website}
                    />
                  </div>

                  <div className='mt-20'>
                    <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
                      Home Address
                    </span>
                    {/* Address */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Address</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='address'
                        name='address'
                        type='text'
                        placeholder='Enter your address'
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                    </div>

                    {/* Second Address */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Address 2</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='address_two'
                        name='address_two'
                        type='text'
                        placeholder='Enter your second address'
                        onChange={formik.handleChange}
                        value={formik.values.address_two}
                      />
                    </div>

                    {/* City */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>City</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='city'
                        name='city'
                        type='text'
                        placeholder='Enter your city name'
                        onChange={formik.handleChange}
                        value={formik.values.city}
                      />
                    </div>

                    {/* Country */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Country</span>
                      <Select>
                        <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575] '>
                          <SelectValue placeholder='United States' />
                        </SelectTrigger>
                        <SelectContent className='text-[#313131]'>
                          <SelectGroup>
                            <SelectItem value='United States'>United States</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {/*Zip/Postal Code*/}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Zip/ Postal Code</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='postal_code'
                        name='postal_code'
                        type='number'
                        placeholder='Enter your Zip Code'
                        onChange={formik.handleChange}
                        value={formik.values.postal_code}
                      />
                    </div>

                    {/* State */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>State</span>
                      <Select>
                        <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575] '>
                          <SelectValue placeholder='California' />
                        </SelectTrigger>
                        <SelectContent className='text-[#313131]'>
                          <SelectGroup>
                            <SelectItem value='United States'>California</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Work Address */}
                  <div className='mt-20'>
                    <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
                      Work Address
                    </span>
                    {/* Address */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Address</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='address'
                        name='address'
                        type='text'
                        placeholder='Enter your address'
                        onChange={formik.handleChange}
                        value={formik.values.work_address}
                      />
                    </div>

                    {/* Second Address */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Address 2</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='address_two'
                        name='address_two'
                        type='text'
                        placeholder='Enter your second address'
                        onChange={formik.handleChange}
                        value={formik.values.work_address_two}
                      />
                    </div>

                    {/* City */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>City</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='city'
                        name='city'
                        type='text'
                        placeholder='Enter your city name'
                        onChange={formik.handleChange}
                        value={formik.values.work_city}
                      />
                    </div>

                    {/* Country */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Country</span>
                      <Select>
                        <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575] '>
                          <SelectValue placeholder='United States' />
                        </SelectTrigger>
                        <SelectContent className='text-[#313131]'>
                          <SelectGroup>
                            <SelectItem value='United States'>United States</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {/*Zip/Postal Code*/}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>Zip/ Postal Code</span>
                      <input
                        className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                        id='postal_code'
                        name='postal_code'
                        type='number'
                        placeholder='Enter your Zip Code'
                        onChange={formik.handleChange}
                        value={formik.values.work_postal_code}
                      />
                    </div>

                    {/* State */}
                    <div className='mt-5 flex  flex-col rounded-lg bg-[#EFF8FF] p-3'>
                      <span className='text-sm text-[#757575]'>State</span>
                      <Select>
                        <SelectTrigger className='w-full border-none bg-[#EFF8FF] text-[#757575] '>
                          <SelectValue placeholder='California' />
                        </SelectTrigger>
                        <SelectContent className='text-[#313131]'>
                          <SelectGroup>
                            <SelectItem value='United States'>California</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <ProfilePicture />
              </div>

              {/* Billing Address */}
              <div className='mt-10 flex flex-col gap-2'>
                <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
                  Billing Address
                </span>
                <div className='flex items-center space-x-2'>
                  <Checkbox className='text-btnseondary' />
                  <span className='text-[#757575] max-sm:text-sm'>
                    Same as home address information
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox />
                  <span className='text-[#757575] max-sm:text-sm'>
                    Same as work address information
                  </span>
                </div>
              </div>

              {/* Shipping Address */}
              <div className='mt-10 flex flex-col gap-2'>
                <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
                  Shipping Address
                </span>
                <div className='flex items-center space-x-2'>
                  <Checkbox className='text-btnseondary' />
                  <span className='text-[#757575] max-sm:text-sm'>
                    Same as home address information
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox />
                  <span className='text-[#757575] max-sm:text-sm'>
                    Same as work address information
                  </span>
                </div>
              </div>
              <Button
                className='mt-10 w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary'
                disabled={formik.isSubmitting}
                type={'submit'}
              >
                {formik.isSubmitting ? 'Saving...' : 'Save'}
              </Button>
            </form>
          </FormikProvider>
        </div>
      </div>
    </>
  )
}
