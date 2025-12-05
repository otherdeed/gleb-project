<!-- AboutNavigation.vue -->
<template>
  <header class="flex justify-between items-center">
    <button 
      @click="goToPrevious"
      class="hover:opacity-70 transition-opacity cursor-pointer"
    >
      ← {{ data.previousProject }}
    </button>
    
    <span>{{ data.title }}</span>
    
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
  }
});

const goToPrevious = () => {
  console.log('Go to previous clicked');
  if (props.parentSwiperInstance) {
    console.log('Calling slidePrev()');
    props.parentSwiperInstance.slidePrev();
  } else {
    console.error('parentSwiperInstance is null!');
  }
};

const goToNext = () => {
  console.log('Go to next clicked');
  if (props.parentSwiperInstance) {
    console.log('Calling slideNext()');
    props.parentSwiperInstance.slideNext();
  } else {
    console.error('parentSwiperInstance is null!');
  }
};
</script>