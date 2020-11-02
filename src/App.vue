<template>
  <div v-if="isLandscapeMobile" class="turn-device">
    <svg fill="#fff" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">
      <g transform="translate(0,-952.36219)">
        <path
          d="m 68.859614,965.35007 c -9.2928,-0.15001 -11.5517,6.15485 -11.5517,12.12023 0,0.27429 0.017,0.5373 0.042,0.79515 l -1.6158,-0.0394 c -1.5326,0 -3.9265,-0.39826 -5.4075,-0.89957 -1.8642,-0.63105 -3.1406,-0.93411 -4.2264,-0.0364 -6.1769,5.10737 -6.9813,35.33272 -0.4258,40.43892 2.8059,1.8307 6.9506,0.5182 6.9506,0.5182 l 37.1512,-2.612 c 2.0436,-1.8837 4.3192,-7.4813 5.0354,-12.3864 0.2463,-1.6862 0.2524,-7.23334 0.01,-9.18671 -0.6644,-5.35556 -2.5451,-11.15426 -4.219,-13.00704 -0.9724,-1.07642 -2.659,-1.79775 -4.907,-2.09887 l -1.9449,-0.0476 c -0.012,-0.0786 -0.025,-0.1578 -0.039,-0.23823 -2.1002,-11.36606 -7.8102,-13.20663 -14.8518,-13.32031 z m 2.7528,6.70888 c 4.2944,0.0217 4.649,1.73562 5.3785,6.66441 l -12.6207,-0.28696 c -1.0202,-2.97392 0.089,-5.98696 5.778,-6.33142 0.5334,-0.0323 1.02,-0.0483 1.4642,-0.046 z m -23.4998,7.13934 c 2.5127,0.0316 5.0281,5.90718 5.3344,18.47559 1.1793,26.22022 -10.6812,23.90242 -10.6812,0.2665 0,-12.18728 2.6719,-18.77578 5.3468,-18.74209 z m 3.9235,29.62971 c -1.0347,-0.01 -5.2449,1.3223 -6.8396,1.3223 -0.544,0 1.337,5.4845 3.4757,5.399 2.5214,-0.1008 3.911,-6.3377 3.5766,-6.6721 -0.033,-0.033 -0.1056,-0.048 -0.2127,-0.049 z m -30.7416,1.7903 c -1.5491,0.053 -2.9134,0.8579 -4.1498,3.1094 -1.5253,2.9688 -1.3994,4.3003 -4.919,6.6613 -21.8519995,2.7155 11.8298,30.3798 22.4211,13.6413 3.3737,-5.0845 -0.6685,-9.5184 3.8002,-10.9016 4.4688,-1.3831 8.5987,10.8251 13.3018,9.8013 4.703,-1.0237 5.7007,-10.4013 6.0007,-10.8014 0.3,-0.4 23.1027,0.4001 23.1027,0 0,-0.3956 5.8214,-0.3085 3.9606,-5.4307 -9.0462,0.5462 -24.5395,1.9437 -31.1148,2.3739 0,0 -7.1825,1.2885 -8.9223,-0.8029 -1.9235,-2.3122 -2.9542,-4.8686 -3.4559,-7.3029 -3.7767,1.1139 -9.1097,2.5511 -11.8735,2.0617 -3.2292,-0.9605 -5.8878,-2.4874 -8.1518,-2.4094 z"
          fill="#fff"
          fill-opacity="1"
          fill-rule="evenodd"
          stroke="none"
        />
      </g>
    </svg>
    <div class="text-wrap">
      <h1>Pro správné zobrazení této webové stránky otočte zařízení.</h1>
    </div>
  </div>
  <transition name="loading">
    <div v-if="fetching" class="loading">
      <div class="grid-center">
        <div class="loading__inner">
          <div class="loading__fill"></div>
        </div>
        <div class="loading__text">
          <h1>Přijďte ochutnat jedinečou kávu</h1>
        </div>
      </div>
    </div>
  </transition>
  <template v-if="data">
    <header
      class="head"
      :class="{
        'head--in': !scrollDown || !isMobile,
        'grid-centered': isMobile
      }"
    >
      <Logo />
      <MainNav v-if="!isMobile" :isMobile="isMobile" />
    </header>
    <MainNav v-if="isMobile" :isMobile="isMobile" />
    <main class="content">
      <section
        id="hero"
        class="hero"
        ref="bg"
        :style="[
          isMobile
            ? {
                background: `linear-gradient(to bottom,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.7) 59%,rgba(0, 0, 0, 0.9) 100%), url(
              ${data.uvod.obrazekNaPozadiTelefon.url}
              ) center/auto 100% no-repeat`
              }
            : {
                background: `url(${data.uvod.obrazekNaPozadiPocitac.url}) center/auto no-repeat`
              },
          { 'background-size': `${scale}` }
        ]"
      >
        <h1>{{ data.uvod.uvodniText }}</h1>
        <div class="separator"></div>
        <p>{{ data.uvod.podtext }}</p>
        <a
          class="button--big image_right--slide"
          href="#location"
          title="Navštivte nás"
        >
          Navštivte Nás
        </a>
      </section>
      <section id="values" class="text-section">
        <article>
          <ul class="text-section__column">
            <li>
              <h2 class="section__heading">Na čem nám záleží?</h2>
              <div class="separator"></div>
            </li>
            <template v-if="data.naCemNamZalezi.textyPred.length > 0">
              <li
                class="text-section__paragraph"
                v-for="paragraph in data.naCemNamZalezi.textyPred"
                :key="paragraph.id"
              >
                <h3 class="paragraph__heading">{{ paragraph.nadpis }}</h3>
                <p
                  class="paragraph__text"
                  v-for="text in paragraph.text"
                  :key="text"
                >
                  {{ text }}
                </p>
              </li>
            </template>
          </ul>
          <img
            loading="lazy"
            :src="data.naCemNamZalezi.obrazek.url"
            :alt="data.naCemNamZalezi.obrazek.fileName.match(/.*(?=\.)/g)"
          />
          <ul
            class="text-section__column"
            v-if="data.naCemNamZalezi.textyZa.length > 0"
          >
            <li
              class="text-section__paragraph"
              v-for="paragraph in data.naCemNamZalezi.textyZa"
              :key="paragraph.id"
            >
              <h3 class="paragraph__heading">{{ paragraph.nadpis }}</h3>
              <p
                class="paragraph__text"
                v-for="text in paragraph.text"
                :key="text"
              >
                {{ text }}
              </p>
            </li>
          </ul>
        </article>
      </section>
      <section id="product" class="product-section">
        <h2 class="section__heading">Co nabízíme</h2>
        <ProductGroup
          v-for="group in groupSet"
          :key="group.grIndex"
          :group="group"
          :products="data.coNabizime"
        />
      </section>
      <section id="us" class="text-section">
        <article>
          <ul class="text-section__column">
            <li>
              <h2 class="section__heading">O nás</h2>
              <div class="separator"></div>
            </li>
            <template v-if="data.oNas.textPred.length > 0">
              <li
                class="text-section__paragraph"
                v-for="paragraph in data.oNas.textPred"
                :key="paragraph"
              >
                <h3 class="paragraph__heading">{{ paragraph.nadpis }}</h3>
                <p
                  class="paragraph__text"
                  v-for="text in paragraph.textOdstavce"
                  :key="text"
                >
                  {{ text }}
                </p>
              </li>
            </template>
          </ul>
          <img
            loading="lazy"
            :src="data.oNas.obrazek.url"
            :alt="data.oNas.obrazek.fileName.match(/.*(?=\.)/g)"
          />
          <ul class="text-section__column" v-if="data.oNas.textZa.length > 0">
            <li
              class="text-section__paragraph"
              v-for="paragraph in data.oNas.textZa"
              :key="paragraph"
            >
              <h3 class="paragraph__heading">{{ paragraph.nadpis }}</h3>
              <p
                class="paragraph__text"
                v-for="text in paragraph.textOdstavce"
                :key="text"
              >
                {{ text }}
              </p>
            </li>
          </ul>
        </article>
      </section>
      <section id="gallery" class="gallery-section">
        <h2 class="section__heading">Galerie</h2>
        <swiper
          lazy
          loop
          :pagination="{ clickable: true }"
          navigation
          :space-between="10"
          slidesPerView="auto"
        >
          <swiper-slide
            v-for="(image, index) in data.galerie.obrazkyProGalerii"
            :key="index"
          >
            <img :src="image.url" :alt="image.fileName.match(/.*(?=\.)/g)" />
          </swiper-slide>
        </swiper>
      </section>
      <section id="contact" class="contact-section">
        <h2 class="section__heading">Kontakt</h2>
        <div class="separator"></div>
        <div class="contact__detail">
          <OpeningHours :openingHours="data.kontakt.oteviraciHodiny" />
          <div class="contact__info">
            <div class="contact__email" v-if="data.kontakt.email != ''">
              <a :href="`mailto:${data.kontakt.email}`">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  class="svg-inline--fa fa-paper-plane fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                  ></path>
                </svg>
                <span>{{ data.kontakt.email }}</span>
              </a>
            </div>
            <div class="contact__phone">
              <a :href="`tel:${data.kontakt.telefon}`">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-alt"
                  class="svg-inline--fa fa-phone-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
                <span>{{ data.kontakt.telefon }}</span>
              </a>
            </div>
            <div class="contact__place">
              <a
                rel="noopener"
                href="https://www.google.cz/maps/place/Jedno+kafe/@50.1057939,14.5442875,16.55z/data=!4m5!3m4!1s0x0:0x3852afd7ebc6f158!8m2!3d50.1057927!4d14.5449758"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marked-alt"
                  class="svg-inline--fa fa-map-marked-alt fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
                  ></path>
                </svg>
                <span>{{ data.kontakt.adresa }}</span>
              </a>
            </div>
            <div class="contact__facebook">
              <a
                title="Facebook | Jedno Kafe"
                rel="noopener"
                :href="data.kontakt.facebook"
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
                <span>Podívejte se na náš facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="!isIOS"
        id="parallax"
        class="parallax"
        :style="{
          'background-image': `url(${data.parallaxObrazek.parallaxImage.url})`
        }"
      >
        <div class="overlay"></div>
      </section>
    </main>
    <iframe
      loading="lazy"
      id="location"
      title="Lokace kavárny"
      width="100%"
      height="450"
      frameborder="0"
      i
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCiQ3joCGocmRGBRCuTKJ3mZtAlu7mWSUc&q=Jedno+Kafe,Prague+CZ"
      allowfullscreen
    ></iframe>
    <footer
      class="footer"
      :style="[isMobile ? { 'padding-bottom': '70px' } : {}]"
    >
      <nav>
        <ul>
          <li>
            <a href="#">Domu</a>
          </li>
          <li>
            <a href="#values">Naše hodnoty</a>
          </li>
          <li>
            <a href="#product">Co nabízíme</a>
          </li>
          <li>
            <a href="#us">O nás</a>
          </li>
          <li>
            <a href="#gallery">Galerie</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
          <li>
            <a
              title="Facebook | Jedno Kafe"
              rel="noopener"
              href="https://www.facebook.com/jednokafepraha/"
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
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div class="credits">
        <div class="footer__copyright">
          <div class="coppy-right">
            Copyright © {{ new Date().getFullYear() }} Jedno Kafe
          </div>
          <div class="security-statement"></div>
          <div class="privacy-policy"></div>
        </div>
        <div class="creator">
          Made by:
          <a rel="author" href="https://www.janvitu.dev">Jan Vítů</a>
        </div>
      </div>
    </footer>
    <Cookie />
  </template>
