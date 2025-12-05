<!-- About.vue -->
<template>
  <div 
    :class="`p-3 md:p-5 h-full flex md:flex-col justify-between ${showFooter ? 'flex-col-reverse' : 'flex-col'} `"
  >
    <AboutNavigation 
      :data="data"
      :parent-swiper-instance="parentSwiperInstance"
      class="shrink-0" 
      :show-footer="showFooter"
    />
    <div class="grow hidden"></div>
    <AboutFooter 
      v-if="showFooter"
      :data="data"
      class="shrink-0" 
    />
    <AboutHeader 
      class="md:hidden"
      :show-footer="showFooter"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  parentSwiperInstance: {
    type: Object,
    default: null
  },
  showFooter: {
    type: Boolean,
    default: true
  }
});
</script>