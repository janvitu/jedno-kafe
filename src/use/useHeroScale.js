import { ref } from "vue"

export default function heroScale() {
  const scale = ref("")
  function scaleOnScroll() {
    const regex = /(?<=url\((['"]))(.*)(?=(\1)\))/gi
    const el = document.querySelector("#hero")
    const scrollY = document.documentElement.scrollTop
    const clientHei = document.documentElement.clientHeight
    const imgSrc = regex.exec(el.style.backgroundImage)[0]

    const img = new Image()
    img.src = imgSrc
    const imgRatio = img.height / img.width
    const windowRatio = window.innerHeight / window.innerWidth
    const bgSize =
      (scrollY - el.offsetTop + clientHei - el.offsetHeight) / el.offsetHeight

    if (el.offsetTop - scrollY <= clientHei - el.offsetHeight + 1) {
      imgRatio > windowRatio
        ? (scale.value = `${(1 + bgSize) * 100}%`)
        : (scale.value = `auto ${(1 + bgSize) * 100}%`)
    } else {
      scale.value = ""
    }
  }
  let observer = new IntersectionObserver(
    entry => {
      console.log(entry)
      console.log("something")
      let isIntersecting = entry[0].isIntersecting
      console.log(isIntersecting)
      if (isIntersecting) {
        window.addEventListener("scroll", scaleOnScroll)
      } else {
        window.removeEventListener("scroll", scaleOnScroll)
      }
    },
    {
      threshold: 0
    }
  )

  return {
    scale,
    // scaleOnScroll,
    observer
  }
}
