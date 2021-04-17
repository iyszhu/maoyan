<template>
  <ul>
    <li v-for="ml in movieList">
      <div>
        <img :src="ml.img | wh('192.270')" :alt="ml.nm">
<!--        <img src="http://placehold.it/64x90" alt="">-->
      </div>
      <div>
        <h2>{{ ml.nm }}<MovieVersion v-if="ml.ver" :ver="ml.ver" /> </h2>
        <p>{{ ml.cat }}</p>
        <p>{{ ml.desc }}</p>
        <div>{{ ml.showInfo }}</div>
      </div>
      <MovieButton :ml="ml" />
    </li>
  </ul>

</template>

<script>
import MovieButton from "@/components/MovieButton";
import MovieVersion from "@/components/MovieVersion";
export default {
  name: "MovieList",
  props: {
    movieList: {
      type: Array,
      require: true
    }
  },
  components: {
    MovieVersion,
    MovieButton
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/border.styl"
@import "~@/assets/stylus/ellipsis.styl"
ul
  padding-left .12rem
  li
    height 1.14rem
    display flex
    padding: .12rem .12rem .12rem 0
    border1px(0 0 1px 0)
    text-align left
    > div:first-child
      width .76rem
      img
        width .64rem
        height: .9rem
    > div:nth-child(2)
      flex 1
      h2
        display flex
        align-items center
        font-size .16rem
        font-weight: 400
        ellipsis()
      > p
        line-height: .22rem
        color #666
        ellipsis()
      div
        line-height: .22rem
        color #999
        ellipsis()
    &:last-child
      border1px(0)
</style>
