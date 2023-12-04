'use client'

import useImperativeComponent from '@/core/hooks/useImperativeComponent'
import { Button } from '@/core/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/core/ui/dialog'
import { Info } from 'lucide-react'
import React from 'react'

const useTermsConfirmation = () => {
  const { componentNode, openComponent } = useImperativeComponent<boolean>((isOpen, close) => (
    <Dialog open={isOpen} onOpenChange={() => close(false)}>
      <DialogContent>
        <DialogHeader className='flex items-center justify-center gap-5'>
          <Info size={40} stroke='red' />
          <DialogTitle className='text-2xl font-bold text-primary'>Terms & Conditions</DialogTitle>
          <p className='text-center text-[#757575]'>
            I accept the BnB <span className='underline'>Terms Of Service</span>,{' '}
            <span className='underline'>Community Guidelines</span> and have read the{' '}
            <span className='underline'>Privacy Policy</span>
          </p>
          <div className='flex justify-center gap-5'>
            <Button
              onClick={() => close(false)}
              className='shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-[#DEF0FF] font-bold text-primary shadow-sm'
            >
              Cancel
            </Button>

            <Button
              className='shadow-tertiary-500 flex h-[48px] w-[131px] items-center justify-center rounded-lg bg-btnprimary text-white shadow-sm hover:bg-btnsecondary'
              onClick={() => close(true)}
            >
              I Agree
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ))

  return {
    modalNode: componentNode,
    getTermsConfirmation: openComponent
  }
}

export default useTermsConfirmation
