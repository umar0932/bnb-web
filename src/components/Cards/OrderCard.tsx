import Image from 'next/image'
import OrderImage from '../../../public/assets/order_image.png'
export default function OrderCard() {
  return (
    <>
      <div className='flex w-full bg-white p-5 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
        <div>
          <Image src={OrderImage} alt='order_image' className='h-[220px] w-[220px]' />
        </div>
        <div className='flex flex-col gap-5 p-5 max-sm:mt-2 max-sm:p-0'>
          <span className='text-xl text-[#003A6D]'>
            Danica HairStylist: <span className='text-xl font-bold text-primary'>Haircut</span>
          </span>
          <div className='flex flex-col'>
            <span className='text-[#323232]'>Thu, Jun 22, 7:00 PM USA</span>
            <span className='text-[#323232]'>Order #6959644679 placed on Today </span>
            <span className='text-[#323232]'>at 11:22 PM</span>
          </div>
          <span className='font-bold text-[#F00]'>$45</span>
        </div>
      </div>
    </>
  )
}
