import AuthLayout from '@/components/Authentication/layouts/AuthLayout'
import CardLayout from '@/components/Authentication/layouts/CardLayout'
import CreateAccountForm from '@/components/Authentication/CreateAccountForm'
import { Facebook } from 'lucide-react'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { Button } from '@/core/ui/button'
import { Input } from '@/core/ui/input'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const isCreatingAccountSection = router.query.pwd === 'true'

  return (
    <AuthLayout
      Title={
        <>
          Create a<span className='text-primary'>n account</span>
        </>
      }
    >
      <CardLayout>
        {isCreatingAccountSection ? (
          <CreateAccountForm
            initalValues={{
              confirmPassword: '',
              email: router.query.email as string,
              firstName: '',
              lastName: '',
              password: ''
            }}
          />
        ) : (
          <div className='flex w-full flex-col gap-6 md:gap-8'>
            <div className='flex w-full flex-col gap-6 md:gap-8'>
              <Input
                className='field-drop-shadow h-[45px] rounded-lg p-5 outline-none'
                id='email'
                name='email'
                type='email'
                ref={emailRef}
                placeholder='Email'
              />
              <Button
                variant={'default'}
                onClick={() => {
                  router.push({
                    pathname: '/signup',
                    query: { pwd: true, email: emailRef.current?.value }
                  })
                }}
              >
                Continue
              </Button>
            </div>
            <div className='rounded-10 flex items-center p-2 text-[#313131]'>
              <div className='flex-grow border-t-2 border-[#B2DBFE]'></div>
              <div className='rounded-lg bg-white px-2'>or</div>
              <div className='flex-grow border-t-2 border-[#B2DBFE]'></div>
            </div>
            <Button
              type='submit'
              variant={'outline'}
              className='field-drop-shadow flex items-center justify-center gap-3 rounded-lg bg-white'
            >
              <FcGoogle size={25} /> Sign up with Google
            </Button>
            <p className='text-center text-btnprimary'>Other sign up methods</p>
            <div className='flex justify-center gap-5'>
              <Button
                variant={'outline'}
                className='field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white '
              >
                <Facebook size={25} fill='#3B5998' stroke='none' />
              </Button>
              <Button
                variant={'outline'}
                className='field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full  bg-white'
              >
                <AiFillApple size={25} fill='black' stroke='none' />
              </Button>
            </div>
            <div>
              <Link
                href='/login'
                className='flex cursor-pointer justify-end font-normal text-secondary underline'
              >
                {'Login'}
              </Link>
            </div>
          </div>
        )}
      </CardLayout>
    </AuthLayout>
  )
}
