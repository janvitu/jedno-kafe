import { reactive, toRefs } from "vue"

export default function detectStats() {
  const stats = reactive({
    isLandscapeMobile: false,
    scrollDown: false,
    lastScrollTop: 0
  })
  function detectLandscapeMobile(isMobile) {
    stats.isLandscapeMobile = isMobile && window.innerHeight < window.innerWidth
  }
  function isScrollDown() {
    const st = window.pageYOffset || document.documentElement.scrollTop
    if (st > stats.lastScrollTop) {
      stats.scrollDown = true
    } else {
      stats.scrollDown = false
    }
    stats.lastScrollTop = st <= 0 ? 0 : st
  }
  return {
    ...toRefs(stats),
    detectLandscapeMobile,
    isScrollDown
  }
}
