import StaticImage from 'next/image'
import Link from 'next/link'

import Footer from '@/components/Footer/Footer'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/core/ui/dialog'

import LoginImage from '../../public/assets/login_page.png'
import { Facebook } from 'lucide-react'
import { Mail } from 'lucide-react'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useFormik } from 'formik'
import { Button } from '@/core/ui/button'
export default function Login() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
    }
  })
  return (
    <>
      <div className='flex h-screen w-full justify-center'>
        <div className='hidden w-1/2 md:block'>
          <StaticImage src={LoginImage} alt='Logo' className='h-full w-full object-cover' />
        </div>
        <div className='flex w-full flex-col justify-between md:w-1/2'>
          <div className=' mr-4 flex flex-shrink-0 justify-end'>
            <div className='m-2 rounded-lg bg-[#d3d3d3] p-3 text-center'>
              <span>Logo</span>
            </div>
          </div>
          <div
            className='div-drop-shadow relative right-20 mt-[auto] flex max-h-[550px] flex-shrink rounded-t-[30px]
            bg-[#EFF8FF] max-lg:right-0 max-lg:w-full max-lg:justify-center'
          >
            <div className='m-10 w-full '>
              <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 md:gap-8'>
                <input
                  className='field-drop-shadow h-[45px] rounded-lg p-5 outline-none'
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <input
                  className='field-drop-shadow h-[45px] rounded-lg p-5 outline-none'
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <Link href='/'>
                  <Button
                    type='submit'
                    className='h-[45px] w-full rounded-lg bg-btnprimary text-white hover:bg-btnsecondary'
                  >
                    Login
                  </Button>
                </Link>
                <button
                  className=' field-drop-shadow h-[45px] rounded-lg bg-white '
                  onClick={() => {
                    setIsDialogOpen(true)
                  }}
                >
                  Email me a login link
                </button>
                <button
                  type='submit'
                  className='field-drop-shadow flex h-[45px] items-center justify-center gap-3 rounded-lg bg-white'
                >
                  <FcGoogle size={25} /> Sign up with Google
                </button>
                <p className='text-center text-btnprimary'>Other sign up methods</p>
                <div className='flex justify-center gap-5'>
                  <button className=' field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white'>
                    <Facebook size={25} fill='#3B5998' stroke='none' />
                  </button>
                  <button className=' field-drop-shadow flex h-[54px] w-[54px] items-center justify-center  rounded-full bg-white'>
                    <AiFillApple size={25} fill='black' stroke='none' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='absolute mt-9 text-center max-md:mt-10 max-md:py-10'>
          <span className='text-4xl font-bold text-primary md:text-6xl md:text-white'>
            Lo<span className='text-primary'>gin</span>
          </span>
        </div>
      </div>

      <Footer />
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
        <DialogContent>
          <DialogHeader className='flex items-center justify-center gap-5'>
            <Mail size={40} stroke='red' />
            <DialogTitle className='text-2xl font-bold text-primary'>
              Where should we send your login link?
            </DialogTitle>
            <input
              className=' shadow-tertiary-500 h-[45px] w-full rounded-lg bg-[#EFF8FF] p-5 shadow-sm outline-none'
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className='flex justify-center gap-5'>
              <button
                onClick={() => setIsDialogOpen(false)}
                className='shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-[#DEF0FF] font-bold text-primary shadow-sm'
              >
                Back to login
              </button>
              <button className='shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-btnprimary text-white shadow-sm hover:bg-btnsecondary'>
                Send login link
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
