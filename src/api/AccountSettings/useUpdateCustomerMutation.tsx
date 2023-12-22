import { graphql } from '@/core/lib/react-query-graphql'
import { useGraphQLMutationProtected } from '../helpers'
import { CustomerDataQueryKey, type useCustomerDataQueryDataType } from './useCustomerDataQuery'
import { useQueryClient } from '@tanstack/react-query'
import { useToast } from '@/core/ui/use-toast'

const mutationKey = ['updateCustomerMutation']

const Document = graphql(`
    mutation updateCustomerMutation($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
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
        }
    }
`)

const useUpdateCustomerMutation = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useGraphQLMutationProtected(
    {
      mutationKey,
      onMutate([variables]) {
        const previousValue =
          queryClient.getQueryData<useCustomerDataQueryDataType>(CustomerDataQueryKey)
        queryClient.setQueryData<useCustomerDataQueryDataType>(CustomerDataQueryKey, prev => {
          if (!prev) return prev
          return {
            ...prev,
            getCustomerData: {
              ...prev.getCustomerData,
              ...variables
            }
          }
        })
        return previousValue
      },
      onError(error, variables, context) {
        queryClient.setQueryData<useCustomerDataQueryDataType>(CustomerDataQueryKey, context)
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive'
        })
      }
    },
    Document
  )
}

export default useUpdateCustomerMutation
