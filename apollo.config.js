module.exports = {
  client: {
    service: {
      name: 'my-graphql-app',
      // URL to the GraphQL API
      url: 'http://127.0.0.1:4000/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.gql'],
  },
}