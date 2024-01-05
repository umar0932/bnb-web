import useCustomerDataQuery from '@/api/AccountSettings/useCustomerDataQuery'
import useUpdateProfileMutation from '@/api/AccountSettings/useUpdateProfileMutation'
import { Skeleton } from '@/core/ui/skeleton'
import { env } from '@/env.mjs'
import useProtectedS3UploadHandler from '@/lib/S3Bucket/useProtectedS3UploadHandler'
import Image from 'next/image'
import React, {useState} from 'react'

const ProfilePicture = () => {
  const { data, status } = useCustomerDataQuery()
  const { mutateAsync: persistProfileImage } = useUpdateProfileMutation()
  const { handleUploadingFile, initalLoading } = useProtectedS3UploadHandler()
 const [uploading, setUploading] = useState(false)  
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async event => {
    setUploading(true)
    if (!event.target.files?.length) {
      return;
    }
    const uploadFilename = await handleUploadingFile(event.target.files)
    await persistProfileImage({input:uploadFilename})
    setUploading(false)
  }
  if (uploading || initalLoading || status === 'pending') {
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
            src={`https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data?.getCustomerData.mediaUrl}`}
            alt='profile_image'
            className='cursor-pointer rounded-full object-cover'
            width ={100}
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
