<template>
  <header class="flex justify-between items-center">
    <button 
      @click="goToPrevious"
      class="hover:opacity-70 transition-opacity cursor-pointer"
    >
      ← {{ data.previousProject }}
    </button>
    
    <span class="hidden md:block">{{ data.title }}</span>
    
    <button 
      @click="goToNext"
      class="hover:opacity-70 transition-opacity cursor-pointer"
    >
      {{ data.nextProject }} →
    </button>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

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
  }
});

const emit = defineEmits(['next', 'prev']);

const goToPrevious = () => {
  if (props.parentSwiperInstance) {
    props.parentSwiperInstance.slidePrev();
  } else {
    emit('prev'); // Используем emit если нет parentSwiperInstance
  }
};

const goToNext = () => {
  if (props.parentSwiperInstance) {
    props.parentSwiperInstance.slideNext();
  } else {
    emit('next'); // Используем emit если нет parentSwiperInstance
  }
};
</script>