<template>
  <header id="top-bar" class="header">
    <div class="wrap-heard">
      <div class="header-Ico"></div>
      <router-link to="/all">
        <span class="head-type-img"></span>
      </router-link>
    </div>
    <div title="分类导航条" class="wrap-menuNavNewProduct">
      <div id="navPanelDiv" class="menuNavNewProductPanel">
        <mt-navbar v-model="selected" id="navUL" class="menuNavNewProduct">
          <mt-tab-item id="1" class="font-large"><span href="">首页</span></mt-tab-item>
          <mt-tab-item id="2" class="font-large"><span href="">新品</span></mt-tab-item>
          <mt-tab-item id="3" class="font-large"><span href="">家务</span></mt-tab-item>
          <mt-tab-item id="4" class="font-large"><span href="">下厨</span></mt-tab-item>
          <mt-tab-item id="5" class="font-large"><span href="">家居服</span></mt-tab-item>
          <mt-tab-item id="6" class="font-large"><span href="">生活</span></mt-tab-item>
          <mt-tab-item id="7" class="font-large"><span href="">软装</span></mt-tab-item>
          <mt-tab-item id="8" class="font-large"><span href="">床品</span></mt-tab-item>
          <mt-tab-item id="9" class="font-large"><span href="">工作和旅行</span></mt-tab-item>
          <mt-tab-item id="10" class="font-large"><span href="">了解lifeVC</span></mt-tab-item>
        </mt-navbar>
      </div>
      <home-header :active="selected"></home-header>
      <newProduct :active="selected"></newProduct>
      <headerChannel :active="selected"></headerChannel>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui'
  import header from './header/header.vue'
  import newProduct from './newProduct/newProduct.vue'
  import headerChannel from './header-channel/headerChannel.vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        selected: ''
      }
    },
    components: {
      'mt-navbar': Navbar,
      'mt-tab-item': TabItem,
      'mt-tab-container': TabContainer,
      'home-header': header,
      newProduct,
      headerChannel
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*头部*/
  header {
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
  }
    /*头部背景图标*/
  .wrap-heard {
    width: auto;
    height: 4rem;
    background: #89be48;
  }
  .header-Ico {
    display: block;
    width: 100%;
    height: 4rem;
    background: url("./bg-header.png") no-repeat;
    background-size: 50%;
    background-position: 50%;
  }
  /*头部右侧搜索图标*/
  .head-type-img {
    width: 3.666666rem;
    height: 3.666666rem;
    display: block;
    float: right;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    background: url("./searchAll.png");
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  /*导航条*/
  .wrap-menuNavNewProduct {
    position: relative;
    z-index: 1100;
    background: #fff;
  }
  #navUL {
    overflow-x: scroll;
  }
  .menuNavNewProduct, .menuNavNewProduct .font-large {
    height: 4rem;
    float: left;
    box-sizing: border-box;
  }
  .menuNavNewProduct {
    position: relative;
    z-index: 1101;
    overflow: hidden;
    line-height: 4rem;
  }
  #navPanelDiv .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #80b532;
    color: #80b532;
    margin-bottom: -3px;
  }
  .menuNavNewProduct .font-large {
    width: 80px;
    text-align: center;
    border-bottom: 2px solid #ddd;
  }
  .menuNavNewProduct .font-large span {
    font-size: 1.35rem;
  }
</style>
