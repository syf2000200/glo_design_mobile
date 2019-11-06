<template>
  <div class="demo-block">
      <gc-pull-down :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="pulldown">
        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </gc-pull-down>
  </div>
</template>
<script>
export default {
  name: 'pullDown-demo',
  data() {
    return {
      allLoaded: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    }
  },
  methods: {
    loadTop() {
      this.$refs.pulldown.onTopLoaded();
    },
    loadBottom() {
      this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.pulldown.onBottomLoaded();
    }
  },
}
</script>

<style scoped>
.demo-block {
    padding: 0;
}
</style>
