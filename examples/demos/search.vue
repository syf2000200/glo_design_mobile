<template>
  <div class="demo-block">
    <gc-search autofocus v-model="value" :result="filterResult"></gc-search>
  </div>
</template>
<script>
export default {
  name: 'search-demo',
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>

<style scoped>
    .demo-block {
        padding-left: 0;
        padding-right: 0;
    }
</style>
