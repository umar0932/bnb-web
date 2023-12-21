import { Switch } from '@/core/ui/switch'
import Image from 'next/image'
import GoogleIcon from '../../../../public/assets/google_icon.svg'
import FacebookIcon from '../../../../public/assets/facebook_icon.svg'
import AppleIcon from '../../../../public/assets/apple_icon.svg'
export default function LinkedAccountForm() {
  return (
    <>
      <div className='card-drop-shadow flex h-[470px] gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
        <div className='flex w-full flex-col'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Linked Accounts</span>

          <div className='mt-5 h-[1px] bg-[#BEBEBE]'> </div>

          <div className='mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start'>
            <span className='text-2xl'>Manage your social logins</span>
          </div>
          <div className='mt-5 flex flex-col gap-3'>
            {/* google account */}
            <div className='flex items-center justify-between rounded-lg bg-[#EFF8FF] p-5'>
              <div className='flex items-center gap-4'>
                <Image src={GoogleIcon} alt='google_icon' className='h-[22px] w-[22px]' />
                <span>Not Connected</span>
              </div>
              <Switch />
            </div>

            {/* Facebook Account */}

            <div className='flex items-center justify-between rounded-lg bg-[#EFF8FF] p-5'>
              <div className='flex gap-4'>
                <Image src={FacebookIcon} alt='facebook_icon' className='h-[22px] w-[22px]' />
                <span>Not Connected</span>
              </div>
              <Switch />
            </div>

            {/* Apple Account */}

            <div className='flex items-center justify-between rounded-lg bg-[#EFF8FF] p-5'>
              <div className='flex gap-4'>
                <Image src={AppleIcon} alt='apple_icon' className='h-[22px] w-[22px]' />
                <span>Not Connected</span>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
