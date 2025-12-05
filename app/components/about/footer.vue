<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-3 md:gap-x-5">
    <span class="whitespace-nowrap">{{data.isAbout ? 'Имя' : 'Год'}}</span>
    <span>{{ data.year }}</span>

    <span class="whitespace-nowrap">{{data.isAbout ? 'Год' : 'Онлайн'}}</span>
    <span>{{ data.online }}</span>

    <span class="whitespace-nowrap mt-3 md:mt-5">{{data.isAbout ? 'О себе' : 'Задачи'}}</span>
    <span class="mt-3 md:mt-5">{{ data.tasks }}</span>

    <span class="whitespace-nowrap">{{data.isAbout ? 'Навыки' : 'Решение'}}</span>
    <span>{{ data.solution }}</span>

    <span class="whitespace-nowrap mt-3 md:mt-5">{{data.isAbout ? 'Проекты' : 'Результат'}}</span>
    <span class="mt-3 md:mt-5">{{ data.result }}</span>

    <span class="whitespace-nowrap">{{data.isAbout ? 'Компании' : 'Мнение'}}</span>
    <span>{{ data.opinion }}</span>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>