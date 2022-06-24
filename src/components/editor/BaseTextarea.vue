<script setup>
defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <label class="font-semibold text-xs md:text-sm capitalize" :for="label">{{ label }}</label>
  <textarea 
    v-bind="$attrs"
    :id="label"
    class="input mt-2"
    :value="modelValue"
    :name="label"
    required
    @input="$emit('update:modelValue', $event.target.value)"
    rows="5"
    cols="5">
  </textarea>
</template>