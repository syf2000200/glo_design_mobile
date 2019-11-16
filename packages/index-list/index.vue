<template>
    <div class="gc-indexlist">
        <ul class="gc-indexlist__content" ref="content" :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
            <slot></slot>
        </ul>
        
        <div class="gc-indexlist__nav" @touchstart="handleTouchStart" ref="nav">
            <ul class="gc-indexlist__navlist">
                <li class="gc-indexlist__navitem" v-for="section in sections" :key="section.index">{{ section.index }}</li>
            </ul>
        </div>
        
        <div class="gc-indexlist__indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
    </div>
</template>

<script>
import create from '../utils/create-basic'
  export default create({
    name: 'indexList',
    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      };
    },
    watch: {
      sections() {
        this.init();
      },
      height(val) {
        if (val) {
          this.currentHeight = val;
        }
      }
    },
    methods: {
      init() {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        let listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },
      handleTouchStart(e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },
      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },
      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },
      scrollList(y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('gc-indexlist__navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        let targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      }
    },
    mounted() {
      if (!this.currentHeight) {
        window.scrollTo(0, 0);
        requestAnimationFrame(()=>{
          this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
        });
      }
      this.init();
    }
  })
</script>