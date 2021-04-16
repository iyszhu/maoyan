import Vue from 'vue'

Vue.filter('wh', (value, args) => {
  // 在这里对图片url进行字符串替换处理
  return value.replace('w.h', args)
})
