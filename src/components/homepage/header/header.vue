<template>
  <div>
    <mt-tab-container class="tab-contain" v-model="active">
      <mt-tab-container-item id="1">
        <mt-swipe :auto="0" class="swipItem">
          <mt-swipe-item>
            <img src="./swip_one.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_two.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./swip_three.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="item-combo">
          <div class="img-wrap">
            <img src="./combImg.jpg" alt="">
          </div>
        </div>
        <div class="item-combo">
          <div class="img-wrap">
            <img src="./planetMap.jpg" alt="" style="height: 150px;">
          </div>
        </div>
        <div class="item-combo">
          <div class="img-wrap">
            <img src="./planetMap2.jpg" alt="" style="width: 100%; height: 925px;">
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    TabContainer,
    TabContainerItem,
    Cell,
    Swipe,
    SwipeItem
  } from 'mint-ui'
  export default {
    props: ['active'],
    /*data () {
      return {
        images: ['one', 'two', 'three', 'fou', 'five', 'six', 'seven', 'eight']
      }
    },*/
    created () {
        this.images = ['one', 'two', 'three', 'fou', 'five', 'six', 'seven', 'eight']
    },
    components: {
      'mt-tab-container-item': TabContainerItem,
      'mt-cell': Cell,
      'mt-tab-container': TabContainer,
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab-contain
    .swipItem
      height: 250px
      .mint-swipe-indicator
        background #ffffff
        opacity 1
      .mint-swipe-indicator.is-active
        background #80b532
        opacity 1
    /*item-combo*/
    .item-combo
      margin-bottom: 1rem;
      .img-wrap
        background #eee
        img
          vertical-align middle
          height 90px
          width 100%
</style>
