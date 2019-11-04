
<template>
  <header
    class="page-header"
  >
    <div class="header-container">
      <div class="logo">
        <a href="javascript:void(0);" @click="goHome">
          <img src="../assets/images/logo.png" alt="">
          GLO.Design
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goHome() {
      window.location.href = window.location.origin
    }
  },
}
</script>
<style type="text/scss" lang="scss">
@import '../assets/scss/index';
.page-header {
  background-color: #fff;
  border-bottom: 1px solid #dddddd;
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 1200px;
    margin: 0 auto;
    .logo {
      float: left;
      margin: 20px;
      a {
        line-height: 40px;
        color: #333333;
        font-size: 24px;
        font-weight: bold;
        img {
          float: left;
          max-width: 40px;
          max-height: 40px;
          line-height: 40px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
