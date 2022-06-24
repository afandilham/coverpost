<script setup>
import  { Icon } from '@iconify/vue';

defineProps({
  icon: {
    type: [String, null],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  font: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="Classic" class="classic-bg flex justify-center items-center flex-col p-10" :style="{ backgroundColor: color, fontFamily: font }">
    <div class="classic-info">
      <div class="flex items-center bg-white p-5 rounded-full shadow-md">
        <i v-if="tag === 'Programming'" :class="`devicon-${icon}-plain text-5xl`"></i>
        <Icon v-else :icon="icon" width="40" height="40" />
      </div>
    </div>
    <div class="bg-white rounded-lg p-8 mt-4 shadow-md">
      <h1 class="font-semibold text-2xl">{{ title }}</h1>
      <span class="flex justify-end text-sm font-semibold pt-10">{{ author }}</span>
    </div>
    <span class="bg-white p-3 mt-10 text-xs font-semibold rounded-sm" v-if="website">{{ website }}</span>
  </div>
</template>