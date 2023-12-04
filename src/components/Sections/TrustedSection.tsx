import Image from 'next/image'
import CompanyImage1 from '../../../public/assets/trusted-company1.png'
import CompanyImage2 from '../../../public/assets/trusted-company2.png'
import CompanyImage3 from '../../../public/assets/trusted-company3.png'
import CompanyImage4 from '../../../public/assets/trusted-company4.png'
import CompanyImage5 from '../../../public/assets/trusted-company5.png'
import CompanyImage6 from '../../../public/assets/trusted-company6.png'
import CompanyImage7 from '../../../public/assets/trusted-company7.png'
import CompanyImage8 from '../../../public/assets/trusted-company8.png'

export default function TrustedSection() {
  return (
    <>
      <div className='flex w-full flex-wrap justify-between gap-6 max-sm:justify-center'>
        <Image src={CompanyImage1} alt='company-logo' className='h-[150px] w-[150px] rounded-3xl' />
        <Image src={CompanyImage2} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage3} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage4} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage5} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage6} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage7} alt='company-logo' className='h-[150px] w-[150px]' />
        <Image src={CompanyImage8} alt='company-logo' className='h-[150px] w-[150px]' />
      </div>
    </>
  )
}
