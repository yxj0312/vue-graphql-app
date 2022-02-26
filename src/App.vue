<template>
  <div>
    <input type="search" v-model="searchTerm" />
    <p v-for="book in result.allBooks" :key="book.id">
      {{ book.title }}
    </p>
  </div>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { ref } from "vue";
import ALL_BOOKS_QUERY from "./graphql/allBooks.query.gql";

export default {
  name: "App",
  setup() {
    const searchTerm = ref("");
    const { result } = useQuery(ALL_BOOKS_QUERY, () => ({
      search: searchTerm.value,
    }));

    console.log(result);
    return { result, searchTerm };
  },
};
</script>

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
