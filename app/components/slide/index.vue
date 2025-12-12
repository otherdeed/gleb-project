<template>
  <div 
    :class="[
      'relative',
      isMobile 
        ? 'flex flex-col min-h-screen' 
        : 'grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1 h-screen overflow-hidden'
    ]"
  >     
    <div 
      ref="mainContentRef"
      :class="{
        'overflow-y-auto': !isMobile,
        'order-1 md:order-2 h-[70vh] sm:h-[40vh] md:h-full': !isMobile 
      }"
      class="bg-white w-full"
    >
      <div :class="isMobile ? 'h-[80vh]' : 'h-full'">
        <About 
          v-if="data"
          :data="data"
          :current-index="currentIndex"
          @next="$emit('next')"
          @prev="$emit('prev')"
          class="h-full"
        />
      </div>

      <div v-if="isMobile" class="w-full flex flex-col">
        <div 
          v-for="(slide, index) in data.slides"
          :key="index"
          class="w-full flex justify-center items-center bg-black"
        >  
          <img 
            :src="slide" 
            :alt="`Slide ${index + 1} - ${data.title}`"
            loading="eager"
            class="w-full h-auto object-cover" 
          >
        </div>
      </div>

      <div v-if="isMobile" class="h-[140px]">
        <About 
          v-if="data"
          :data="data"
          :current-index="currentIndex"
          @next="$emit('next')"
          @prev="$emit('prev')"
          :show-footer="false"
        />
      </div>
    </div>
    
    <div 
      v-if="!isMobile"
      class="overflow-y-auto 
            order-2 md:order-1
            h-[30vh] sm:h-[60vh] md:h-full"
    >
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
            <img 
              :src="slide" 
              :alt="`Slide ${index + 1} - ${data.title}`"
              loading="eager"
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

// --- Props ---
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  currentIndex: {
    type: Number,
    default: null
  }
});

const emit = defineEmits(['next', 'prev']);

// --- State and Refs ---
const innerSwiperRef = ref(null);
const innerSwiperInstance = ref(null);
const mainContentRef = ref(null); 

const modules = [Mousewheel];

// --- Responsive Logic ---
const screenWidth = ref(0);
const isMounted = ref(false);

const isMobile = computed(() => {
    if (!isMounted.value) return false; 
    return screenWidth.value < 768; 
});

const updateScreenWidth = () => {
  if (typeof window !== 'undefined') {
    screenWidth.value = window.innerWidth;
  }
};

// --- Swiper Logic ---
const onInnerSwiper = (swiper) => {
  innerSwiperInstance.value = swiper;
};

// Обработчик колесика мыши - только для Desktop/Tablet
const handleWheel = (event) => {
  if (isMobile.value || !innerSwiperInstance.value) return; 
  
  event.preventDefault();
  
  if (event.deltaY > 0) {
    innerSwiperInstance.value.slideNext();
  } else if (event.deltaY < 0) {
    innerSwiperInstance.value.slidePrev();
  }
};

// --- Lifecycle Hooks ---
onMounted(() => {
  isMounted.value = true;
  
  nextTick(() => {
    updateScreenWidth(); 
    
    window.addEventListener('resize', updateScreenWidth);
    document.addEventListener('wheel', handleWheel, { passive: false });
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
  document.removeEventListener('wheel', handleWheel);
});
</script>

<style scoped>
.slide {
  height: 100%;
  width: 100%;
}
</style>