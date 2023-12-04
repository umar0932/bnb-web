import Link from 'next/link'

export default function Copyright() {
  return (
    <div className='flex w-full justify-between  bg-primary px-8 pb-3 pt-3 font-light'>
      <div>
        <span className='text-btnsecondary'>&copy; Bnb Copyright 2023</span>
      </div>
      <div className='flex gap-6 text-btnsecondary max-sm:gap-2'>
        <Link href='/' className=' cursor-pointer font-normal'>
          Help
        </Link>
        <Link href='/' className='cursor-pointer font-normal'>
          Privacy
        </Link>
        <Link href='/' className='cursor-pointer font-normal'>
          Terms
        </Link>
      </div>
    </div>
  )
}
