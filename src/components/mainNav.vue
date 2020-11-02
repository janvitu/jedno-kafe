<template>
  <nav class="main-nav" :class="isMobile ? 'is-mobile' : 'is-desktop'">
    <a href="#app">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="home"
        class="svg-inline--fa fa-home fa-w-18"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
        ></path>
      </svg>
      <span>Úvod</span>
    </a>
    <a href="#product">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="coffee-pot"
        class="svg-inline--fa fa-coffee-pot fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g class="fa-group">
          <path
            class="fa-secondary"
            fill="currentColor"
            d="M424.06,171.86l-271.86.63C98.63,212.07,64,274.39,64,344.62c0,51.47,18.62,84.77,49.64,117.71A57.17,57.17,0,0,0,155.16,480H420.84a57.08,57.08,0,0,0,41.45-17.6c31-32.95,49.69-66.24,49.71-117.72C512,275.13,478.41,211.82,424.06,171.86Zm-6,244.14H158c-22.34-24.35-30-42.72-30-71.38,0-41.12,17-79.62,47.3-108.18l225.81-.53A148.57,148.57,0,0,1,448,344.66C448,373.3,440.37,391.67,418.05,416Z"
            opacity="0.4"
          ></path>
          <path
            class="fa-primary"
            fill="currentColor"
            d="M130.55,320A146,146,0,0,0,128,344.62c0,28.66,7.62,47,30,71.38H418.05C440.37,391.67,448,373.3,448,344.66A150.45,150.45,0,0,0,445.5,320ZM424.06,171.86,480,32H88A88,88,0,0,0,0,120v88a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V136a40,40,0,0,1,40-40h17.6l30.6,76.49Z"
          ></path>
        </g>
      </svg>
      <span>Produkty</span>
    </a>
    <a href="#contact">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="address-book"
        class="svg-inline--fa fa-address-book fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"
        ></path>
      </svg>
      <span>Kontakt</span>
    </a>
    <div class="navbar-opener">
      <button
        aria-label="navigation opener"
        class="navbar-opener__button"
        :class="{ 'is-toggled': navOpen }"
        @click="toggleNavOpen()"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <transition :name="isMobile ? 'mob' : 'desk'">
      <div class="navbar" v-show="navOpen">
        <transition name="slide">
          <nav class="nav-big" v-show="navOpen">
            <ul>
              <li>
                <a href="#" @click="closeNav">ÚVOD</a>
              </li>
              <li>
                <a href="#values" @click="closeNav">NAŠE HODNOTY</a>
              </li>
              <li>
                <a href="#product" @click="closeNav">NAŠE PRODUKTY</a>
              </li>
              <li>
                <a href="#us" @click="closeNav">O NÁS</a>
              </li>
              <li>
                <a href="#gallery" @click="closeNav">GALERIE</a>
              </li>
              <li>
                <a href="#contact" @click="closeNav">KONTAKT</a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/jednokafepraha/"
                  title="Facebook | Jedno Kafe"
                  rel="noopener"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="svg-inline--fa fa-facebook-f fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref } from "vue"
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const navOpen = ref(false)
    const toggleNavOpen = () => {
      navOpen.value
        ? document.querySelector("body").classList.remove("is-nonscrollable")
        : document.querySelector("body").classList.add("is-nonscrollable")
      navOpen.value = !navOpen.value
    }
    const closeNav = async () => {
      navOpen.value = false
      document.querySelector("body").classList.remove("is-nonscrollable")
    }
    return { navOpen, toggleNavOpen, closeNav }
  }
}
</script>
