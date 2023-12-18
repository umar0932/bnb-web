import { Button } from '@/core/ui/button'
import { useFormik } from 'formik'
import Image from 'next/image'
import OrganizerProfileImage from '../../../public/assets/organizer_image_settings.png'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/core/ui/select'
import { Dialog, DialogContent, DialogTrigger } from '@/core/ui/dialog'
import { useState } from 'react'
import EditOrganizerProfile from '@/components/Organizer/EditOrganizerProfile'
import OrganizerLayout from '@/components/Authentication/layouts/OrganizerLayout'
export default function OrganizationSettings() {
  const [isEditing, setIsEditing] = useState(false)
  const handleEditClick = () => {
    setIsEditing(true) // Set editing mode to true
  }
  const formik = useFormik({
    initialValues: {
      organization_name: 'John Doe'
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <OrganizerLayout>
        {isEditing ? ( // Conditionally render EditOrganizerProfile when isEditing is true
          <EditOrganizerProfile />
        ) : (
          <div className='flex w-full flex-col p-10 max-sm:p-5'>
            <div className='flex flex-col gap-5'>
              <div className='flex w-full justify-between max-sm:flex-col max-sm:gap-2'>
                <span className='text-2xl font-bold text-primary '>Organization Settings</span>
                <Dialog>
                  <DialogTrigger>
                    <Button className='h-[38px] w-[180px] bg-btnprimary text-white hover:bg-btnsecondary'>
                      Add Organizer Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <div className='flex flex-col justify-center gap-2 p-5'>
                      <span className=' text-center text-xl font-bold text-primary'>
                        Are you sure you want to create a new organizer profile?
                      </span>
                      <span className='text-center text-[#757575]'>
                        We created an existing organizer profile for you so that you can easily edit
                        it.
                      </span>
                      <div className='mt-5 flex justify-center gap-4 max-sm:flex-col max-sm:items-center'>
                        <Button className='h-[38px] w-[130px] bg-[#DEF0FF] text-primary'>
                          Create new
                        </Button>
                        <Button
                          className='h-[38px] w-[130px] bg-btnprimary text-white hover:bg-btnsecondary'
                          onClick={handleEditClick}
                        >
                          Edit Existing
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className='h-[1px] bg-[#0080FF]'></div>
              <div className='flex flex-col gap-2'>
                <span className='font-bold text-[#313131]'>John Doe</span>
                {/* Edit profile */}
                <div className=' table-drop-shadow flex w-[70%] flex-col max-lg:w-full'>
                  <div className=' flex w-full items-center justify-between rounded-t-xl bg-[#DEF0FF] p-3'>
                    <span className='font-bold text-[#003A6D]'>Organizer Profile</span>
                    <Button
                      className='h-[38px] w-[110px] bg-btnprimary text-white hover:bg-btnsecondary'
                      onClick={handleEditClick}
                    >
                      Edit
                    </Button>
                  </div>
                  <div className='flex gap-3 bg-[#F3FAFF] p-3 max-sm:flex-wrap max-sm:justify-center'>
                    <div className='flex w-full flex-col'>
                      <form onSubmit={formik.handleSubmit} className='flex w-full flex-col gap-5'>
                        <div className='flex w-full flex-col rounded-lg bg-white p-2 '>
                          <span className='text-sm text-[#757575]'>Organization Name</span>
                          <input
                            className='h-[25px] bg-transparent outline-none placeholder:text-sm'
                            id='organization_name'
                            name='organization_name'
                            type='text'
                            onChange={formik.handleChange} // Use custom function to handle input change
                            value={formik.values.organization_name}
                          />
                        </div>
                        <div className='flex w-full flex-col rounded-lg bg-white p-2 '>
                          <span className='text-sm text-[#757575]'>Prefered Country</span>
                          <Select>
                            <SelectTrigger
                              className='h-[25px] w-full border-none  text-[#313131] outline-none'
                              color='text-btnsecondary'
                            >
                              <SelectValue placeholder='United States' />
                            </SelectTrigger>
                            <SelectContent className='border-none  outline-none'>
                              <SelectGroup>
                                <SelectItem value='United States'>United States</SelectItem>
                                <SelectItem value='Finland'>Finland</SelectItem>
                                <SelectItem value='United Kingdom'>United Kingdom</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </form>
                    </div>
                    {/* Image */}
                    <div>
                      <Image src={OrganizerProfileImage} alt='organizer_profile_image' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </OrganizerLayout>
    </>
  )
}
