<template>
  <div class="demo-block">
    <gc-tabbar :fixed="true" v-model="selected" @input="handle">
      <gc-tabitem id="1">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        1
      </gc-tabitem>
      <gc-tabitem id="2">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        2
      </gc-tabitem>
      <gc-tabitem id="3">
        <gc-icon slot="icon" name="arrow-bold" :size="24"></gc-icon>
        3
      </gc-tabitem>
    </gc-tabbar>
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
