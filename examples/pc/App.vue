<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <mainFooter></mainFooter>
    <!-- <div class="mobile-toggle-wrap" @click="isMobileShow=true">
      <gc-icon
        class="mobile-toggle-wrap__icon"
        :symbol="false"
        :size="26"
        name="mobile"
        color="#628cf5"
      ></gc-icon>开启移动端预览
    </div> -->
    <mobile-frame></mobile-frame>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'
import MobileFrame from './components/mobile-frame.vue'
import router from './router'

export default {
  name: 'app',
  data () {
    return {
      isMobileShow: false,
      currentName: null,
    }
  },
  
  created() {
  },
  mounted () {
    if ('onhashchange' in window) {
      window.onhashchange = function (ev) {
        let name = window.location.hash.substring(2)
        router.push({ name })
      }
    }
  },
  components: {
    mainHeader,
    sideNav,
    mainFooter,
    MobileFrame
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';

.container {
  margin: 48px auto;
  background-color: #fff;
  .nav {
    float: left;
    width: 300px;
  }
  .view {
    float: left;
    width: calc(100% - 700px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}

.container:after {
  content: '';
  clear: both;
  display: block;
}
.mobile-toggle-wrap {
  position: fixed;
  right: 70px;
  top: 18px;
  z-index: 999;
  display: flex;
  align-items: center;
  color: #628cf5;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid #628cf5;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 14px;
    opacity: 0.7;
  }
}
</style>
