<!-- Slide.vue -->
<template>
  <div class="grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 h-screen relative">
    <div class="hidden md:flex flex-col justify-between p-3 md:p-5 absolute left-0 top-0 z-10 min-h-screen text-white">
      <div class="flex flex-col">
        <span>Глеб Закиров,</span>
        <span>диджитал-дизайнер</span>
      </div>
      <div class="flex items-start">
        <a>Телеграм</a>,
        <a class="ml-1">Имеил</a>
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
          v-for="(slide, index) in data.slides" 
          :key="index"
          class="slide"
        >
          <div class="relative w-full h-full">
            <!-- Основное изображение -->
            <img 
              :src="slide" 
              :alt="`Slide ${index + 1} - ${data.title}`"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
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
  height: 100%;
  width: 100%;
}
</style>