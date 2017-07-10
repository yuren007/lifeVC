<template>
  <div>
    <router-view></router-view>
    <footer class="tab">
      <div>
        <ul id="footerMenuNav">
          <li>
            <router-link to="/homepage">
              <div class="ico home-ico"></div>
              <span class="li-span">首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/all">
              <div class="ico type-ico"></div>
              <span class="li-span">全部产品</span>
            </router-link>
          </li>
          <li>
            <router-link to="/stroll">
              <div class="ico stroll-ico"></div>
              <span class="li-span">闲逛</span>
            </router-link>
          </li>
          <li>
            <router-link to="/cart">
              <div class="ico shopping-cart-ico"></div>
              <span class="lis-pan">购物车</span>
            </router-link>
          </li>
          <li>
            <router-link to="/userCenter">
              <div class="ico account-center-ico"></div>
              <span class="lis-pan">个人中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position fixed
    bottom 0
    z-index 999
    #footerMenuNav
      margin: 0
      padding: 0
      background: #f8f8f8
      text-align: center
      li
        width: 20%
        float: left
        margin: 0 auto
        position: relative
      .ico
        width: 100%
        height: 3.3rem
        background-position: 50%
        background-repeat: no-repeat
        background-size: 28%
        margin-bottom: .2rem

      a.selected
        color: #009c42
      li
        a
          margin-top: 0;
          display: block;
          color: #ababab;
          line-height: .1rem;
          font-size: 1.1rem;
          vertical-align: bottom;
          text-align: center;
          text-decoration: none;
      /*下面footer图标*/
      .home-ico
        background-image: url("../static/img/homePage.png")
      .type-ico
        background-image: url("../static/img/all.png")
      .stroll-ico
        background-image: url("../static/img/stroll.png")
      .shopping-cart-ico
        background-image: url("../static/img/cart.png")
      .account-center-ico
        background-image: url("../static/img/userCenter.png")
      .type-ico
        width: 100%
        height: 3.3rem
        background-position: 50%
        background-repeat: no-repeat
        background-size: 28%
        margin-bottom: .2rem
</style>
