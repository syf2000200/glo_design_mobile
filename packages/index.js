/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import GcActionsheet from './actionsheet'
import GcBaseCard from './base-card'
import GcButton from './button'
import GcCalendar from './calendar'
import GcCell from './cell'
import GcIcon from './icon'
import GcIndexList from './index-list'
import GcIndexSection from './index-section'
import GcInput from './input'
import GcLoading from './loading'
import GcMessageBox from './message-box/index'
import GcNavBar from './nav-bar'
import GcPopup from './popup'
import GcPullDown from './pull-down'
import GcSwipe from './swipe'
import GcSwipeItem from './swipe-item'
import GcSwitch from './switch'
import GcTabBar from './tab-bar'
import GcTabContainer from './tab-container'
import GcTabContainerItem from './tab-container-item'
import GcTabItem from './tab-item'
import GcTextCard from './text-card'
import GcSearch from './search'
import GcRadio from './radio'
const version = '0.0.8'
const components = [
  GcActionsheet,
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcInput,
  GcLoading,
  GcNavBar,
  GcPopup,
  GcPullDown,
  GcSwipe,
  GcSwipeItem,
  GcSwitch,
  GcTabBar,
  GcTabContainer,
  GcTabContainerItem,
  GcTabItem,
  GcTextCard,
  GcSearch,
  GcRadio,
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
  GcActionsheet,
  GcBaseCard,
  GcButton,
  GcCalendar,
  GcCell,
  GcIcon,
  GcIndexList,
  GcIndexSection,
  GcInput,
  GcLoading,
  GcMessageBox,
  GcNavBar,
  GcPopup,
  GcPullDown,
  GcSwipe,
  GcSwipeItem,
  GcSwitch,
  GcTabBar,
  GcTabContainer,
  GcTabContainerItem,
  GcTabItem,
  GcTextCard,
  GcSearch,
  GcRadio,
}
export default {
  install,
  version
}
