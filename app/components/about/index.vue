<!-- About.vue -->
<template>
  <div class="p-3 h-full flex md:flex-col justify-between flex-col-reverse">
    <AboutNavigation 
      :data="data"
      :parent-swiper-instance="parentSwiperInstance"
      class="shrink-0" 
    />
    <div class="grow hidden"></div>
    <AboutFooter 
      :data="data"
      class="shrink-0" 
    />
    <AboutHeader class="md:hidden" />
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
  }
});
</script>