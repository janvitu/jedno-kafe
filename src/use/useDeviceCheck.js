import { reactive, toRefs } from "vue"

export default function checkDevice() {
  const deviceInfo = reactive({
    isMobile: Boolean,
    isIOS: Boolean
  })

  deviceInfo.isMobile = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ].some(mobileDevice => {
    return navigator.userAgent.match(mobileDevice)
  })

  deviceInfo.isIOS =
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)

  return { ...toRefs(deviceInfo) }
}
