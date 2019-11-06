<template>
  <div class="demo-block">
    <gc-switch v-model="value">开关</gc-switch>
  </div>
</template>

<script>
export default {
  name: 'switch-demo',
  data() {
    return {
      value: true,
    }
  },
}
</script>