<template>
  <div class="gc-radiolist" @change="$emit('change', currentValue)">
    <label class="gc-radiolist__title" v-text="title"></label>
    <gc-cell v-for="option in options" :key="option.key">
      <label class="gc-radiolist__label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="gc-radio">
          <input
            class="gc-radio__input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="gc-radio__core"></span>
        </span>
        <span class="gc-radio__label" v-text="option.label || option"></span>
      </label>
    </gc-cell>
  </div>
</template>

<script>
import GcCell from '../cell'
import create from '../utils/create-basic'
export default create({
  name: 'radio',
  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  components: {
    GcCell
  }
})
</script>
