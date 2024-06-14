// plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            // primary: '6366F1', 
            // secondary: '', 
            accent: '6366F1', 
            // accent: '#2f855a', 
            error: '#F87171',
            info: '#60A5FA', 
            success: '#34D399', 
            warning: '#FBBF24', 
            background: '#edf2ff', 
            surface: '#edf2ff', 
            'on-background': '#2d3748', 
            'on-surface': '#2d3748', 
          },
        },
        dark: {
          dark: true,
          colors: {
            // primary: '', 
            // secondary: '', 
            accent: '6366F1', 
            // accent: '#2f855a',
            error: '#DC2626', 
            info: '#3B82F6', 
            success: '#22C55E', 
            warning: '#F59E0B', 
            background: '#0d2438',
            surface: '#0d2438', 
            'on-background': '#e2e8f0', 
            'on-surface': '#e2e8f0', 
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
