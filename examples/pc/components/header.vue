
<template>
  <header
    class="page-header"
  >
    <div class="header-container">
      <gc-icon name="cards" :size="50"></gc-icon>
      <span class="name">广材移动端组件库</span>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../assets/scss/index';
.page-header {
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    margin: 0 20px;
    a {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .name {
      color: #628cf5;
      font-size: 20px;
      margin-left: 5px;
    }
    .icon {
      width: 100px;
    }
  }
}
</style>
