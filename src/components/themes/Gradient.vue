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
  <div id="Gradient" class="relative" :style="{ fontFamily: font }">
    <div class="gradient-background">
      <svg id="visual" viewBox="0 0 1600 840" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="268" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="1600" height="840" fill="#0039CA"></rect><g filter="url(#blur1)"><circle cx="1097" cy="828" fill="#607AFF" r="596"></circle><circle cx="1362" cy="359" fill="#0039CA" r="596"></circle><circle cx="651" cy="477" fill="#607AFF" r="596"></circle><circle cx="192" cy="493" fill="#607AFF" r="596"></circle><circle cx="1545" cy="596" fill="#0039CA" r="596"></circle><circle cx="861" cy="246" :fill="color" r="596"></circle></g></svg>
    </div>
    <div class="absolute w-full h-auto top-0 left-0 p-8">
      <div class="mx-auto flex justify-center items-center bg-white p-5 rounded-full w-24 shadow-md">
        <i v-if="tag === 'Programming'" :class="`devicon-${icon}-plain text-5xl`"></i>
        <Icon v-else :icon="icon" width="40" height="40" />
      </div>
      <h1 class="text-center text-white text-3xl font-semibold my-12 rounded-md">{{ title }}</h1>
      <p class="text-center text-lg text-white font-semibold">{{ author }}</p>
      <span class="flex justify-end mt-10 text-xs text-white">{{ website }}</span>
    </div>
  </div>
</template>