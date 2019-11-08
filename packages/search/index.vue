<template>
  <div class="gc-search">
    <div class="gc-searchbar">
      <div class="gc-searchbar-inner">
        <gc-icon name="search-bold" :symbol="false" color="#666" size="24"></gc-icon>
        <input
            ref="input"
            @click="visible = true"
            type="search"
            v-model="currentValue"
            :placeholder="placeholder"
            class="gc-searchbar-core">
      </div>
      <gc-icon
        :symbol="false" color="#666"
        class="gc-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        name="close-circlefill" size="24"></gc-icon>
    </div>
    <div class="gc-search-list" v-show="show || currentValue">
      <div class="gc-search-list-warp">
        <slot>
          <gc-cell v-for="(item, index) in result" :key="index" :title="item"></gc-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import GcCell from '../cell';
import create from '../utils/create-basic'
  export default create({
    name: 'search',
    data() {
        return {
        visible: false,
        currentValue: this.value
        };
    },
    components: { GcCell },
    watch: {
        currentValue(val) {
        this.$emit('input', val);
        },
        value(val) {
        this.currentValue = val;
        }
    },
    props: {
        icon: Boolean,
        value: String,
        autofocus: Boolean,
        show: Boolean,
        // cancelText: {
        //     default: '取消'
        // },
        placeholder: {
            default: '搜索'
        },
        result: Array
    },
    mounted() {
        this.autofocus && this.$refs.input.focus();
    }
  })
</script>