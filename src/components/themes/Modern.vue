<script setup>
import  { Icon } from '@iconify/vue';

defineProps({
  icon: {
    type: String,
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
  <div id="Modern" class="relative" :style="{ fontFamily: font }">
    <div class="modern-background">
      <svg id="visual" viewBox="0 0 1600 840" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1600" height="840" fill="#002245"></rect><path d="M0 535L38.2 559C76.3 583 152.7 631 228.8 649.2C305 667.3 381 655.7 457.2 630.2C533.3 604.7 609.7 565.3 685.8 575.5C762 585.7 838 645.3 914.2 649.5C990.3 653.7 1066.7 602.3 1142.8 587C1219 571.7 1295 592.3 1371.2 610.3C1447.3 628.3 1523.7 643.7 1561.8 651.3L1600 659L1600 841L1561.8 841C1523.7 841 1447.3 841 1371.2 841C1295 841 1219 841 1142.8 841C1066.7 841 990.3 841 914.2 841C838 841 762 841 685.8 841C609.7 841 533.3 841 457.2 841C381 841 305 841 228.8 841C152.7 841 76.3 841 38.2 841L0 841Z" :fill="color" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
    </div>
    <div class="absolute w-full h-auto top-0 left-0 p-8">
      <div class="flex item-center justify-between">
        <div class="flex justify-center items-center bg-white p-5 rounded-full w-24 shadow-md">
          <i v-if="tag === 'Programming'" :class="`devicon-${icon}-plain text-5xl`"></i>
          <Icon v-else :icon="icon" width="40" height="40" />
        </div>
        <p class="text-white mt-3 text-xs" v-if="website">{{ website }}</p>
      </div>
      <div class="text-white mt-12">
        <h1 class="text-3xl font-semibold">{{ title }}</h1>
        <p class="text-sm pt-4">- {{ author }}</p>
      </div>
    </div>
  </div>
</template>