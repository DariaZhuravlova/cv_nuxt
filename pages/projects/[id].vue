<template>
  <v-container>
    <div v-if="project" class="box">
    <h1>{{ project.name }}</h1>
    <a :href="project.website" target="_blank">
      <v-img :src="project.image" ></v-img>
    </a>
    <h3>{{ $t(`projects.descriptions.${project.id}`) }}</h3>
    <h2>{{ $t('projects.technologies') }}:</h2>
    <v-chip-group>
      <v-chip v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</v-chip>
    </v-chip-group>
  </div>
  <div v-else>
    <molecule-loader />
  </div>
  </v-container>
  <organizm-footer></organizm-footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const project = ref(null);
const route = useRoute();

onMounted(async () => {
  const projectId = route.params.id;
  if (!projectId) {
    console.error('Project ID is missing in the route parameters.');
    return;
  }

  try {
    const response = await fetch(`/projects.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projects = await response.json();
    project.value = projects.find(proj => proj.id === Number(projectId));
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

a {
  display: block;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;

  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>


