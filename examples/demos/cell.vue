<template>
  <div class="demo-block">
    <gc-cell title="标题文字"></gc-cell>
    <gc-cell title="标题文字" value="说明文字"></gc-cell>
    <gc-cell title="标题文字" to="https://mt.gldjc.com" value="带有链接的cell" is-link></gc-cell>
  </div>
</template>

<script>
export default {
  name: 'cell-demo',
}
</script>

<style scoped>
.demo-block {
    padding-left: 0;
    padding-right: 0; 
}
</style>