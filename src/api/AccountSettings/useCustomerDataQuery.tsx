import { graphql } from '@/core/lib/react-query-graphql'
import { useGraphQLQueryProtected } from '../helpers'

const GetCustomerDataQueryDocument = graphql(`
  query getCustomerData {
    getCustomerData {
      id
      firstName
      lastName
      companyName
      email
      homePhone
      cellPhone
      website
      firstAddress
      secondAddress
      city
      state
      zipCode
      country
      jobTitle
      isActive
      mediaUrl
    }
  }
`)

export const CustomerDataQueryKey = ['customer-data']
const useCustomerDataQuery = () =>
  useGraphQLQueryProtected(
    {
      queryKey:CustomerDataQueryKey,
      select(data) {
        return {
          ...data,
          getCustomerData:{
            ...data.getCustomerData,
            mediaUrl: data.getCustomerData.mediaUrl ? `https://${process.env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getCustomerData.mediaUrl}` : null
          }
        }
      },    
    },
    GetCustomerDataQueryDocument
  )



export type useCustomerDataQueryDataType = ReturnType<typeof useCustomerDataQuery>['data']
export default useCustomerDataQuery
