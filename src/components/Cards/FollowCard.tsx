import StaticImage from 'next/image'

import { FollowCardProps } from '@/interfaces'

const FollowCard = ({ title, SubTitle, imageSrc }: FollowCardProps) => {
  return (
    <>
      <div className='mt-3 flex gap-5 rounded-sm bg-[#F6FBFF] p-5 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center'>
        <div>
          <StaticImage src={imageSrc} alt='logo' />
        </div>
        <div className='flex flex-col gap-4 max-sm:items-center max-sm:justify-center max-sm:text-center'>
          <span className='text-xl text-black'>{title}</span>
          <span className='text-sm text-[#757575]'>{SubTitle}</span>
          <button className='h-[30px] w-[100px] rounded-md bg-btnprimary text-white hover:bg-btnsecondary'>
            Follow
          </button>
        </div>
      </div>
    </>
  )
}

export default FollowCard
