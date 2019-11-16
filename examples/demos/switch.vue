<template>
  <div class="demo-block">
    <gc-switch v-model="value" @change="handleChange">开关</gc-switch>
    <gc-switch v-model="value" @change="handleChange"><label v-text="value1"></label></gc-switch>
  </div>
</template>

<script>
export default {
  name: 'switch-demo',
  data() {
    return {
      value: true,
      value1: false,
    }
  },
  methods: {
    handleChange(evt) {
      console.log(evt);
      this.value = evt
    }
  },
}
</script>