
const config = {
  schema: 'http://localhost:4000/graphql',
  documents: ["./src/**/*.{ts,tsx}"],
  generates: {
    './src/core/lib/graphql/gql-typed/': {
      preset: 'client'
    }
  }
}
 
export default config