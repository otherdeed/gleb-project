<template>
  <header class="flex justify-between items-top">
    <div class="flex flex-col">
      <a href="/#глеб-закиров">Глеб Закиров</a>
    </div>
    <div class="flex items-end" :class="{ 'items-start': showFooter }">
      <a href="">Написать мне</a>
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