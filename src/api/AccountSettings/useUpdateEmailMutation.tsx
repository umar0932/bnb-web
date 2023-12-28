import { useQueryClient } from '@tanstack/react-query'
import { useGraphQLMutationProtected } from '../helpers'
import { graphql } from '@/core/lib/react-query-graphql'
import { type useCustomerDataQueryDataType } from './useCustomerDataQuery'
import { useToast } from '@/core/ui/use-toast'

const Document = graphql(`
  mutation updateCustomerEmail($email: String!) {
    updateCustomerEmail(input: $email) {
      access_token
      user {
        email
      }
    }
  }
`)

const useUpdateEmailMutation = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  return useGraphQLMutationProtected(
    {
      mutationKey: ['updateEmailMutation'],
      onMutate: ([variables]) => {
        const previousData = queryClient.getQueryData<useCustomerDataQueryDataType>([
          'customer-data'
        ])
        queryClient.setQueryData<useCustomerDataQueryDataType>(['customer-data'], prev => {
          if (!prev) return prev
          return {
            ...prev,
            getCustomerData: {
              ...prev.getCustomerData,
              email: variables?.email
            }
          }
        })
        return previousData
      },
      onError(error, variables, context) {
        const ErrorMessage = error.response.errors?.pop()?.message
        toast({
          title: 'Error',
          description: ErrorMessage,
          variant: 'destructive'
        })
        queryClient.setQueryData<useCustomerDataQueryDataType>(['customer-data'], () => context)
      }
    },
    Document
  )
}

export default useUpdateEmailMutation
