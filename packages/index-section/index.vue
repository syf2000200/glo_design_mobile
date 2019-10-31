<template>
  <li class="gc-indexsection">
    <p class="gc-indexsection__index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import create from '../utils/create-basic'
  export default create({
    name: 'indexSection',
    props: {
      index: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.$parent.sections.push(this);
    },
    beforeDestroy() {
      let index = this.$parent.sections.indexOf(this);
      if (index > -1) {
        this.$parent.sections.splice(index, 1);
      }
    }
  })
</script>
