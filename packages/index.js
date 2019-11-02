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
import GcPullDown from './pull-down'
import GcSwipe from './swipe'
import GcSwipeItem from './swipe-item'
import GcTabBar from './tab-bar'
import GcTabItem from './tab-item'
import GcTextCard from './text-card'
import GcPopup from './popup'
import GcActionSheet from './actionsheet'
import GcMessagebox  from './message-box/message-box'
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
  GcPullDown,
  GcSwipe,
  GcSwipeItem,
  GcTabBar,
  GcTabItem,
  GcTextCard,
  GcPopup,
  GcActionSheet
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  Vue.$messagebox = Vue.prototype.$messagebox = GcMessagebox;
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
  GcPullDown,
  GcSwipe,
  GcSwipeItem,
  GcTabBar,
  GcTabItem,
  GcTextCard,
  GcPopup,
  GcActionSheet,
  GcMessagebox
}
export default {
  install,
  version
}
