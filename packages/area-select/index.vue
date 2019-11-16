<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="area_panel">
      <gc-nav-bar title="选择地区">
        <gc-button slot="left" icon="arrow-left-reg" @click="handleBack">返回</gc-button>
      </gc-nav-bar>
      <div class="area_select_panel new_panel">
        <div class="left_panel">
          <span v-for="(selectedItem, index) in selectedAreas" class="province_item" :class="{'active': index === selectedAreas.length - 1}" :key="selectedItem.code" @click="changeLeftItem(index)">{{ selectedItem.name }}</span>
        </div>
        <div class="right_panel">
          <template v-for="letter in childrenIndex">
            <p class="city_title" :key="letter">{{letter}}</p>
            <template v-for="item in childrenArea">
              <span v-if="item.letter === letter" class="option" :key="letter + '_' + item.code" @click="openChildren(item.code, item.name)">{{ item.name }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
import pinyin from 'pinyin'
import areaData from './list'
import Popup from '../utils/popup'
import NavBar from '../nav-bar'
import Button from '../button'
import '../popup/popup.css'
import create from '../utils/create-basic'
export default create({
  name: 'area-select',
  mixins: [Popup],
  components: {
    NavBar,
    Button
  },
  props: {
    modal: {
      default: true
    },
    modalFade: {
      default: false
    },
    lockScroll: {
      default: false
    },
    closeOnClickModal: {
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: false,
      childrenIndex: [],
      childrenArea: [],
      selectedAreas: [{ code: '000000', name: '全国' }]
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    /**
     * 打开子选项
     * @param code 父级编码
     * @param name 父级名称
     */
    openChildren (code, name) {
      // 如果未指定code参数或者编码为二级节点编码，则进行子级数据加载
      if (!code || code.substr(4, 2) === '00') {
        this.childrenArea = []
        this.childrenIndex = new Set()
        let codeRegx = '\\d{2}0000'
        if (code) {
          if (code.substr(0, 2) === '00') {
            codeRegx = `\\d{2}0000`
          } else if (code.substr(2, 2) === '00') {
            let startCode = code.substr(0, 2)
            codeRegx = `${startCode}((0[1-9])|([1-9]\\d))00`
          } else if (code.substr(4, 2) === '00') {
            let startCode = code.substr(0, 4)
            codeRegx = `${startCode}((0[1-9])|([1-9]\\d))`
          }
          this.selectedAreas.push({
            code: code,
            name: name
          })
        }
        let re = new RegExp(codeRegx)
        for (let areaCode in areaData) {
          // 匹配一级地区编码
          if (areaCode.match(re)) {
            let areaName = areaData[areaCode]
            // 获取地区的首字母
            let area_first_letter = pinyin(areaName, {
              style: pinyin.STYLE_FIRST_LETTER, // 设置拼音风格
              segment: true
            })[0][0].toUpperCase()
            this.childrenArea.push({
              code: areaCode,
              name: areaName,
              letter: area_first_letter
            })
          }
        }
        this.childrenArea.sort(function (p1, p2) {
          return p1.letter.localeCompare(p2.letter, 'en')
        })
        let thisObj = this
        this.childrenArea.forEach(item => {
          thisObj.childrenIndex.add(item.letter)
        })
      }
    },
    /**
     * 改变左侧选项
     * @param index 选项索引下标
     */
    changeLeftItem (index) {
      if (this.selectedAreas.length > index + 1) {
        let checkedArea = { ...this.selectedAreas[index] }
        this.selectedAreas.splice(index)
        this.openChildren(checkedArea.code, checkedArea.name)
      }
    },
    /**
     * 返回按钮事件，关闭窗体
     */
    handleBack () {
      this.currentValue = false
    }
  },
  mounted () {
    if (this.value) {
    }
    this.openChildren()
  }
})
</script>
