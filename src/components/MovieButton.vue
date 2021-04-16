<template>
  <div class="container">
    <p v-if="ml.showst === 3">{{ ml.sc }}<span>分</span></p>
    <p v-else>{{ ml.wish }} <span>人喜欢</span></p>
    <div v-if="ml.showst === 3">
      购票
    </div>
    <div v-else class="pre-sale">
      预售
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieButton",
  props: {
    ml: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  display flex
  flex-direction column
  align-items flex-end
  justify-content center
  width: .6rem
  color #f3ad00
  p
    position absolute
    top 0
    font-size .18rem
    width: 1.5rem
    text-align right
    span
      font-size: .12rem
      transform scale(0.8)
  > div
    width: .46rem
    height: .28rem
    background #dd5042
    border-radius .04erm
    color #FFF
    text-align center
    line-height: .28rem
    margin-top: .2rem
    &.pre-sale
      background #3c9fe6
</style>
