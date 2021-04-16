<template>
  <div class="">
    <header>狗眼电影</header>
    <router-view></router-view>
    <nav class="tabBar">
      <ul>
        <router-link to="/home/movies" tag="li" active-class="active">
          <b class="movie-ico">&#xe8ae;</b>
          <span>电影</span>
        </router-link>
        <router-link to="/home/theaters" tag="li" active-class="active">
          <b class="movie-ico">&#xe8c0;</b>
          <span>影院</span>
        </router-link>
        <router-link to="/home/profile" tag="li" active-class="active">
          <b class="movie-ico">&#xe8bb;</b>
          <span>我的</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
div
  display flex
  flex-direction column
  height: 100%
  header
    color #FFF
    background #cd4c42
    height .44rem
    font-size .16rem
    font-weight bold
    text-align center
    line-height .44rem
    &::before
      content '\e8ae'
      font-family iconfont-nav
    &::after
      content '\e8ae'
      font-family iconfont-nav
  .tabBar
    height .44rem
    border1px(1px 0 0 0)
    ul
      display flex
      li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-top .04rem
        color #999
        b
          font-size .26rem
          font-weight normal
          line-height .2rem
        span
          font-size: .12rem;
          transform scale(0.9)
        &.active
          color #cd4c42


</style>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList'
import Movies from "@/views/home/movies/Movies";

export default {
  name: 'Home',
  components: {
    MovieList,
    Movies
  }
}
</script>

<!--<style lang="stylus">-->
<!--html-->
<!--  font-size 100px !important-->
<!--</style>-->
