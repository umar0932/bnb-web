import Link from 'next/link'

import { Button } from '@/core/ui/button'

const ContactUs = () => {
  return (
    <div className='h-50 flex w-full flex-col items-center justify-center gap-5 bg-[#F2F9FF] p-10'>
      <span className='mt-3 text-center text-5xl font-bold text-primary max-sm:text-4xl'>
        Still have questions?
      </span>
      <Link href='/contact-sales'>
        <Button className='mb-4 mt-4 w-[230px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary'>
          Contact us
        </Button>
      </Link>
    </div>
  )
}

export default ContactUs
