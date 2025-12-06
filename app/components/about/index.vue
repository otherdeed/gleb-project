<template>
  <div 
    :class="`p-3 md:p-5 h-full flex md:flex-col justify-between ${showFooter ? 'flex-col-reverse' : 'flex-col'} `"
  >
    <AboutNavigation 
      :data="data"
      :parent-swiper-instance="parentSwiperInstance"
      :current-index="currentIndex"
      @next="$emit('next')"
      @prev="$emit('prev')"
      class="shrink-0" 
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
import { defineEmits } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  parentSwiperInstance: {
    type: Object,
    default: null
  },
  currentIndex: {
    type: Number,
    default: null
  },
  showFooter: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['next', 'prev']);
</script>