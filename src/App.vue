<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const ALL_BOOKS_QUERY = gql`
  query AllBooks {
    allBooks {
      id
      title
      rating
    }
  }
`
export default {
  name: 'App',
  setup() {
    const { result } = useQuery(ALL_BOOKS_QUERY)
    
    console.log(result)
    return { result }
  },
}
</script>

<template>
 <div></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
