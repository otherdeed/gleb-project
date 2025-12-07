<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-3 md:gap-x-5">
    <span class="whitespace-nowrap">{{data.isAbout ? 'Имя' : 'Год'}}</span>
    <span>{{ data.year }}</span>

    <span v-if="!data.isAbout" class="whitespace-nowrap">{{data.isAbout ? 'Год' : 'Онлайн'}}</span>
    <span v-if="data.isAbout"></span>
    <span v-if="data.isAbout"></span>
    <span v-if="!data.isAbout">{{ data.online }}</span>

    <span class="whitespace-nowrap mt-3 md:mt-5">{{data.isAbout ? 'Пара слов' : 'Задачи'}}</span>
    <div class="mt-3 md:mt-5" v-html="data.tasks" />

    <span :class="`whitespace-nowrap ${data.isAbout ? 'mt-3 md:mt-5' : ''}`">{{data.isAbout ? 'Навыки' : 'Решение'}}</span>
    <span :class="data.isAbout ? 'mt-3 md:mt-5' : ''">{{ data.solution }}</span>

    <span v-if="!data.isAbout" class="whitespace-nowrap mt-3 md:mt-5">{{data.isAbout ? 'Проекты' : 'Результат'}}</span>
    <span v-if="!data.isAbout" class="mt-3 md:mt-5">{{ data.result }}</span>
    <span v-if="!data.isAbout"></span>
    <span v-if="!data.isAbout"></span>

    <span :class="`whitespace-nowrap ${data.isAbout ? 'mt-3 md:mt-5' : ''}`">{{data.isAbout ? 'Компании' : 'Мнение'}}</span>
    <span :class="data.isAbout ? 'mt-3 md:mt-5' : ''">{{ data.opinion }}</span>
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