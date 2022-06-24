<script setup>
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';
import { Icon } from '@iconify/vue';

const props = defineProps({
  idTheme: {
    type: String,
    required: true,
  }
});


const saveToPng = async () => {
  const selectedThemes = document.getElementById(props.idTheme);
  toBlob(selectedThemes)
    .then(blob => {
      saveAs(blob, 'cover.png');
    });
};
</script>

<template>
  <button class="bg-secondary p-2 outline-none rounded-full hover:-translate-y-2 transition ease-out" @click="saveToPng">
    <Icon class="text-white" icon="bytesize:download" width="40" height="40" />
  </button>
</template>