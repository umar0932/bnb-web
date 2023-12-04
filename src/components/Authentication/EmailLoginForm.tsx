import useImperativeComponent from '@/core/hooks/useImperativeComponent'
import { Button } from '@/core/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/core/ui/dialog'
import { Mail } from 'lucide-react'
import React from 'react'

const EmailLoginForm = () => {
  const { componentNode, openComponent } = useImperativeComponent((isOpen, close) => (
    <Dialog open={isOpen} onOpenChange={() => close(false)}>
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
          />
          <div className='flex justify-center gap-5'>
            <button
              onClick={() => close(false)}
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
  ))
  return (
    <>
      {componentNode}
      <Button variant={'outline'} onClick={() => void openComponent()}>
        {'Email me a login link'}
      </Button>
    </>
  )
}

export default EmailLoginForm
