import useCustomerDataQuery from '@/api/AccountSettings/useCustomerDataQuery'
import useUpdateCustomerMutation from '@/api/AccountSettings/useUpdateCustomerMutation'
import useProtectedS3UploadHandler from '@/api/S3Bucket/useProtectedS3UploadHandler'
import { Skeleton } from '@/core/ui/skeleton'
import Image from 'next/image'
import React from 'react'

const ProfilePicture = () => {
  const { data, status:gettingDataStatus } = useCustomerDataQuery()
  const {mutate:s3UploadHandler, status:mutatingUploadStatus} = useProtectedS3UploadHandler()
  const { mutate:updateCustomerHandler, status:mutatingDataStatus } = useUpdateCustomerMutation()  

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    if (!event.target.files?.length) {
      return
    }
    if (event.target.files[0]) {
      s3UploadHandler({fileToUpload: event.target.files[0]}, {
        onSuccess: (data) => {
          console.log(data)
          updateCustomerHandler({
            input: {
              mediaUrl: data,
            }
          })
        }
      })
    }
  }
  if (mutatingUploadStatus === "pending" || mutatingDataStatus === 'pending' || gettingDataStatus === 'pending') {
    return <Skeleton className='mt-5 h-[190px] w-[190px]' />
  }
  return (
    <div className='mt-5 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-lg bg-[#EFF8FF] p-5'>
      <label
        htmlFor='picture'
        className='flex h-[100px] w-[100px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white'
      >
        {data?.getCustomerData.mediaUrl ? (
          <Image
            src={data?.getCustomerData.mediaUrl}
            alt='profile_image'
            className='cursor-pointer rounded-full object-cover'
            width={100}
            height={100}
          />
        ) : (
          <Image
            src={'/assets/plus_icon.svg'}
            width={23}
            height={23}
            alt='plus_icon'
            className='cursor-pointer'
          />
        )}

        <input
          type='file'
          id='picture'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </label>
      {data?.getCustomerData.mediaUrl ? (
        <span className='mt-5 text-center text-sm'>Click to Change Image</span>
      ) : (
        <span className='mt-5 text-center text-sm'>Upload Profile Picture</span>
      )}
    </div>
  )
}

export default ProfilePicture
