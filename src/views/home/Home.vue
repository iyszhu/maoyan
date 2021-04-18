<template>
  <div class="home-warp">
    <header>狗眼电影</header>
    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
    <nav class="tabBar">
      <van-tabbar v-model="active" active-color="#cd4c42" inactive-color="#666" route>
        <van-tabbar-item badge="3" to="/home/movies/hot">
          <span>电影</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="movie" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/theaters">
          <span>影院</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="theaters" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/profile">
          <span>我的</span>
          <template #icon="props">
            <van-icon class-prefix="iconfont-nav" name="profile" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.home-warp
  position relative
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
    z-index 999


</style>

<script>
import Vue from 'vue'
import { Button, Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)

export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<!--<style lang="stylus">-->
<!--html-->
<!--  font-size 100px !important-->
<!--</style>-->
