<template>
  <v-container>
    <h2 class="text-center">{{ $t('projects.projects') }}</h2>
    <v-row v-if="!isLoading">
      <v-col v-for="project in paginatedProjects" :key="project.id" cols="12" sm="6" md="6">
        <v-card class="project-card">
          <a :href="`/projects/${project.id}`" class="project-link">
            <!-- <v-card-title class="project-card-title">
              <v-icon size="48">{{ project.icon }}</v-icon>
              <h3>{{ project.name }}</h3>
            </v-card-title> -->
            <v-card-title class="project-card-title">
              <h3>{{ project.name }}</h3>
              <v-spacer></v-spacer>
              <div class="links">
                <a :href="project.website" target="_blank"><v-icon color="accent">mdi-web</v-icon></a>
                <a :href="project.github" target="_blank"><v-icon color="accent">mdi-github</v-icon></a>

              </div>
            </v-card-title>
            <v-card-text class="project-card-text">
              {{ $t(`projects.descriptions.${project.id}`) }}
            </v-card-text>
            <v-chip-group class="tech-chip-group">
              <v-chip v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</v-chip>
            </v-chip-group>
          </a>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <molecule-loader />
    </v-row>
    <v-pagination v-model="currentPage" :length="totalPages" @input="fetchProjects" />
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from '~/stores/store';

const projects = ref([]); // Список проектов
const currentPage = ref(1); // Текущая страница
const pageSize = 6; // Количество проектов на странице

const store = useStore();
const isLoading = computed(() => store.isLoading);

const totalPages = computed(() => Math.ceil(projects.value.length / pageSize));

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return projects.value.slice(startIndex, endIndex);
});

const fetchProjects = async () => {
  store.isLoading = true;
  try {
    const response = await fetch('/projects.json');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const fetchedProjects = await response.json();
    projects.value = fetchedProjects.reverse();
    store.isLoading = false;
  } catch (error) {
    console.error(error);
  } finally {
    store.isLoading = false;
  }
};

onMounted(fetchProjects);
</script>

<style scoped>
.text-center {
  text-align: center;
  /* margin-bottom: 20px; */
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border-radius: 10px;
  /* background-color: #fff; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  height: 100%;
  min-width: 300px;
  max-width: 500px;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  padding: 2px;
  background: linear-gradient(45deg, #A5B4FC, #6366F1);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* transform: translateY(-5px); */
}

.project-link {
  text-decoration: none;
  color: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  color: #6366F1;
  font-weight: bold;
}



.links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-card-text {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.tech-chip-group {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tech-chip-group v-chip {
  margin: 5px;
}

.v-pagination {
  margin-top: 40px;

}

@media (min-width: 768px) {
  .project-card-text {
    font-size: 20px;
  }
}
</style>
