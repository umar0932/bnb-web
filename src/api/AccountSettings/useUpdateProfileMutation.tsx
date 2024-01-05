import { graphql } from '@/__generated__'
import { useGraphQLMutationProtected } from '../helpers'
import { useQueryClient } from '@tanstack/react-query'
import { CustomerDataQueryKey, type useCustomerDataQueryDataType } from './useCustomerDataQuery'

const document = graphql(`
  mutation saveCustomerMediaUrl($input: String!) {
    saveCustomerMediaUrl(fileName: $input)
  }
`)
const mutationKey = ['updateCustomerMediaURL']
const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()
  return useGraphQLMutationProtected(
    {
      mutationKey,
      onSuccess: (_, variables) => {
        queryClient.setQueryData<useCustomerDataQueryDataType>(CustomerDataQueryKey, prev => {
          if (!prev) return prev
          return {
            ...prev,
            getCustomerData: {
              ...prev?.getCustomerData,
              mediaUrl: variables[0]?.input
            }
          }
        })
      }
    },
    document
  )
}
export default useUpdateProfileMutation
