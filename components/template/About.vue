<template>
  <v-container>
    <div class="box">
      <div class="left">
        <h2>{{ $t('about.about') }}</h2>
        <p class="description">
        <span>{{ $t('about.hello') }}</span>
        <span> {{ $t('about.name') }}</span>
        <br>
        <span>{{ $t('about.me') }}</span>
        <span class="accent--text">{{ $t('about.position') }}</span>
        <span>{{ $t('about.description') }}</span>
        </p>
        <v-btn color="accent">
          <v-icon icon="mdi-download"></v-icon>
          <v-spacer></v-spacer>
          <a :href="'/assets/CV_Daria.pdf'" download="CV_Daria.pdf">{{ $t('about.downloadCV') }}</a>
        </v-btn>
      </div>
      <div class="right">
        <img src="/assets/Daria.jpg" alt="my photo">
      </div>
    </div>
    <molecule-tech />
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();




</script>

<style scoped>


.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;  
}

.left {
  text-align: center;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
 

img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 2s ease-in-out;
}

.v-btn {
  margin-top: 20px;
}

.description {
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600;
}

.accent--text {
  font-weight: bold;
  color: var(--accent-color);
}

a {
  text-decoration: none;
  color: inherit;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@media (min-width: 768px) {
  .box {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
