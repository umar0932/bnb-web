/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Admin = {
  __typename?: 'Admin'
  email: Scalars['String']['output']
  firstName: Scalars['String']['output']
  idAdminUser: Scalars['ID']['output']
  isActive?: Maybe<Scalars['Boolean']['output']>
  lastName: Scalars['String']['output']
  password: Scalars['String']['output']
}

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse'
  access_token: Scalars['String']['output']
  user: Admin
}

export type CreateAdminUserInput = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type CreateCustomerInput = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type Customer = {
  __typename?: 'Customer'
  JobTitle?: Maybe<Scalars['String']['output']>
  cellPhone?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  companyName?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  firstAddress?: Maybe<Scalars['String']['output']>
  firstName: Scalars['String']['output']
  homePhone?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  isActive?: Maybe<Scalars['Boolean']['output']>
  lastName: Scalars['String']['output']
  password: Scalars['String']['output']
  secondAddress?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  website?: Maybe<Scalars['String']['output']>
  zipCode?: Maybe<Scalars['String']['output']>
}

export type CustomerLoginResponse = {
  __typename?: 'CustomerLoginResponse'
  access_token: Scalars['String']['output']
  user: Customer
}

export type LoginAdminInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginCustomerInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create new admin user */
  createAdminUser: SuccessResponse
  /** This will signup new `Customers */
  createCustomer: CustomerLoginResponse
  /** Admin Login */
  loginAsAdmin: AdminLoginResponse
  /** Customer Login */
  loginAsCustomer: CustomerLoginResponse
}

export type MutationCreateAdminUserArgs = {
  createAdminInput: CreateAdminUserInput
}

export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput
}

export type MutationLoginAsAdminArgs = {
  loginAdminInput: LoginAdminInput
}

export type MutationLoginAsCustomerArgs = {
  loginCustomerInput: LoginCustomerInput
}

export type Query = {
  __typename?: 'Query'
  /** The List of Customers */
  getCustomers: Array<Customer>
  index: Scalars['String']['output']
}

export type SuccessResponse = {
  __typename?: 'SuccessResponse'
  message?: Maybe<Scalars['String']['output']>
  success?: Maybe<Scalars['Boolean']['output']>
}

export type CreateCustomerMutationVariables = Exact<{
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type CreateCustomerMutation = {
  __typename?: 'Mutation'
  createCustomer: {
    __typename?: 'CustomerLoginResponse'
    access_token: string
    user: {
      __typename?: 'Customer'
      id: string
      email: string
      firstName: string
      lastName: string
    }
  }
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  loginAsCustomer: {
    __typename?: 'CustomerLoginResponse'
    access_token: string
    user: {
      __typename?: 'Customer'
      id: string
      email: string
      firstName: string
      lastName: string
    }
  }
}

export const CreateCustomerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createCustomerInput' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'firstName' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'lastName' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'access_token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'loginAsCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginCustomerInput' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'access_token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
