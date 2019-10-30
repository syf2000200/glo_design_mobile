/**
 * Create a component with common options
 */
import createBasic from './create-basic'
import GcBaseCard from '../base-card/index.vue'
import GcIcon from '../icon/index.vue'
import GcButton from '../button/index.vue'
import GcLoading from '../loading/index.vue'
import GcNavBar from '../nav-bar/index.vue'
import GcSwipe from '../swipe/index.vue'
import GcSwipeItem from '../swipe-item/index.vue'
import GcTabBar from '../tab-bar/index.vue'
import GcTabItem from '../tab-item/index.vue'
import GcTextCard from '../text-card/index.vue'
import GcCalendar from '../calendar/index.vue'

export default function(sfc) {
  sfc.props = Object.assign(sfc.props || {}, GcBaseCard.props)
  sfc.components = Object.assign(sfc.components || {}, {
    GcBaseCard,
    GcIcon,
    GcButton,
    GcLoading,
    GcNavBar,
    GcSwipe,
    GcSwipeItem,
    GcTabBar,
    GcTabItem,
    GcTextCard,
    GcCalendar,
  })
  sfc.inheritAttrs = false
  return createBasic(sfc)
}
