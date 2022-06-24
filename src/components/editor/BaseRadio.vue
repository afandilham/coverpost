<script setup>
import { computed } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input-radio">
    <input
      type="radio" 
      v-bind="$attrs" 
      :name="name" 
      :id="label" 
      :value="label" 
      @input="$emit('update:modelValue', $event.target.value)">
    <label class="text-xs text-dark capitalize pl-1 cursor-pointer" :for="label">{{ label }}</label>
  </div>
</template>