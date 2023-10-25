import { useFormik } from 'formik'
import { useState } from 'react'
import { Button } from '@/core/ui/button'
import AddImageIcon from '../../../public/assets/add_image.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function OrganizerProfileForm() {
  const [imageURL, setImageURL] = useState(null)
  const formik = useFormik({
    initialValues: {
      organization_name: '',
      website_link: '',
      organization_bio: '',
      description: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  const handleFileChange = (event: any) => {
    const file = event.target.files[0] // Get the first selected file

    // Read the selected image file and set its URL to display it
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        setImageURL(e.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImageURL(null) // Clear the image URL if no file is selected
    }
  }
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-10 max-md:flex-col'>
          <div className='flex w-full flex-col gap-5 rounded-lg bg-[#F3FAFF] p-10 max-sm:p-5'>
            <span className='text-2xl font-bold text-[#003A6D]'>About the organizer </span>

            <form onSubmit={formik.handleSubmit} className='flex w-full flex-col gap-5 '>
              {/* First Name */}

              <input
                className='h-[45px] rounded-lg bg-white p-3 outline-none placeholder:text-sm'
                id='organization_name'
                name='organization_name'
                type='text'
                placeholder='Organization Name*'
                value={formik.values.organization_name}
                onChange={formik.handleChange}
              />
              <input
                className='h-[45px] rounded-lg bg-white p-3 outline-none placeholder:text-sm'
                id='website_link'
                name='website_link'
                type='text'
                placeholder='Website Link'
                value={formik.values.website_link}
                onChange={formik.handleChange}
              />
              <input
                className='h-[45px] rounded-lg bg-white p-3 outline-none placeholder:text-sm'
                id='organization_bio'
                name='organization_bio'
                type='text'
                placeholder='Organization Bio'
                value={formik.values.organization_bio}
                onChange={formik.handleChange}
              />
              <input
                className='h-[45px] rounded-lg bg-white p-3 outline-none placeholder:text-sm'
                id='description'
                name='description'
                type='text'
                placeholder='Description for event pages'
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </form>
          </div>
          <div className=' flex h-[210px] w-[300px] flex-col items-center justify-center rounded-lg bg-[#EFF8FF] p-5 max-sm:w-full'>
            <label
              htmlFor='picture'
              className='flex h-[100px] w-full flex-shrink-0 cursor-pointer items-center justify-center'
            >
              {imageURL ? (
                <Image
                  src={imageURL}
                  alt='profile_image'
                  className='h-[100px] w-[100px] cursor-pointer rounded-full object-cover'
                />
              ) : (
                <div className='flex w-full flex-col items-center gap-4'>
                  <span className='text-center text-lg font-bold'>Organizer Profile Image</span>
                  <Image src={AddImageIcon} alt='plus_icon' className='cursor-pointer' />
                </div>
              )}

              <input
                type='file'
                id='picture'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label>
            {imageURL ? (
              <span className='mt-5 text-center text-sm'>Click to Change Image</span>
            ) : (
              <span className='mt-5 text-center text-sm text-[#757575]'>
                Drag & drop or click to add profile image.
              </span>
            )}
          </div>
        </div>
        <div className=' flex gap-5 '>
          <Button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary'>
            Cancel
          </Button>
          <Link href='/organizer'>
            <Button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'>
              Save
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
