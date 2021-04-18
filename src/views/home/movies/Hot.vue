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

<!--<style lang="stylus" scoped>-->
<!--.movie_list-->
<!--  width: 100%-->
<!--  position absolute-->
<!--  top 0-->
<!--</style>-->
