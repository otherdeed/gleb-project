<template>
  <Swiper
    :direction="'vertical'"
    :slides-per-view="1"
    :mousewheel="true"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide 
      v-for="(color, i) in slideColors" 
      :key="i"
      :style="{ backgroundColor: color }"
      class="slide"
    >
      Slide {{ i + 1 }}
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ref } from 'vue';

// Массив цветов для слайдов
const slideColors = ref([
  '#FF6B6B', // Красный
  '#4ECDC4', // Бирюзовый
  '#FFD166', // Желтый
  '#06D6A0', // Зеленый
  '#118AB2', // Синий
  '#EF476F', // Розовый
  '#073B4C', // Темно-синий
  '#7209B7', // Фиолетовый
  '#F3722C', // Оранжевый
]);

const modules = [Mousewheel, Pagination];
</script>

<style scoped>
.mySwiper {
  height: 100vh;
  width: 100%;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>