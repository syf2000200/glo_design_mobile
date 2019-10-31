/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import GcBaseCard from './base-card'
import GcButton from './button'
import GcCalendar from './calendar'
import GcCell from './cell'
import GcIcon from './icon'
import GcIndexList from './index-list'
import GcIndexSection from './index-section'
import GcLoading from './loading'
import GcNavBar from './nav-bar'
import GcSwipe from './swipe'
import GcSwipeItem from './swipe-item'
import GcTabBar from './tab-bar'
import GcTabItem from './tab-item'
import GcTextCard from './text-card'
const version = '0.0.8'
const components = [
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcLoading,
  GcNavBar,
  GcSwipe,
  GcSwipeItem,
  GcTabBar,
  GcTabItem,
  GcTextCard
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcLoading,
  GcNavBar,
  GcSwipe,
  GcSwipeItem,
  GcTabBar,
  GcTabItem,
  GcTextCard
}
export default {
  install,
  version
}
