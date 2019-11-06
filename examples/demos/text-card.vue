<template>
  <div class="demo-block">
    <gc-text-card message="这是卡片内容"></gc-text-card>
    <gc-text-card theme-type="primary" message="这是卡片内容"></gc-text-card>
  </div>
</template>

<script>
export default {
  name: 'text-demo'
}
</script>

<style scoped>
.demo-wrap {
  margin-right: 45px;
}
.demo-block .gc {
  margin-left: 20px;
}
</style>