<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import Navbar from '../components/shared/Navbar.vue'
import CoverCard from '../components/cover/CoverCard.vue';
import Classic from '../components/themes/Classic.vue';
import Modern from '../components/themes/Modern.vue';
import Gradient from '../components/themes/Gradient.vue';
import ButtonDownload from '../components/cover/button/ButtonDownload.vue';
import Slogan from '../components/shared/Slogan.vue';

const devIcons = 'https://raw.githubusercontent.com/devicons/devicon/master/devicon.json';
const selectedTag = ref('Programming');
const selectedIcon = ref('vuejs');
const selectedFont = ref('Montserrat');

const themes = {
  Classic,
  Modern,
  Gradient,
};

const inputData = reactive({
  title: 'Vue js 101: Introduction to Vue js for Beginner in Javascript from scratch',
  author: 'Ilham Afandi',
  tags: [
    'Programming',
    'Psychology',
    'Tech',
    'Art',
  ],
  website: 'afandilham.github.io',
  theme: 'Classic',
  color: '#75e19b',
  font: [
    'Montserrat',
    'Lato',
    'Quicksand',
    'Oswald'
  ]
});

const iconData = reactive({
  programming: [],
  psychology: [
    { value: 'icon-park-outline:pill', label: 'Pill' },
    { value: 'carbon:pills-add', label: 'Carbon Pill' },
    { value: 'healthicons:pills-3', label: 'Health Pill' },
  ],
  tech: [
    { value: 'carbon:machine-learning-model', label: 'Machine Learning' },
    { value: 'eos-icons:machine-learning-outlined', label: 'Machine Outline' },
    { value: 'icon-park-twotone:gate-machine', label: 'Gate Machine' },
    { value: 'carbon:machine-learning', label: 'Chip Machine' },
  ],
  art: [
    { value: 'dashicons:art', label: 'Art' },
    { value: 'map:art-gallery', label: 'Art Gallery' },
    { value: 'maki:art-gallery', label: 'Picture' },
  ],
});

const otherSelectedTag = computed(() => {
  if (selectedTag.value === 'Psychology') {
    return iconData.psychology;
  }

  if (selectedTag.value === 'Tech') {
    return iconData.tech;
  }

  if (selectedTag.value === 'Art') {
    return iconData.art;
  }
});

onMounted(() => {
  fetch(devIcons)
    .then(res => res.json())
    .then(data => {
      data.map(icon => {
        iconData.programming.push({ label: icon.name, value: icon.name });
      });
    });
}); 
</script>
<template>
  <Navbar />
  <main>
    <cover-card>
      <component 
        :is="themes[inputData.theme]"
        v-bind="{ 
          icon: selectedIcon,
          title: inputData.title,
          author: inputData.author,
          website: inputData.website,
          font: selectedFont,
          tag: selectedTag,
          color: inputData.color
        }" />
      <div class="absolute bottom-0 inset-x-0 flex justify-center">
        <button-download :idTheme="inputData.theme"></button-download>
      </div>
    </cover-card>
    <section class="my-6 bg-primary p-4 grid grid-cols-2 gap-8">
      <div class="ml-28">
        <base-textarea v-model="inputData.title" label="Post Title" type="text" placeholder="Post Title">
        </base-textarea>
        <base-input v-model="inputData.author" label="Author" type="text" placeholder="Author name">
        </base-input>
        <base-select v-model="selectedTag" label="Tags" :inputData="inputData.tags">
        </base-select>
      </div>
      <div class="mr-28">
        <div class="flex flex-col mt-1 mb-3 text-sm" v-if="selectedTag === 'Programming'">
          <label class="pb-2 font-semibold" for="programming">Icon</label>
          <v-select class="style-chooser" placeholder="Choose icon" label="value" v-model="selectedIcon"
            :options="iconData.programming" :reduce="programming => programming.value">
            <template #option="{ value }">
              {{ value }}
              <i :class='`devicon-${value}-plain`'></i>
            </template>
          </v-select>
        </div>
        <div class="flex flex-col mt-1 mb-3 text-sm" v-if="otherSelectedTag">
          <label class="pb-2 font-semibold" for="otherIcon">Icon</label>
          <v-select class="style-chooser" placeholder="Choose icon" v-model="selectedIcon" 
            :options="otherSelectedTag" :reduce="tag => tag.value" label="label">
            <template #option="{ value, label }">
              <span class="flex items-center gap-x-1">
                {{ label }}
                <Icon :icon="value" />
              </span>
            </template>
          </v-select>
        </div>
        <base-input v-model="inputData.website" label="Website (optional)" type="text" placeholder="Website name">
        </base-input>
        <span class="text-sm text-white font-semibold">Themes</span>
        <div class="mt-1 mb-3 text-sm flex gap-3">
          <base-radio v-model="inputData.theme" label="Classic" name="theme" checked>
          </base-radio>
          <base-radio v-model="inputData.theme" label="Modern" name="theme">
          </base-radio>
          <base-radio v-model="inputData.theme" label="Gradient" name="theme">
          </base-radio>
        </div>
        <div class="flex">
          <div class="flex flex-col mr-8">
            <span class="text-sm text-white font-semibold mb-2">Color</span>
            <label class="input-color" for="color">
              <input class="w-7 rounded-sm h-7" type="color" name="color" id="color" v-model="inputData.color">
              <span>{{ inputData.color }}</span>
            </label>
          </div>
          <div class="flex flex-col w-full">
            <base-select v-model="selectedFont" label="Font" :inputData="inputData.font">
            </base-select>
          </div>
        </div>
      </div>
    </section>
    <Slogan />
  </main>
</template>