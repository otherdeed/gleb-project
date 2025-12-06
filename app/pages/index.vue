<template>
  <div class="relative w-full h-screen">
    <!-- Только текущий слайд в DOM (самый производительный вариант) -->
    <Slide 
      :key="currentIndex"
      :data="data[currentIndex]"
      :current-index="currentIndex"
      @next="goToNext"
      @prev="goToPrev"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { data } from '~/data';

const currentIndex = ref(0);

// Функции для навигации
const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % data.length;
};

const goToPrev = () => {
  currentIndex.value = (currentIndex.value - 1 + data.length) % data.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Навигация по клавишам
const handleKeyDown = (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    goToNext();
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    goToPrev();
  }
};


onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

// Экспортируем функции навигации
defineExpose({
  goToNext,
  goToPrev,
  goToSlide,
  currentIndex
});
</script>