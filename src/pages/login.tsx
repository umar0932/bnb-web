import FacebookOAuthButton from '@/components/Authentication/FacebookOAuthButton'
import GoogleOAuthButton from '@/components/Authentication/GoogleOAuthButton'
import AuthLayout from '@/components/Authentication/layouts/AuthLayout'
import CardLayout from '@/components/Authentication/layouts/CardLayout'
import LoginForm from '@/components/Authentication/LoginForm'
import { Button } from '@/core/ui/button'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import { AiFillApple } from 'react-icons/ai'

export default function Login() {
  return (
    <AuthLayout
      Title={
        <>
          Lo<span className='text-primary'>gin</span>
        </>
      }
      imagePath='/assets/login_page.png'
    >
      <CardLayout>
        <div className='space-y-8'>
          <LoginForm />
          <GoogleOAuthButton />
          <div>
            <Link
              href='/signup'
              className='flex cursor-pointer justify-end font-normal text-secondary underline'
            >
              {'Signup'}
            </Link>
          </div>
        </div>

        <p className='text-center text-btnprimary'>Other sign up methods</p>
        <div className='flex justify-center gap-5'>
          <FacebookOAuthButton />
          <button className=' field-drop-shadow flex h-[54px] w-[54px] items-center justify-center  rounded-full bg-white'>
            <AiFillApple size={25} fill='black' stroke='none' />
          </button>
        </div>
      </CardLayout>
    </AuthLayout>
  )
}
