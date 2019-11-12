<template>
  <div class="gc-input">
    <label class="item item-borderless item-input gc-input__wrapper">

      <!-- text -->
      <input v-if="type == 'text'" type="text" :placeholder="placeholder" ref="input" :value="value"
        @compositionstart="compositionStart($event)"
        @compositionend="compositionEnd($event)"
        @input="input($event)"
        @focus="focus($event)"
        @blur="blur($event)"
      >

      <!-- password -->
      <input v-if="type == 'password'" type="password" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">

      <!-- email -->
      <input v-if="type == 'email'" type="email" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">

      <!-- tel -->
      <input v-if="type == 'tel'" type="tel" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">

    </label>

    <span class="gc-input__clear" :class="{'active': showClearButton}" @click="clear(value)"></span>
  </div>
</template>

<script>
import create from '../utils/create-basic'
let lock = false
const is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent)
export default create({
  name: 'input',
  props: {
    type: {
      type: String,
      validator (val) {
        return val == 'text' || val == 'password' || val == 'email' || val == 'tel'
      },
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      showClearButton: false
    }
  },
  methods: {
    clear (value) {
      this.$refs.input.blur()
      this.$refs.input.value = ''
      this.$emit('input', '')
      this.showClearButton = false
      this.$refs.input.focus()
    },
    updateValue (value) {
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    input ($event) {
      if (lock) {
        $event.preventDefault()
        return
      }
      let value = $event.target.value
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    compositionStart ($event) {
      lock = true
    },
    compositionEnd ($event) {
      lock = false
      this.$emit('input', this.$refs.input.value)
    },
    focus ($event) {
      if (is_ios) this.showClearButton = !!this.$refs.input.value
    },
    blur ($event) {
      if (is_ios) this.showClearButton = false
    }
  },
  watch: {
    value: function (newValue) {
      this.showClearButton = !!newValue
    }
  }
})
</script>
