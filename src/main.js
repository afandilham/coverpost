import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import 'vue-select/dist/vue-select.css';
import 'devicon/devicon.min.css';

import VueSelect from 'vue-select';
import BaseInput from './components/editor/BaseInput.vue';
import BaseSelect from './components/editor/BaseSelect.vue';
import BaseTextarea from './components/editor/BaseTextarea.vue';
import BaseRadio from './components/editor/BaseRadio.vue';

const app = createApp(App);
app
  .component('v-select', VueSelect)
  .component('base-input', BaseInput)
  .component('base-select', BaseSelect)
  .component('base-textarea', BaseTextarea)
  .component('base-radio', BaseRadio);

app.mount('#app')
