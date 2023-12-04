import { graphql, useGraphQLMutation } from '@/core/lib/react-query-graphql'
import { useToast } from '@/core/ui/use-toast'
import { mutateSession } from './mutateSession'

const CreateCustomerMutationDocument = graphql(`
  #graphql
  mutation CreateCustomer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createCustomer(
      createCustomerInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      access_token
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`)

export function useCreateAccountMutation() {
  const { toast } = useToast()
  return useGraphQLMutation(
    {
      async onSuccess(data) {
        return mutateSession({
          accessToken: data.createCustomer.access_token,
          shouldBroadcast: true
        })
      },
      onError(error) {
        const firstError = error.response.errors?.find(e => e.message)
        if (!firstError) return
        toast({
          title: firstError.message,
          variant: 'destructive'
        })
      }
    },
    CreateCustomerMutationDocument
  )
}
