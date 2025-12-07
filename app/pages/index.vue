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
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { data } from '~/data';

const currentIndex = ref(0);

// Функция для получения индекса слайда по хешу
const getIndexFromHash = () => {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return 0;
  
  // Пытаемся найти слайд по названию проекта в хеше
  const index = data.findIndex(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === hash.toLowerCase()
  );
  
  // Если не нашли по названию, пробуем по индексу
  if (index === -1 && !isNaN(parseInt(hash))) {
    const numIndex = parseInt(hash);
    if (numIndex >= 0 && numIndex < data.length) {
      return numIndex;
    }
  }
  
  return index !== -1 ? index : 0;
};

// Функция для установки хеша
const setHashFromIndex = (index) => {
  if (index < 0 || index >= data.length) return;
  
  const slideTitle = data[index].title;
  const hash = slideTitle.toLowerCase().replace(/\s+/g, '-');
  window.history.replaceState(null, null, `#${hash}`);
};

// Инициализация хеша при загрузке
const initHash = () => {
  const index = getIndexFromHash();
  currentIndex.value = index;
  setHashFromIndex(index);
};

// Функции для навигации
const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % data.length;
  setHashFromIndex(currentIndex.value);
};

const goToPrev = () => {
  currentIndex.value = (currentIndex.value - 1 + data.length) % data.length;
  setHashFromIndex(currentIndex.value);
};

const goToSlide = (index) => {
  if (index >= 0 && index < data.length) {
    currentIndex.value = index;
    setHashFromIndex(index);
  }
};

// Навигация по клавишам
const handleKeyDown = (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    goToNext();
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    goToPrev();
  }
};

// Обработчик изменения хеша
const handleHashChange = () => {
  const newIndex = getIndexFromHash();
  if (newIndex !== currentIndex.value) {
    currentIndex.value = newIndex;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('hashchange', handleHashChange);
  
  // Инициализируем хеш при монтировании
  if (!window.location.hash) {
    setHashFromIndex(0);
  } else {
    initHash();
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('hashchange', handleHashChange);
});

// Следим за изменениями currentIndex и обновляем хеш
watch(currentIndex, (newIndex) => {
  setHashFromIndex(newIndex);
});

// Экспортируем функции навигации
defineExpose({
  goToNext,
  goToPrev,
  goToSlide,
  currentIndex
});
</script>