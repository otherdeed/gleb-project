<template>
  <div class="grid grid-cols-[auto_1fr] gap-x-3 md:gap-x-5">
    <!-- Год/Онлайн -->
    <template v-if="!data.isAbout">
      <span class="whitespace-nowrap">Год</span>
      <span>{{ data.year }}</span>
      
      <span class="whitespace-nowrap">Онлайн</span>
      <component
        :is="data.online.link ? 'a' : 'span'"
        :href="data.online.link ? 'https://' + data.online.link : null"
        target="_blank"
        :class="[
          'inline-block',
          data.online.link 
            ? 'max-w-max' 
            : ''
        ]"
      >
        {{ data.online.text }}
      </component>
    </template>

    <!-- Задачи/Заметка -->
    <span class="whitespace-nowrap mt-3 md:mt-5">
      {{ data.isAbout ? 'Заметка' : 'Задачи' }}
    </span>
    <div class="mt-3 md:mt-5" v-html="data.tasks" />

    <!-- Решение/Навыки -->
    <span :class="['whitespace-nowrap', data.isAbout ? 'mt-3 md:mt-5' : '']">
      {{ data.isAbout ? 'Навыки' : 'Решение' }}
    </span>
    <span :class="data.isAbout ? 'mt-3 md:mt-5' : ''">
      {{ data.solution || '' }}
    </span>

    <!-- Команда/Проекты -->
    <template v-if="!data.isAbout">
      <span class="whitespace-nowrap mt-3 md:mt-5">Команда</span>
      <span class="mt-3 md:mt-5">{{ data.team }}</span>
    </template>

    <!-- Компании (только для isAbout) -->
    <template v-if="data.isAbout">
      <span class="whitespace-nowrap mt-3 md:mt-5">Компании</span>
      <span class="mt-3 md:mt-5">{{ data.companies || '' }}</span>
    </template>
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