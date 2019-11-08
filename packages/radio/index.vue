<template>
  <div class="mint-radiolist" @change="$emit('change', currentValue)">
    <label class="mint-radiolist-title" v-text="title"></label>
    <gc-cell v-for="option in options" :key="option">
      <label class="mint-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-radio">
          <input
            class="mint-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mint-radio-core"></span>
        </span>
        <span class="mint-radio-label" v-text="option.label || option"></span>
      </label>
    </gc-cell>
  </div>
</template>

<script>
import GcCell from '../cell';
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
    data() {
        return {
        currentValue: this.value
        };
    },
    watch: {
        value(val) {
        this.currentValue = val;
        },
        currentValue(val) {
        this.$emit('input', val);
        }
    },
    components: {
        GcCell
    }
  })
</script>