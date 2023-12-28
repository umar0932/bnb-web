const config = {
  schema: 'http://localhost:4000/graphql',
  documents: ['./src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client'
    }
  }
}

export default config
