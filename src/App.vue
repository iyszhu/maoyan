<template>
  <transition
      :enter-active-class="`animate__animated ${enter}`"
      :leave-active-class="`animate__animated ${leave}`"
  >
    <router-view />
  </transition>
</template>
<script>
import Vue from 'vue'
import { Button, Tabbar, TabbarItem } from 'vant'
Vue.use(Button)
export default {
  data() {
    return {
      enter: 'animate__slideInLeft',
      leave: 'animate__slideOutRight'
    }
  },
  watch: {
    $route(to, from) {
      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      if (fromIndex === undefined) {
        this.enter = ''
        this.leave = ''
        return
      }
      if (toIndex > fromIndex) {
        this.enter = 'animate__slideInLeft'
        this.leave = 'animate__slideOutRight'
      } else {
        this.enter = 'animate__slideInRight'
        this.leave = 'animate__slideOutLeft'
      }
    }
  }
}
</script>
