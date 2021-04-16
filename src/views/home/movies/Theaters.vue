<template>
  <div class="movie_list">
    <MovieList :movie-list="movieList"></MovieList>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
export default {
  name: "Theaters",
  props: {
    movieList: {
      type: Array
    }
  },
  components: {
    MovieList
  },

}
</script>

<style lang="stylus" scoped>
</style>
