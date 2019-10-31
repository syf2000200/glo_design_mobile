
<template>
  <header
    class="page-header"
  >
    <div class="header-container">
      <a href="javascript:void(0);" @click="goHome"><span class="name">GC-Desgin-Mobile</span></a>
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
    a {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .name {
      color: #108EE9;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>
