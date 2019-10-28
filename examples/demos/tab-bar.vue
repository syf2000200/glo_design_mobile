<template>
  <div class="demo-block">
    <gc-tab-bar :fixed="true" v-model="selected" @input="handle">
      <gc-tab-item id="1">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        1
      </gc-tab-item>
      <gc-tab-item id="2">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        2
      </gc-tab-item>
      <gc-tab-item id="3">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        3
      </gc-tab-item>
    </gc-tab-bar>
  </div>
</template>
<script>
export default {
  name: 'tabbar-demo',
  data() {
    return {
      selected: 1,
    }
  },
  methods: {
    handle(value) {
      console.log(value)
    }
  },
}
</script>
<style scoped>
</style>
