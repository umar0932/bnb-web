import { graphql } from '@/core/lib/react-query-graphql'
import { useGraphQLQueryProtected } from '../helpers'

const GetCustomerDataQueryDocument = graphql(`
  query getCustomerData {
    getCustomerData {
      email
      id
      firstName
      lastName
      jobTitle
      isActive
      secondAddress
      password
      state
      website
      zipCode
      cellPhone
      city
      companyName
      country
      firstAddress
      homePhone
    }
  }
`)

export const CustomerDataQueryKey = ['customer-data']
const useCustomerDataQuery = () =>
  useGraphQLQueryProtected(
    {
      queryKey: CustomerDataQueryKey
    },
    GetCustomerDataQueryDocument
  )

export type useCustomerDataQueryDataType = ReturnType<typeof useCustomerDataQuery>['data']
export default useCustomerDataQuery
