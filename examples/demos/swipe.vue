<template>
  <div class="demo-block">
    <h4>基础用法</h4>
    <gc-swipe :auto="4000">
        <gc-swipe-item>1</gc-swipe-item>
        <gc-swipe-item>2</gc-swipe-item>
        <gc-swipe-item>3</gc-swipe-item>
    </gc-swipe>
    <h4>隐藏下标</h4>
    <gc-swipe :show-indicators="false">
        <gc-swipe-item>1</gc-swipe-item>
        <gc-swipe-item>2</gc-swipe-item>
        <gc-swipe-item>3</gc-swipe-item>
    </gc-swipe>
    <h4>取消自动播放</h4>
    <gc-swipe :auto="0">
        <gc-swipe-item>1</gc-swipe-item>
        <gc-swipe-item>2</gc-swipe-item>
        <gc-swipe-item>3</gc-swipe-item>
    </gc-swipe>
  </div>
</template>
<script>
export default {
  name: 'swipe-demo',
}
</script>
<style scoped>
h4 {
    font-weight: normal;
    font-size: 14px;
    color: #666666;
    text-align: center;
    margin: 10px 0;
}
.gc-swipe {
    height: 200px;
}
.gc-swipe__item {
    line-height: 200px;
    color: #ffffff;
    font-size: 26px;
    text-align: center;
}
</style>