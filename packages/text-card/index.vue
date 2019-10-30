<template>
  <gc-base v-bind="$props">
    <div slot="content">
      {{message}}
    </div>
  </gc-base>
</template>

<script>
import create from '../utils/create'
export default create({
  name: 'text',
  props: {
    message: String
  }
})
</script>
