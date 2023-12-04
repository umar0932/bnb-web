import {
  type UseQueryOptions,
  useQuery,
  type UseMutationOptions,
  useMutation,
  type UseInfiniteQueryOptions,
  useInfiniteQuery
} from '@tanstack/react-query'
import request from 'graphql-request'
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
  type VariablesAndRequestHeadersArgs,
  type GraphQLClientRequestHeaders,
  type Variables,
  type ClientError
} from 'graphql-request/build/esm/types'
import { env } from '@/env.mjs'
import { graphql } from './gql-typed'

export function useGraphQLQuery<TResult, TVariables>(
  queryOptions: UseQueryOptions<TResult>,
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders
) {
  return useQuery({
    ...queryOptions,
    queryKey: [...queryOptions.queryKey, variables],
    queryFn: async () => {
      return await request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, variables, requestHeaders)
    }
  })
}

export function useGraphQLInfiniteQuery<TResult, TVariables>(
  queryOptions: UseInfiniteQueryOptions<TResult>,
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: Variables,
  requestHeaders?: GraphQLClientRequestHeaders
) {
  return useInfiniteQuery({
    ...queryOptions,
    queryKey: [...queryOptions.queryKey, variables],
    queryFn: async () => {
      return await request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, variables, requestHeaders)
    }
  })
}

export function useGraphQLMutation<TResult, TVariables extends Variables>(
  mutationOptions: UseMutationOptions<
    TResult,
    ClientError,
    VariablesAndRequestHeadersArgs<TVariables>
  >,
  document: TypedDocumentNode<TResult, TVariables>
) {
  return useMutation({
    ...mutationOptions,
    mutationFn: async variables => {
      return await request(env.NEXT_PUBLIC_SERVER_GRAPHQL_URL, document, ...variables)
    }
  })
}

export { graphql }
