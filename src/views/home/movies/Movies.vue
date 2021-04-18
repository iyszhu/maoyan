<template>
  <div class="movie-container">
    <main>
      <nav class="movie-nav">
        <ul>
          <li @click="handleCity">
            <span>{{ city.name }}</span>
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
      <section class="movie-list">
        <van-skeleton
            class="skeleton"
            title
            avatar
            avatar-shape="square"
            avatar-size="0"
            :row="3"
            :loading="skeleton"
            v-for="i in 7"
            :key="'a'+i">
        </van-skeleton>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="false"
          >
            <transition
                enter-active-class="animate__animated animate__slideInLeft"
                leave-active-class="animate__animated animate__slideInRight"
            >
              <router-view :movie-list="movieList"></router-view>
            </transition>
          </van-list>
        </van-pull-refresh>
      </section>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import { mapState } from 'vuex'
import { List, PullRefresh, Skeleton } from 'vant';

Vue.use(List).use(PullRefresh).use(Skeleton)
export default {
  name: "inTheaters",
  data() {
    return {
      movieList: [],
      refreshing: false,
      loading: false,
      finished: false,
      skeleton: true,
      url: '/mmdb/movie/v2/list/hot.json'
    }
  },
  created() {
    this.hasMore = false
    this.limit = 10
    this.offset = 0
  },
  computed: {
    ...mapState(['city'])
  },
  async mounted() {
    await this._loadData()
    this.skeleton = false
  },
  methods: {
    handleCity() {
      this.$router.push('/city')
    },
    async _loadData() {
      let res = await this.$request.get({
        url: this.url,
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.city.name,
          ci: this.city.id
        }
      })
      let { hot, coming, paging: { hasMore } } = res.data
      this.movieList = [
          ...this.movieList,
          ...hot,
          ...coming
      ]
      this.hasMore = hasMore
    },
    async onLoad() {
      if (this.refreshing) {
        this.movieList = [];
        this.refreshing = false;
      }
      await this._loadData()
      this.loading = false;

      if (!this.hasMore) {
        this.finished = true;
      }
      this.offset+=this.limit
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.offset = 0

      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      // 重新加载数据
      this.onLoad();
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (route.name === 'comingSoon') {
          this.url='/mmdb/movie/v1/list/wish/order/coming.json'
        } else {
          this.url='/mmdb/movie/v2/list/hot.json'
        }
        this.onRefresh()
      },
      immediate: true
    }
  }
}
</script>

<!--<style lang="stylus">-->
<!--.van-list-->
<!--  position relative-->
<!--</style>-->

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.movie-container
  flex 1
  overflow hidden
  position relative
  main
    position absolute
    //top .44rem
    width: 100%
    height: 100%
    display flex
    flex-direction column
    .movie-list
      flex 1
      overflow-y scroll
      //position relative
      .skeleton
        marg-top: .2rem
      //.van-pull-refresh
      //  position absolute
      //  width 100%
      //  top 0

    .movie-nav
      position static
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
