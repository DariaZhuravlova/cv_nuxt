<template>
  <div class="text-center">
    <h2>{{ $t('projects.technologies') }}</h2>
    <v-chip
      v-for="(tech, index) in technologies"
      :key="index"
      class="ma-2"
      size="x-large"
      label
    >
      <v-icon v-if="tech.icon" :icon="tech.icon" start></v-icon>
      {{ tech.name }}
    </v-chip>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const technologies = ref([
  { name: 'HTML', icon: 'mdi-language-html5' },
  { name: 'Pug' },
  { name: 'CSS', icon: 'mdi-language-css3' },
  { name: 'SCSS' },
  { name: 'Bootstrap', icon: 'mdi-bootstrap' },
  { name: 'Figma' },
  { name: 'JavaScript', icon: 'mdi-language-javascript' },
  { name: 'Nuxt', icon: 'mdi-nuxt' },
  { name: 'Vue', icon: 'mdi-vuejs' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
  { name: 'Tailwind' },
  { name: 'i18n' },
  { name: 'Axios' },
  { name: 'Pinia' },
  { name: 'Git', icon: 'mdi-git' },
  { name: 'GitHub', icon: 'mdi-github' },
  { name: 'Rest API' },
  { name: 'Postman' },
  { name: 'Jira', icon: 'mdi-jira' },
  { name: 'Trello', icon: 'mdi-trello' },
  { name: 'Pixel Perfect' },
  { name: 'TMetrics' }
]);
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
