<template>
  <gc-base-card v-bind="$props">
    <div slot="content">
      {{message}}
    </div>
  </gc-base-card>
</template>

<script>
import create from '../utils/create'
export default create({
  name: 'textCard',
  props: {
    message: String
  }
})
</script>
