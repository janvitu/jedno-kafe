<template>
  <div class="eu-cookies" v-show="!cookieAccept">
    <i class="fad fa-cookie-bite"></i>
    <p>
      Pro zaručení co nejlepšího uživatelského prostředí používáme soubory
      cookies.
    </p>
    <button
      aria-label="Vyrozumění s využíváním cookies"
      @click="acceptCookies"
      class="btn"
    >
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      Rozumím
    </button>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const cookieAccept = ref(false)
    const cookieName = "eu-cookies="
    const documentCookies = document.cookie.split(";")
    cookieAccept.value = documentCookies.some(cookie => {
      if (cookie.includes(cookieName)) {
        return true
      }
    })

    function acceptCookies() {
      let date = new Date()
      let mm = date.getMonth() + 1
      date.setMonth(mm)
      document.cookie = "eu-cookies=1; path=/; expires=" + date.toGMTString()
      this.cookieAccept = true
    }
    return {
      cookieAccept,
      acceptCookies
    }
  }
}
</script>

<style lang="scss" scoped>
.eu-cookies {
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 2fr 1fr;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: rgba(14, 17, 18, 0.9);
  z-index: 999;
}
button {
  border: none;
  justify-self: end;
}
i {
  font-size: 2rem;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}
i::before {
  color: #5a2c22;
}
i::after {
  color: #bd8c61;
  opacity: 1;
}
p {
  margin: 1em;
}
.btn {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0.5rem 0.5rem;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  background: none;
}
.btn svg {
  height: 45px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.btn rect {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 422, 0;
  -webkit-transition: all 0.35s linear;
  transition: all 0.35s linear;
}

.btn:hover {
  background: rgba(225, 51, 45, 0);
  font-weight: 700;
  letter-spacing: 1px;
}
.btn:hover rect {
  stroke-width: 5;
  stroke-dasharray: 15, 310;
  stroke-dashoffset: 48;
  -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
