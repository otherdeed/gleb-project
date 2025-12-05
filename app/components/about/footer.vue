<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-5">
    <span class="whitespace-nowrap">{{data.isAbout ? 'Имя' : 'Год'}}</span>
    <span>{{ data.year }}</span>

    <span class="whitespace-nowrap">{{data.isAbout ? 'Год' : 'Онлайн'}}</span>
    <span>{{ data.online }}</span>

    <span class="whitespace-nowrap mt-3">{{data.isAbout ? 'О себе' : 'Задачи'}}</span>
    <span class="mt-3">{{ data.tasks }}</span>

    <span class="whitespace-nowrap mt-3">{{data.isAbout ? 'Навыки' : 'Решение'}}</span>
    <span class="mt-3">{{ data.solution }}</span>

    <span class="whitespace-nowrap mt-3">{{data.isAbout ? 'Проекты' : 'Результат'}}</span>
    <span class="mt-3">{{ data.result }}</span>

    <span class="whitespace-nowrap mt-3">{{data.isAbout ? 'Компании' : 'Мнение'}}</span>
    <span class="mt-3">{{ data.opinion }}</span>
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