</template>

<script>
import Logo from "@/components/logo.vue"
import MainNav from "@/components/mainNav.vue"
import ProductGroup from "@/components/productGroup.vue"
import OpeningHours from "@/components/openingHours.vue"
import Cookie from "@/components/cookie.vue"

import SwiperCore, { Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/swiper-bundle.min.css"
SwiperCore.use([Pagination, Navigation])

import fetchAppData from "@/use/fetchAppData.js"
import useProductGroups from "@/use/useProductGroups.js"
import deviceCheck from "@/use/useDeviceCheck.js"
import detectStats from "@/use/useDetectStats.js"
import heroScale from "@/use/useHeroScale.js"
import { ref } from "vue"

export default {
  components: {
    Logo,
    MainNav,
    ProductGroup,
    OpeningHours,
    Swiper,
    SwiperSlide,
    Cookie
  },
  setup() {
    const groupSet = ref([])
    const { scale, observer } = heroScale()
    const { isMobile, isIOS } = deviceCheck()
    const {
      isLandscapeMobile,
      scrollDown,
      lastScrollTop,
      isScrollDown,
      detectLandscapeMobile
    } = detectStats()
    const { data, fetching, submitted } = fetchAppData(isMobile.value)
    submitted().then(() => {
      groupSet.value = useProductGroups(data)
      observer.observe(document.querySelector("#hero"))
    })
    window.addEventListener("scroll", isScrollDown)
    window.addEventListener("resize", () => {
      detectLandscapeMobile(isMobile.value)
    })
    return {
      data,
      fetching,
      groupSet,
      scale,
      isMobile,
      isIOS,
      isLandscapeMobile,
      scrollDown,
      lastScrollTop
    }
  }
}
</script>

<style lang="scss">
:root {
  --light-color: #ffffff;
  --dark-color: #0e1112;
  --dark-text: #555555;
  --dark-graphics: #757575;
  --complementary-color: #a6543f;
}
/* ############# */
/* Global Styles */
/* ############# */
* {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  /* max-width: 100vw; */
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  font-size: 16px;
}
body {
  margin: 0;
  background: white;
  overflow-x: hidden;
}
h1 {
  font-size: 1.6rem;
  font-weight: 400;
}
h2 {
  font-size: 1.4rem;
}
p {
  line-height: 1.2;
}
section {
  display: grid;
}
*:focus:not(:focus-visible) {
  outline: none;
}
/* ############ */
/* State styles */
/* ############ */
.is-nonscrollable {
  overflow: hidden;
}
.grid-centered {
  justify-content: center;
}
.is-mobile {
  position: fixed;
  display: grid;
  font-size: 14px;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  align-items: center;
  justify-items: center;
  height: 10vh;
  min-height: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: var(--dark-color);
}
.separator {
  margin: 1.875rem auto;
  height: 4px;
  width: 40px;
  border-radius: 2px;
  background: var(--complementary-color);
}
.section__heading {
  font-weight: bold;
  margin: 2rem auto 1.2rem auto;
}
/* Loader */
.loading {
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1000;
}
.loading__inner {
  display: block;
  margin: 0 auto;
  position: relative;
  width: 4.25rem;
  height: 4.5rem;
  border: 4px solid #6a6a6a;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: white;
}
.loading__inner:after {
  content: "";
  position: absolute;
  right: -28px;
  top: 4px;
  display: block;
  width: 20px;
  height: 40px;
  border: 4px solid #6a6a6a;
  border-bottom-right-radius: 66px 66px;
  border-top-right-radius: 48px 26px;
}
.loading__inner:before {
  content: "";
  position: absolute;
  z-index: 100;
  top: 9px;
  left: 6px;
  width: 17px;
  height: 70%;
  background-color: rgba(200, 200, 213, 0.6);
  border-bottom-left-radius: 40px 120px;
  border-top-left-radius: 40px 120px;
}
.loading__fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #562c21;
  animation: load 1.5s infinite alternate;
}
.loading__fill:after {
  left: 0;
  content: "";
  display: block;
  position: absolute;
  top: 0rem;
  height: 1px;
  background-color: #c69684;
  width: 100%;
  animation: cssload-liquid-1 1.5s infinite alternate;
}
.loading__text {
  h1 {
    font-size: 1.5rem;
  }
}
@keyframes load {
  0% {
    top: 4.5rem;
  }
  90% {
    top: 0;
  }
  100% {
    top: 0;
  }
}
@keyframes cssload-liquid-1 {
  0% {
    opacity: 0;
    top: -0.9rem;
  }
  22% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  60% {
    height: 5px;
  }
  100% {
    height: 5.5px;
  }
}
.loading-leave-active {
  transition: all 0.2s ease 1s;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
.loading-enter-to,
.loading-leave-from {
  opacity: 1;
}
/* ###### */
/* Header */
/* ###### */
.head {
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  min-height: 60px;
  position: fixed;
  top: 0;
  background: var(--dark-color);
  color: var(--light-color);
  transition: transform 0.2s linear, background 1s ease, height 0.5s ease;
  transform: translate3d(0, -100%, 0);
}
.head--in {
  transform: translateZ(0);
}
/* ########## */
/* Navigation */
/* ########## */
.main-nav {
  z-index: 100;
  svg {
    fill: white;
  }
  a {
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;
    transition: opacity 0.2s;
    color: white;
  }
}
.is-mobile svg {
  height: 14px;
}
.is-desktop {
  position: absolute;
  right: 0;
  padding-left: 2rem;
  justify-self: right;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  svg {
    height: 1.3rem;
  }
}
.nav-big {
  a {
    display: inline;
    color: white;
    text-decoration: none;
  }
}
.is-mobile {
  .navbar {
    color: white;
    position: fixed;
    font-weight: 700;
    font-size: 32px;
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: 1.22;
    color: #fff;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(14, 17, 18, 0.3);
    color: var(--light-color);
    svg {
      height: 1.8rem;
    }
  }
  .nav-big {
    text-align: left;
    position: fixed;
    width: 100vw;
    height: 60vh;
    bottom: 0;
    z-index: 10;
    background-color: var(--dark-color);
    color: var(--light-color);
    ul {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
  }
}
.is-desktop {
  .navbar {
    position: fixed;
    font-size: 2rem;
    line-height: 1.4;
    text-transform: uppercase;
    /* opacity: 1; */
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: var(--dark-color);
    width: 100vw;
    height: 100vh;
    /* transition: opacity 0.3s ease, visibility 0.3s ease; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg {
      height: 2rem;
    }
  }
  .nav-big {
    text-align: left;
    margin-left: 30px;
    padding-top: 10vh;
  }
}

.is-mobile .slide-enter-active,
.is-mobile .slide-leave-active {
  transition: height 0.2s ease;
}
.is-mobile .slide-enter-to,
.is-mobile .slide-leave-from {
  height: 60vh;
}
.is-mobile .slide-enter-from,
.is-mobile .slide-leave-to {
  height: 0vh;
}
.mob-enter-active {
  transition: opacity 0.3s;
}
.mob-leave-active {
  transition: opacity 0.3s linear 0.2s;
}
.mob-enter-from,
.mob-leave-to {
  opacity: 0;
}

.is-desktop .slide-enter-active,
.is-desktop .slide-leave-active {
  transition: all 0.5s ease;
}
.is-desktop .slide-enter-from,
.is-desktop .slide-leave-to {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}
.is-desktop .slide-enter-to,
.is-desktop .slide-leave-from {
  opacity: 1;
  transform: translateZ(0);
}
.desk-leave-active {
  transition: opacity 0.15s ease 0.5s;
}
.desk-leave-from {
  opacity: 1;
}
.desk-leave-to {
  opacity: 0;
}
/* Navbar Opener */
.navbar-opener {
  display: grid;
  justify-items: center;
  z-index: 100;
}
.navbar-opener__button {
  display: inline-block;
  width: 64px;
  height: 48px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  z-index: 100;
  background: transparent;
  border: 0;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 32px;
    opacity: 1;
    left: 16px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out, background-color 0.3s ease-out;
    background: #fff;
  }
  span:first-child {
    top: 13px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 21px;
  }
  span:nth-child(4) {
    top: 29px;
  }
  &.is-toggled span:first-child,
  &.is-toggled span:nth-child(4) {
    top: 21px;
    width: 0;
    left: 50%;
  }
  &.is-toggled span:nth-child(2) {
    transform: rotate(45deg);
  }
  &.is-toggled span:nth-child(3) {
    transform: rotate(-45deg);
  }
}
/* ############ */
/* Hero Section */
/* ############ */
.hero {
  padding: 1rem;
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100vh;
  widows: 100vw;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 2.3rem;
    text-align: center;
    margin: 0;
  }
  p {
    color: rgb(175, 175, 175);
    text-align: center;
    margin: 0 0 30px 0;
  }
}
.button--big {
  text-align: center;
  display: inline-block;
  justify-self: center;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  background-color: var(--complementary-color);
  font-size: 18px;
  font-weight: 400;
  padding: 1rem 0px;
  width: 150px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s linear 0s;
}
.button--big:before {
  /* font-family: "Font Awesome 5 Pro"; */
  content: "";
  background: url("~@/assets/fa-icons/search-location-solid.svg") center
    no-repeat;
  background-size: 15px;
  /* height: 15px; */
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: -30px;
  width: 30px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0px 6px 6px 0px;
  transition: all 0.2s linear 0s;
  text-align: center;
}
.button--big:hover {
  text-indent: -30px;
}
.button--big:hover:before {
  right: 0;
  text-indent: 0px;
}
/* ############# */
/* text section */
/* ############# */
.text-section {
  .section__heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1.7rem 0 0.5rem 0;
  }
  .separator {
    margin: 0 0 0 0;
    height: 5px;
    width: 3rem;
  }
  article {
    display: grid;
    img {
      max-width: 100%;
      margin: 0 auto;
      align-self: center;
    }
  }
}
.text-section__column {
  max-width: 60ch;
  margin: 0 auto 0 auto;
  padding: 0 1rem 0 1rem;
  list-style: none;
}
.text-section__paragraph {
}
.paragraph__heading {
  margin: 1.5rem 0 0.8rem 0;
}
.paragraph__text {
  line-height: 1.4;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}
/* ############### */
/* Product section */
/* ############### */
.product-section {
  max-width: 100vw;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url("/img/ProductBack.jpg") center/cover no-repeat;
  color: white;
  display: grid;
  justify-items: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
}
.product-group {
  width: 90vw;
  border-bottom: grey solid 1px;
  margin: 0;
}
.product-group__description {
  display: grid;
  cursor: pointer;
  grid-template-columns: 75px 1fr auto;
  width: 100%;
  h2 {
    margin-top: auto;
    margin-bottom: auto;
  }
  svg {
    height: 1.3em;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0.1rem;
    transition: all 0.2s ease;
    position: relative;
    right: 0;
  }
}
.product-group__icon {
  display: flex;
  padding: 1rem;
  min-width: calc(50px + 1rem);
  margin-top: auto;
  margin-bottom: auto;
  min-height: 35px;
  justify-content: center;
  align-items: center;
  & > img {
    height: 35px;
    width: auto;
    filter: invert(1);
  }
}
.arrow--rotated {
  transform: rotate(90deg);
}
.product-list {
  width: 100%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(300px, 430px));
}
.product {
  display: grid;
  color: white;
  margin: 0.5rem 1rem;
  padding: 1rem 1rem 1rem 1rem;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
}
.product__card {
  display: grid;
  grid-template-areas:
    "head head head"
    "size price price";
  align-items: end;
  grid-template-rows: auto 1.6rem;
  padding-bottom: 0.2rem;
  border-bottom: white dotted 3px;
}
.product__head {
  grid-area: head;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  h3 {
    margin: 0;
    margin-bottom: 0.4rem;
  }
}
.with-subname {
  margin: 0;
}

