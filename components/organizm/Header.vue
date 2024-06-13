<template>
  <v-card>
    <v-layout>
      <v-app-bar  prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <Nuxt-Link to="/" class="icon-link">
          <v-toolbar-title color="accent">CV</v-toolbar-title>
        </Nuxt-Link>
        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <Nuxt-Link to="/about" class="icon-link">
            <v-btn text>{{ $t('about.about') }}</v-btn>
          </Nuxt-Link>
          <Nuxt-Link to="/projects" class="icon-link">
            <v-btn text>{{ $t('projects.projects') }}</v-btn>
          </Nuxt-Link>
          <Nuxt-Link to="/contact" class="icon-link">
            <v-btn text>{{ $t('contact.contact') }}</v-btn>
          </Nuxt-Link>
        </template>

        <v-btn icon="mdi-translate" variant="text" @click="toggleLanguage"></v-btn>
        <v-btn icon="mdi-theme-light-dark" variant="text" @click="toggleTheme"></v-btn>

      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary class="drawer">
        <v-list :items="items">
          <template v-for="item in items" :key="item.value">
            <Nuxt-Link :to="item.to" class="icon-link-drawer">
              <v-icon :icon="item.icon"></v-icon>
              <!-- <v-list-item prepend-icon :title="item.title" :value="item.value"></v-list-item> -->
              <v-list-item-content>{{ item.title }}</v-list-item-content>
            </Nuxt-Link>
          </template>
          <v-divider></v-divider>
          <atom-social></atom-social> 
        </v-list>
        
      </v-navigation-drawer>

      <v-main>
          <slot />
      </v-main>
      
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n';


const $t = useI18n().t

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawer = ref(false);
const group = ref(null);
const items = ref([
  { title: $t('about.about'), value: 'about', to: '/about', icon: 'mdi-information-outline' },
  { title: $t('projects.projects'), value: 'projects', to: '/projects', icon: 'mdi-folder-outline' },
  { title: $t('contact.contact'), value: 'contact', to: '/contact', icon: 'mdi-email-outline' },
]);

const { locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'uk' : 'en';
};

watch(locale, (newLocale) => {
  items.value = [
    { title: `${$t('about.about')}`, value: 'about', to: `/about` },
    { title: `${$t('projects.projects')}`, value: 'projects', to: `/projects` },
    { title: `${$t('contact.contact')}`, value: 'contact', to: `/contact` },
  ];
});

watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>

.drawer {
  padding: 20px;
}

.icon-link-drawer {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 600;
  gap: 10px;
}

.icon-link:hover, .icon-link-drawer:hover {
  color: var(--accent-color);
}
</style>
