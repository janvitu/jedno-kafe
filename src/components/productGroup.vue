<template>
  <section class="product-group">
    <div class="product-group__description" @click="toggleProductGroup">
      <div class="product-group__icon">
        <img :src="group.icon" :alt="group.gr" />
      </div>
      <h2>{{ group.grName }}</h2>
      <svg
        :class="{ 'arrow--rotated': toggled }"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        class="svg-inline--fa fa-angle-right fa-w-8"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
        ></path>
      </svg>
    </div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="product-list" v-show="toggled">
        <div
          class="product"
          v-for="product in products.filter(p => {
            return p.skupinaProduku == group.gr
          })"
          :key="product.id"
        >
          <div class="product__card">
            <div class="product__head">
              <h3 :class="{ 'with-subname': product.podnazev != null }">
                {{ product.nazev }}
              </h3>
              <span class="product__subname">{{ product.podnazev }}</span>
            </div>
            <span v-if="product.mnozstvi != null" class="product__size">{{
              `${product.mnozstvi} ${product.jednotky}`
            }}</span>
            <span class="product__price">{{ product.cena }}</span>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { ref } from "vue"
export default {
  props: {
    group: Object,
    products: Object
  },
  setup() {
    const toggled = ref(false)
    function start(el) {
      el.style.height = el.scrollHeight + "px"
    }
    function end(el) {
      el.style.height = ""
    }
    function toggleProductGroup() {
      toggled.value = !toggled.value
    }
    return {
      toggled,
      start,
      end,
      toggleProductGroup
    }
  }
}
</script>
