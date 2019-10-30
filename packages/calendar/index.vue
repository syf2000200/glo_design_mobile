<template>
    <div class="gc-calendar" v-show="isShow">
        <calendar
            @change="handleChange"
            :show="isShow"
            :mode="mode"
            :defaultDate="defaultDate"
            :disabledDate="disabledDate" />
        <div class="gc-calendar__submit">
            <gc-button @click="onConfirm">确认</gc-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import dayjs from 'dayjs'
import Calendar from 'vue-mobile-calendar'
import create from '../utils/create-basic'

Vue.use(Calendar)

export default create({
  name: 'calendar',
  data() {
      return {
          date: []
      }
  },
  props: {
      isShow: {
          type: Boolean,
          default: false,
      },
      mode: String,
      defaultDate: {
          type: [Date, Number, Array, String],
      },
      disabledDate: {
          type: Array,
          default: function () {
            return []
          }
      },
  },
  watch: {
      isShow: function(value) {
          this.$emit('update:isShow', value);
      }
  },
  methods: {
    handleChange(evt) {
      this.date = evt
    },
    onConfirm() {
        this.$emit('onConfirm', this.date);
    },
  },
  watch: {
      defaultDate(nv, ov) {
        this.date.push(nv)
        console.log(this.date)
      }
  },
})
</script>

