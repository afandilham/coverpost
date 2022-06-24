<script setup>
defineProps({
  label: {
    type: String,
    default: '',
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
  <label class="font-semibold text-xs md:text-sm capitalize" :for="label">{{ label }}</label>
  <input 
    v-bind="$attrs"
    :id="label"
    class="input my-2"
    :value="modelValue"
    :name="label"
    required
    @input="$emit('update:modelValue', $event.target.value)">
</template>