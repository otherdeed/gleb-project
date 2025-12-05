<template>
  <div class="grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 h-screen" ref="containerRef">
    <div class="overflow-y-auto bg-white 
                order-1 md:order-2
                h-[70vh] sm:h-[40vh] md:h-full">
      <About />
    </div>
    <div class="overflow-y-auto 
                order-2 md:order-1
                h-[30vh] sm:h-[60vh] md:h-full">
      <Swiper
        ref="swiperRef"
        :direction="'vertical'"
        :slides-per-view="1"
        :mousewheel="{
          forceToAxis: true,
          releaseOnEdges: true,
        }"
        :loop="true"
        :modules="modules"
        class="h-full w-full"
        @swiper="onSwiper"
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
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { ref, onMounted, onUnmounted } from 'vue';

// Рефы
const containerRef = ref(null);
const swiperRef = ref(null);
const swiperInstance = ref(null);

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

const modules = [Mousewheel];

// Сохраняем инстанс свайпера
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

// Обработчик колесика мыши для всей страницы
const handleWheel = (event) => {
  if (!swiperInstance.value) return;
  
  event.preventDefault();
  
  if (event.deltaY > 0) {
    // Прокрутка вниз - следующий слайд
    swiperInstance.value.slideNext();
  } else if (event.deltaY < 0) {
    // Прокрутка вверх - предыдущий слайд
    swiperInstance.value.slidePrev();
  }
};

// Добавляем обработчик на весь документ
onMounted(() => {
  // Обработчик для всей страницы
  document.addEventListener('wheel', handleWheel, { passive: false });
  
  // Также добавляем на контейнер лайаута на всякий случай
  if (containerRef.value) {
    containerRef.value.addEventListener('wheel', handleWheel, { passive: false });
  }
});

// Убираем обработчики при размонтировании
onUnmounted(() => {
  document.removeEventListener('wheel', handleWheel);
  if (containerRef.value) {
    containerRef.value.removeEventListener('wheel', handleWheel);
  }
});
</script>

<style scoped>
.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}
</style>