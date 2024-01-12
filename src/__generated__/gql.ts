/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getCustomerData {\n    getCustomerData {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n": types.GetCustomerDataDocument,
    "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n": types.UpdateCustomerMutationDocument,
    "\n  mutation updateCustomerEmail($email: String!) {\n    updateCustomerEmail(input: $email) {\n      accessToken\n      user {\n        email\n      }\n    }\n  }\n": types.UpdateCustomerEmailDocument,
    "\n  mutation saveCustomerMediaUrl($input: String!) {\n    saveCustomerMediaUrl(fileName: $input)\n  }\n": types.SaveCustomerMediaUrlDocument,
    "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.CreateCustomerDocument,
    "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n": types.ContinueWithSocialSiteDocument,
    "\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n": types.GetCustomerSignedUrlDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerData {\n    getCustomerData {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n"): (typeof documents)["\n  query getCustomerData {\n    getCustomerData {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerMutation($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      id\n      firstName\n      lastName\n      companyName\n      email\n      homePhone\n      cellPhone\n      website\n      firstAddress\n      secondAddress\n      city\n      state\n      zipCode\n      country\n      jobTitle\n      isActive\n      mediaUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCustomerEmail($email: String!) {\n    updateCustomerEmail(input: $email) {\n      accessToken\n      user {\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomerEmail($email: String!) {\n    updateCustomerEmail(input: $email) {\n      accessToken\n      user {\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation saveCustomerMediaUrl($input: String!) {\n    saveCustomerMediaUrl(fileName: $input)\n  }\n"): (typeof documents)["\n  mutation saveCustomerMediaUrl($input: String!) {\n    saveCustomerMediaUrl(fileName: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateCustomer(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    createCustomer(\n      input: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }\n    ) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation Login($email: String!, $password: String!) {\n    loginAsCustomer(input: { email: $email, password: $password }) {\n      accessToken\n      user {\n        id\n        email\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation continueWithSocialSite($input: RegisterOrLoginSocialInput!) {\n    continueWithSocialSite(input: $input) {\n      user {\n        id\n        email\n      }\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n"): (typeof documents)["\n  query getCustomerSignedURL {\n    getCustomerUploadUrl {\n      fileName\n      signedUrl\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;