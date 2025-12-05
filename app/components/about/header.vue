<template>
  <header class="flex justify-between items-top">
    <div class="flex flex-col" :class="{ 'order-2': showFooter }">
      <span>Глеб Закиров,</span>
      <span>диджитал-дизайнер</span>
    </div>
    <div class="flex items-end" :class="{ 'order-1 items-start': showFooter }">
      <a>Телеграм</a>,
      <a class="ml-1">Инстаграм</a>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  showFooter: {
    type: Boolean,
    default: true
  }
});
</script>