import useAuthSessionContext from '../Authentication/context/AuthSessionContext'
import getCustomerUploadURL from '@/api/S3Bucket/getCustomerUploadURL'

const useProtectedS3UploadHandler = () => {
  const { data, status } = useAuthSessionContext()
  const handleUploadingFile = async (files: FileList) => {
    const fileToUpload = files[0]
    if (!fileToUpload) {
      throw new Error('No file is provided')
    }
    if (!data?.accessToken) {
      throw new Error('User is not signed in')
    }
    try {
      const {
        getCustomerUploadUrl: { fileName, signedUrl }
      } = await getCustomerUploadURL(data.accessToken)
      await fetch(signedUrl, {
        method: 'PUT',
        body: fileToUpload
      })
      return fileName
    }catch(e) {
      console.log(e)
      throw new Error("Something went wrong")
    }

  }
  return {
    initalLoading: status === 'loading',
    handleUploadingFile
  }
}

export default useProtectedS3UploadHandler
