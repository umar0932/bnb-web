import { graphql } from '@/__generated__'
import { requestGraphQl } from '@/core/lib/react-query-graphql'

const document = graphql(`
  query getCustomerSignedURL {
    getCustomerUploadUrl {
      fileName
      signedUrl
    }
  }
`)

const getCustomerUploadURL = (accessToken: string) => {
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${accessToken}`
  })
  return requestGraphQl(document, [{}, authourizationHeaders])
}

export default getCustomerUploadURL
