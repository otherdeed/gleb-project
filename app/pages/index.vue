<template>
  <div>
    <Swiper 
      ref="mainSwiperRef"
      :modules="modules" 
      :loop="true"
      :allow-touch-move="false"
      :no-swiping="true"
      :speed="300"
      class="mySwiper"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide 
        v-for="(item, index) in data" 
        :key="index"
        class="slide"
      >
        <Slide 
          :data="item" 
          :parent-swiper-instance="swiperInstance"
          :current-index="currentSlideIndex"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import { data } from '~/data';

const swiperInstance = ref(null);
const currentSlideIndex = ref(0);
const modules = [];

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  console.log('Main swiper instance set:', swiper);
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    currentSlideIndex.value = swiperInstance.value.activeIndex;
  }
};
</script>