import { createApp, h, provide } from 'vue'
import { 
    ApolloClient, 
    createHttpLink, 
    InMemoryCache } 
from '@apollo/client'

import gql from 'graphql-tag'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const ALL_BOOKS_QUERY = gql`
    query Allbooks{
        allBooks{
            id
            title
            rating
        }
    }
`
// apolloClient
//     .query({
//         query: ALL_BOOKS_QUERY,
//     })
//     .then(res => {
//         console.log(res)
//     })

// createApp(App).mount('#app')

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})