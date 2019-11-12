<template>
  <div class="demo-block">
    <div class="page-button-group">
      <gc-button @click.native="show = true" size="large">点击选择地区</gc-button>
    </div>
    <gc-area-select v-model="show"></gc-area-select>
  </div>
</template>

<script>
export default {
  name: 'area-select-demo',
  data () {
    return {
      show: false
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style scoped>
  .demo-block {
    padding-left: 0;
    padding-right: 0;
  }
  .page-button-group {
    padding: 0 20px;
  }
  .page-button-group, .page-button-group>* {
    margin-bottom: 15px;
  }
</style>
