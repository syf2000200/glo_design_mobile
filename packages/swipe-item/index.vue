<template>
  <div class="gc-swipe__item">
    <slot></slot>
  </div>
</template>

<script>
  import create from '../utils/create-basic'
  export default create({
    name: 'swipeItem',
    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },
    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  });
</script>