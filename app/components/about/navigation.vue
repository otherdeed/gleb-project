<!-- AboutNavigation.vue -->
<template>
  <header class="flex justify-between items-center">
    <button 
      @click="goToPrevious"
      class="hover:opacity-70 transition-opacity cursor-pointer"
    >
      ← {{ data.previousProject }}
    </button>
    
    <span v-if="showFooter">{{ data.title }}</span>
    
    <button 
      @click="goToNext"
      class="hover:opacity-70 transition-opacity cursor-pointer"
    >
      {{ data.nextProject }} →
    </button>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

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

const goToPrevious = () => {
  if (props.parentSwiperInstance) {
    props.parentSwiperInstance.slidePrev();
  } else {
    console.error('parentSwiperInstance is null!');
  }
};

const goToNext = () => {
  if (props.parentSwiperInstance) {
    props.parentSwiperInstance.slideNext();
  } else {
    console.error('parentSwiperInstance is null!');
  }
};
</script>