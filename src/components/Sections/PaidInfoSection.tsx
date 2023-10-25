import Image from 'next/image'
import MoneyIcon from '../../../public/assets/money_icon.svg'
import CardIcon from '../../../public/assets/card_icon.svg'
import WalletIcon from '../../../public/assets/wallet_icon.svg'

export default function PaidInfoSection() {
  return (
    <>
      <div className='flex flex-col bg-white'>
        <div className='flex flex-col p-10'>
          <span className='text-3xl font-bold text-primary'> Get paid, earn more</span>
          <span className='text-base text-[#757575]'>
            Do what you love and earn more money with low-cost fees and
            <br /> quicker payouts
          </span>
        </div>
        <div className='drop-shadow-custom flex h-[39px] w-full bg-secondary max-sm:h-auto'>
          <div className=' relative top-[40px] flex w-full justify-evenly gap-10 max-sm:top-0 max-sm:flex-col max-sm:p-5'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='drop-shadow-custom flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={MoneyIcon} alt='analytics_icon' className='h-[30px] w-[30px]' />
              </div>
              <span className='text-lg font-bold text-primary  max-sm:text-white'>
                Low Cost fees
              </span>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='drop-shadow-custom flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={CardIcon} alt='analytics_icon' className='h-[30px] w-[30px]' />
              </div>
              <span className='text-lg font-bold text-primary   max-sm:text-white'>
                Payment Processing fee
              </span>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='drop-shadow-custom flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-[#DEF0FF]'>
                <Image src={WalletIcon} alt='analytics_icon' className='h-[30px] w-[30px]' />
              </div>
              <span className='text-lg font-bold text-primary max-sm:text-white'>
                Schedule Payouts
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
