<!-- Slide.vue -->
<template>
  <div class="grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 h-screen relative">
    <div class="flex flex-col justify-between p-3 absolute left-0 top-0 z-10 min-h-screen">
      <div class="flex flex-col">
        <span>Глеб Закиров,</span>
        <span>диджитал-дизайнер</span>
      </div>
      <div class="flex flex-col">
        <a>Телеграм</a>
        <a>Инстаграм</a>
      </div>
    </div>
    <div class="overflow-y-auto bg-white 
                order-1 md:order-2
                h-[70vh] sm:h-[40vh] md:h-full">
      <About 
        v-if="parentSwiperInstance"
        :data="data"
        :parent-swiper-instance="parentSwiperInstance"
      />
    </div>
    <div class="overflow-y-auto 
                order-2 md:order-1
                h-[30vh] sm:h-[60vh] md:h-full">
      <Swiper
        ref="innerSwiperRef"
        :direction="'vertical'"
        :slides-per-view="1"
        :speed="1000"
        :mousewheel="{
          forceToAxis: true,
          releaseOnEdges: true,
        }"
        :loop="true"
        :modules="modules"
        class="h-full w-full"
        @swiper="onInnerSwiper"
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

const innerSwiperRef = ref(null);
const innerSwiperInstance = ref(null);
const containerRef = ref(null);

const slideColors = ref([
  '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2',
  '#EF476F', '#073B4C', '#7209B7', '#F3722C'
]);

const modules = [Mousewheel];

// Сохраняем инстанс внутреннего свайпера
const onInnerSwiper = (swiper) => {
  innerSwiperInstance.value = swiper;
};

// Обработчик колесика мыши только для внутреннего слайдера
const handleWheel = (event) => {
  if (!innerSwiperInstance.value) return;
  
  event.preventDefault();
  
  if (event.deltaY > 0) {
    innerSwiperInstance.value.slideNext();
  } else if (event.deltaY < 0) {
    innerSwiperInstance.value.slidePrev();
  }
};

onMounted(() => {
  document.addEventListener('wheel', handleWheel, { passive: false });
  if (containerRef.value) {
    containerRef.value.addEventListener('wheel', handleWheel, { passive: false });
  }
});

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
  justify-content: center;
}
</style>