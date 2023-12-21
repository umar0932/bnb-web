import useCustomerDataQuery from '@/api/AccountSettings/useCustomerDataQuery'
import useImperativeComponent from '@/core/hooks/useImperativeComponent'
import { Button } from '@/core/ui/button'
import { Dialog, DialogContent } from '@/core/ui/dialog'
import { Skeleton } from '@/core/ui/skeleton'
import React from 'react'
import ChangeEmailForm from './Forms/ChangeEmailForm'

const AccountEmailCard = () => {
  const { data, status } = useCustomerDataQuery()
  const { componentNode: emailFormModal, openComponent: openEmailFormModal } =
    useImperativeComponent((open, close) => {
      return (
        <Dialog open = {open} onOpenChange={close}>
          <DialogContent
            className=''
            // style={{
            //   width: '85%',
            //   height: '65%',
            //   maxWidth: '95%',
            //   maxHeight: '95%',
            //   overflowX: 'auto',
            //   overflowY: 'hidden'
            // }}
          >
            <ChangeEmailForm />
          </DialogContent>
        </Dialog>
      )
    })
  return (
    <div className='card-drop-shadow flex h-[400px] gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
      <div className='flex w-full flex-col'>
        <span className='text-4xl font-bold text-primary max-sm:text-3xl'>Change Email</span>

        <div className='mt-5 h-[1px] bg-[#BEBEBE]'> </div>
        <div className='mt-5 flex flex-col'>
          {status === 'pending' ? (
            <Skeleton className='h-8 w-[200px] rounded-md' />
          ) : (
            <span className='text-2xl'>Account Email Address</span>
          )}
          {status === 'pending' ? (
            <Skeleton className='h-7 w-[240px] rounded-md' />
          ) : (
            <span className='text-xl text-[#313131]'>{data?.getCustomerData.email}</span>
          )}
        </div>
        <Button
          className='mt-5 w-[130px] bg-btnprimary font-bold text-white hover:bg-btnsecondary'
          onClick={() => void openEmailFormModal()}
        >
          {'Change'}
        </Button>
        {emailFormModal}
      </div>
    </div>
  )
}

export default AccountEmailCard
