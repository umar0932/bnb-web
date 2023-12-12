import { Button } from '@/core/ui/button'
import Image from 'next/image'
import { Label } from '@/core/ui/label'
import OrganizeProfileImage from '../../../public/assets/Organizer_profile_image.png'
import EditProfileIcon from '../../../public/assets/edit_profile_icon.svg'
import LinkIcon from '../../../public/assets/link_icon.svg'
import { RadioGroup, RadioGroupItem } from '@/core/ui/radio-group'
import Link from 'next/link'
import OrganizerLayout from '@/components/Authentication/layouts/OrganizerLayout'
export default function OrganizerHome() {
  return (
    <>
      <OrganizerLayout>
        <div className='flex w-full flex-col gap-5 p-10'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Hello, John Doe</span>
          <div className='mt-5 flex gap-10 max-sm:flex-col'>
            <div className='flex  items-center justify-center gap-5 rounded-xl bg-[#F3FAFF] p-5 max-lg:flex-col max-lg:items-center max-lg:justify-center'>
              <div className='flex flex-col gap-2'>
                <span className='text-xl font-bold text-[#003A6D]'>Your next Event</span>
                <span className='text-[#757575]'>Go to events</span>
              </div>
              <div className='lg:ml-10'>
                <Link href='/create-event-page/welcome'>
                  <Button className='h-[38px] w-[120px] bg-btnprimary text-white hover:bg-btnsecondary'>
                    Create Event
                  </Button>
                </Link>
              </div>
            </div>

            {/* Organizer Profile Info */}

            <div className='flex items-center justify-center gap-5 rounded-xl bg-[#F3FAFF] p-5 max-md:flex-col'>
              <div className='flex flex-shrink-0 rounded-full'>
                <Image src={OrganizeProfileImage} alt='organizer-profile-image' />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between '>
                  <span className='text-xl font-bold text-[#003A6D]'>Rockstar</span>

                  <Image
                    src={EditProfileIcon}
                    alt='edit_profile_icon'
                    className=' h-[17px] w-[17px] cursor-pointer'
                  />
                </div>
                <div className='flex gap-10 '>
                  <span className='text-[#757575]'>
                    Event: <span className='text-[#1A1A1A]'>01</span>
                  </span>
                  <span className='text-[#757575]'>
                    Followers: <span className='text-[#1A1A1A]'>3534501</span>
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-[#757575]'>Copy URL</span>
                  <Image
                    src={LinkIcon}
                    alt='link_icon'
                    className=' h-[17px] w-[17px] cursor-pointer'
                  />
                </div>
              </div>
            </div>

            {/* Help Center */}
            <div className='flex  items-center justify-center gap-5 rounded-xl bg-[#F3FAFF] p-5'>
              <div className='flex flex-col gap-2'>
                <span className='text-xl font-bold text-[#003A6D]'>Need any help?</span>
                <Link href='/help-center'>
                  <span className='text-[#3B5998] underline'>Go to help center</span>
                </Link>
              </div>
            </div>
          </div>

          {/* radio Buttons */}
          <div className='flex w-[1000px] flex-col rounded-xl bg-[#F3FAFF] p-5 max-lg:w-full'>
            <div className='flex  items-center justify-between gap-5 max-sm:flex-col max-sm:items-start'>
              <div className='flex flex-col gap-2'>
                <span className='text-xl font-bold text-[#003A6D]'>Your checklist</span>
                <span className='text-[#757575]'>
                  We make it easy to plan successful events. Here's how to start!
                </span>
              </div>
              <div className='ml-10 max-sm:ml-0'>
                <Button className='h-[38px] w-[120px] bg-btnprimary text-white hover:bg-btnsecondary'>
                  Start Here
                </Button>
              </div>
            </div>
            <div className='mt-3 flex gap-5'>
              <div className='flex'>
                <RadioGroup className='flex items-center gap-5 max-md:flex-col max-md:items-start max-sm:mt-5'>
                  <div className=' flex h-[50px] items-center justify-between gap-5 rounded-lg bg-white p-2'>
                    <RadioGroupItem
                      value='option-one'
                      id='option-one'
                      className='h-[20px] w-[20px] border-btnprimary  text-btnprimary'
                      checked={true}
                    />
                    <Label
                      htmlFor='option-one'
                      className='text-lg text-[#757575] max-sm:text-[15px]'
                    >
                      Create event
                    </Label>
                  </div>
                  <div className=' flex h-[50px] items-center justify-between gap-5 rounded-lg bg-white p-2'>
                    <RadioGroupItem
                      value='option-two'
                      id='option-two'
                      className='h-[20px] w-[20px] border-btnprimary  text-btnprimary'
                      checked={true}
                    />
                    <Label
                      htmlFor='option-two'
                      className='text-lg text-[#757575] max-sm:text-[15px]'
                    >
                      Set up your organization profile
                    </Label>
                  </div>
                  <div className=' flex h-[50px] items-center justify-between gap-5 rounded-lg bg-white p-2'>
                    <RadioGroupItem
                      value='option-three'
                      id='option-three'
                      className='h-[20px] w-[20px] border-btnprimary  text-btnprimary'
                      checked={true}
                    />
                    <Label
                      htmlFor='option-three'
                      className='text-lg text-[#757575] max-sm:text-[15px]'
                    >
                      Add Bank Account
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </OrganizerLayout>
    </>
  )
}