.product__subname {
  color: rgb(200, 200, 200);
}
.product__size {
  grid-area: size;
}
.product__price {
  grid-area: price;
  justify-self: end;
  font-weight: 400;
  font-size: 1.6rem;
}
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
/* ####### */
/* Gallery */
/* ####### */
.gallery-section {
  /* background: rgba(150, 150, 150, 0.1); */
  padding-bottom: 4.2rem;
  .section__heading {
    margin: 4rem auto 2rem auto;
  }
}
.swiper-container {
  width: 100vw;
  height: 40vh;
}
.swiper-slide {
  width: auto;
  height: 40vh;
  img {
    height: 100%;
    width: auto;
  }
}
/* ####### */
/* Kontakt */
/* ####### */
.contact-section {
  background: white;
  display: grid;
  justify-content: center;
  .section__heading {
    margin-bottom: 0.5rem;
  }
  .separator {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
}
.contact__detail {
  padding-left: 5vw;
  padding-right: 5vw;
  display: grid;
  justify-items: center;
  grid-template-areas:
    "contactInfo"
    "calendar";
}
.timetable {
  margin-top: 3rem;
  margin-bottom: 3rem;
  grid-area: calendar;
}
.contact__info {
  grid-area: contactInfo;
  & > div {
    margin-bottom: 1rem;
  }
  a {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    cursor: pointer;
    color: var(--dark-color);
    background: none;
    padding: 0px;
    text-decoration: none;
    font-size: 1.2rem;
    svg {
      padding-right: 1rem;
      height: 1.2rem;
      text-decoration: none;
      transition: all 150ms ease-in-out 0s;
    }
    span {
      text-decoration: underline;
      transition: all 150ms ease-in-out 0s;
    }
    &:hover span {
      text-shadow: currentcolor 1px 0px;
    }
    &:hover svg {
      transform: scale(1.2);
    }
  }
}
/* ######## */
/* Parallax */
/* ######## */
.parallax {
  margin: 0;
  height: 30vh;
  width: 100vw;
  z-index: -1;
  position: sticky;
  top: 0;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 80%;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
}
/* ####################### */
/* Mobile device landscape */
/* ####################### */
.turn-device {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 3rem;
  padding-right: 3rem;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 1000;
}
.turn-device svg {
  height: 50vh;
  width: auto;
  justify-self: center;
}
.turn-device svg * {
  fill: var(--light-color);
}
/* ###### */
/* footer */
/* ###### */
.footer {
  --footer-text-color: rgb(156, 156, 156);
  display: grid;
  justify-content: cenrter;
  padding: 1.5rem 1.5rem;
  background: var(--dark-color);
  width: 100vw;
  bottom: 0;
  * {
    color: var(--footer-text-color);
    font-size: 0.875rem;
  }
  nav {
    text-align: center;
  }
  ul {
    padding: 0;
    list-style: none;
    text-decoration: underline;
  }
  li {
    padding: 0.2em;
  }
  .credits {
    display: grid;
  }
  .footer__copyright {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
  .coppy-right {
    justify-self: center;
  }
  .creator {
    justify-self: center;
    padding: 0.5em;
    a {
      text-decoration: underline;
    }
  }
  a {
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s ease;
    svg {
      fill: var(--footer-text-color);
      height: 1rem;
      transition: all 0.2s ease;
    }
  }
  a:hover {
    color: rgb(230, 230, 230);
    svg {
      fill: rgb(230, 230, 230);
    }
  }
}
/* ##### */
/* Media */
/* ##### */

@media only screen and (max-height: 350px) {
  .is-desktop .navbar {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 950px) {
  html {
    font-size: 18px;
  }
  .hero {
    justify-items: left;
    padding: 2rem;
    h1 {
      font-size: 4.3rem;
      text-align: unset;
      margin-bottom: 0;
      max-width: 20ch;
    }
    .button--big {
      justify-self: unset;
    }
    .separator {
      margin-left: 0;
    }
    p {
      font-size: 1.125rem;
      text-align: left;
      margin-top: 0.5rem;
    }
  }
  .text-section article {
    grid-template-columns: 1fr 1fr;
  }
  .text-section {
    ul {
      grid-column: 1;
    }
    img {
      grid-column: 2;
      grid-row: 1 / 5;
    }
  }
  .text-section ~ .text-section {
    ul {
      grid-column: 2;
    }
    img {
      grid-column: 1;
      grid-row: 1 / 5;
    }
  }
}
@media only screen and (min-width: 730px) {
  /* hero */

  /* Kontakt */
  .contact__detail {
    grid-template-areas: "calendar contactInfo";
    align-items: center;
    a {
      font-size: 1.3rem;
      svg {
        height: 1.3rem;
      }
    }
    .contact__info {
      padding-left: 3rem;
    }
    .contact__info > div {
      margin-bottom: 1.5rem;
    }
  }
  .is-desktop .nav-big {
    margin-left: 60%;
    padding-top: 10vh;
  }
  .loading__text {
    h1 {
      font-size: 1.6rem;
    }
  }
}
</style>
