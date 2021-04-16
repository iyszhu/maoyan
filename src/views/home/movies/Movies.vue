<template>
  <main>
    <nav class="movie-nav">
      <ul>
        <li @click="handleCity">
          <span>广州</span>
          <b class="yo-ico">&#xf033</b>
        </li>
        <li>
          <router-link tag="span" active-class="active" to="/home/movies/hot">热映</router-link>
          <router-link tag="span" active-class="active" to="/home/movies/comingSoon">待映</router-link>
        </li>
        <li class="movie-ico">
          <b>&#xe8b9;</b>
        </li>
      </ul>
    </nav>
    <router-view :movie-list="movieList"></router-view>
  </main>
</template>

<script>
export default {
  name: "inTheaters",
  data() {
    return {
      movieList: []
    }
  },
  async mounted() {
    let res = await this.$request.get({
      url: '/movie/v2/list/hot.json',
      params: {
        limit: 10,
        offset: 0,
        ct: '北京'
      }
    })
    this.movieList = res.data.hot
  },
  methods: {
    handleCity() {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
main
  flex 1
  overflow hidden
  display flex
  flex-direction column
  .movie_list
    flex 1
    overflow-y scroll
  .movie-nav
    > ul
      border-bottom solid 1px #CCC
      border1px(0 0 1px 0)
      display flex
      height .44rem
      li:first-child
        flex 100
        display flex
        justify-content flex-start
        align-items center
        padding-left .15rem
        color #666
      li:nth-child(2)
        flex 231
        display flex
        justify-content center
        align-items center
        span
          display inline-block
          height: .44rem
          line-height: .44rem
          color #666
          width .6rem
          text-align center
          &.active
            color #cd4c42
            border-bottom solid 2px #cd4c42
          &:first-child
            margin-right .3rem
            margin-left -.35rem
      li:last-child
        flex 44
        width: .44rem
        border-left solid 1px #EEE
        border1px(0 0 0 1px)
        text-align center
        font-size 0.2rem
        font-weight normal
        line-height .44rem
        color #cd4c42
</style>
