/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import GcActionsheet from './actionsheet'
import GcAreaSelect from './area-select'
import GcBaseCard from './base-card'
import GcButton from './button'
import GcCalendar from './calendar'
import GcCell from './cell'
import GcIcon from './icon'
import GcIndexList from './index-list'
import GcIndexSection from './index-section'
import GcInput from './input'
import GcMessageBox from './message-box/index'
import GcNavBar from './nav-bar'
import GcPopup from './popup'
import GcPullDown from './pull-down'
import GcRadio from './radio'
import GcSearch from './search'
import GcSwipe from './swipe'
import GcSwipeItem from './swipe-item'
import GcSwitch from './switch'
import GcTabBar from './tab-bar'
import GcTabContainer from './tab-container'
import GcTabContainerItem from './tab-container-item'
import GcTabItem from './tab-item'
import GcTextCard from './text-card'
import { GcLoading, GcToast } from './toast/index'
const version = '0.0.9'
const components = [
  GcActionsheet,
  GcAreaSelect,
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcInput,
  // GcMessageBox,
  GcNavBar,
  GcPopup,
  GcPullDown,
  GcRadio,
  GcSearch,
  GcSwipe,
  GcSwipeItem,
  GcSwitch,
  GcTabBar,
  GcTabContainer,
  GcTabContainerItem,
  GcTabItem,
  GcTextCard
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  Vue.prototype.GcLoading = window.GcLoading = GcLoading
  Vue.prototype.GcToast = window.GcToast = GcToast
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  GcActionsheet,
  GcAreaSelect,
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcInput,
  GcMessageBox,
  GcNavBar,
  GcPopup,
  GcPullDown,
  GcRadio,
  GcSearch,
  GcSwipe,
  GcSwipeItem,
  GcSwitch,
  GcTabBar,
  GcTabContainer,
  GcTabContainerItem,
  GcTabItem,
  GcTextCard,
  GcLoading,
  GcToast,
}
export default {
  install,
  version
}
