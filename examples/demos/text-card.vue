<style lang="scss">
.demo-wrap {
  margin-right: 45px;
}
.demo-block .gc {
  margin-left: 20px;
}
</style>
<script>
export default {
  name: 'text-demo'
}
</script>

<template>
  <div class="demo-block">
    <gc-text message="这是卡片内容"></gc-text>
    <gc-text theme-type="primary" message="这是卡片内容"></gc-text>
  </div>
</template>
