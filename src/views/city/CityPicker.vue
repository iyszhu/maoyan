<template>
  <section id="city-list" class="city-list-container">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="定位">定位城市</van-index-anchor>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">
          定位失败，请点击重试
        </div>
      </div>
      <div class="history-city-list">
        <van-index-anchor index="最近">最近访问城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div @click="pickCity({name: '阿拉善盟', id: 152})" class="city-item">阿拉善盟</div>
          <div @click="pickCity({name: '阿拉善盟', id: 151})" class="city-item">鞍山</div>
        </div>
      </div>
      <section>
        <van-index-anchor index="热门">热门城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" v-for="hot in cityData.hotCities" @click="pickCity(hot)">
            {{ hot.name }}
          </div>
        </div>
      </section>
      <section>
        <template v-for="(cities, key) in cityData.cities">
          <van-index-anchor :index="key">{{ key }}</van-index-anchor>
          <div class="city-list city-list-block clearfix">
            <div class="city-item" data-nm="阿拉善盟" data-id="150" v-for="ct in cities"  @click="pickCity(ct)">
              {{ ct.name }}
            </div>
          </div>
        </template>
      </section>
    </van-index-bar>
  </section>
</template>
<script>
import Vue from 'vue';
import { mapActions } from 'vuex'
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export
default {
  name:
      "CityPicker",
  data () {
    return {
      indexList: ['定位', '最近', '热门'],
      cityData: {}
    }
  },
  async mounted() {
    let res = await this.$request.get({
      url: '/cities.json'
    })
    this.cityData = res
    this.indexList = [
      ...this.indexList,
      ...Object.keys(res.cities)
    ]
  },
  methods: {
    pickCity(city) {
      this.changeCity(city)
      this.$router.back()
    },
    ...mapActions(['changeCity'])
  }
}
</script>
<style scoped>
.city-list-container {
  background-color:#ebebeb;
  font-size:14px;
  color:#333;
  top:0;
  bottom:0;
  height:100%;
  width:100%;
  position:absolute;
  z-index:1000;
  overflow-y:auto;
  -webkit-overflow-scrolling:touch
}
.clearfix:after {
  content:" ";
  display:table;
  clear:both
}
.city-title {
  padding-left:15px;
  line-height:30px
}
.city-title-letter {
  padding-left:25px
}
.city-list {
  padding-right:30px
}
.city-list-inline {
  background-color:#f5f5f5;
  padding-bottom:8px
}
.city-list-inline .city-item,.city-list-inline .location-city {
  float:left;
  background:#fff;
  width:29%;
  height:33px;
  margin-top:15px;
  margin-left:4%;
  padding:0 4px;
  border:1px solid #e6e6e6;
  border-radius:3px;
  line-height:33px;
  text-align:center;
  box-sizing:border-box;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
}
.city-list-inline .location-city {
  width:auto;
  min-width:30%;
  padding:0 20px
}
.city-list-block {
  background-color:#f5f5f5
}
.city-list-block .city-item {
  height:44px;
  line-height:44px;
  margin-left:15px;
  border-bottom:1px solid #c8c7cc
}
.city-list-block .city-item:last-child {
  border-bottom:none
}
</style>
