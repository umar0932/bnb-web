import { graphql } from '@/core/lib/react-query-graphql'
import { useGraphQLMutationProtected } from '../helpers'
import { useToast } from '@/core/ui/use-toast'

const document = graphql(`
  mutation updateCustomerPassword($input: String!) {
    updateCustomerPassword(password: $input) {
      success
      message
    }
  }
`)

const updatePasswordMutationKey = ["updateCustomerPassword"]
export const useUpdatePasswordMutation = () => {
    const {toast} = useToast()
    return useGraphQLMutationProtected({
    mutationKey:updatePasswordMutationKey,
    onError() {
        toast({
            title: "Password Update Failed",
            description: "Your password update failed. Please try again later",
            variant:"destructive"
        })
    },
    onSuccess() {
        toast({
            title: "Password Updated",
            description: "Your password has been updated successfully",
            variant:"default"
        })
    },
  },document)
}
