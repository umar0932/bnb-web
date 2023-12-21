import { graphql } from '@/core/lib/react-query-graphql'
import { useGraphQLQueryProtected } from '../helpers'

const GetCustomerDataQueryDocument = graphql(`
  query getCustomerData {
    getCustomerData {
      email
      id
      firstName
      lastName
      JobTitle
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

const queryKey = ['customer-data']
const useCustomerDataQuery = () =>
  useGraphQLQueryProtected(
    {
      queryKey
    },
    GetCustomerDataQueryDocument
  )



export type useCustomerDataQueryDataType = ReturnType<typeof useCustomerDataQuery>['data']
export default useCustomerDataQuery
