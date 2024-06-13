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
            warning: '#FBBF24', // Yellow
            background: '#f7fafc', // Light Grey
            surface: '#f7fafc', // White
            'on-background': '#2d3748', // Dark Grey for text
            'on-surface': '#2d3748', // Dark Grey for text
          },
        },
        dark: {
          dark: true,
          colors: {
            // primary: '', 
            // secondary: '', 
            accent: '6366F1', 
            // accent: '#2f855a',
            error: '#DC2626', // Dark Red
            info: '#3B82F6', // Blue
            success: '#22C55E', // Green
            warning: '#F59E0B', // Dark Yellow
            background: '#0d2438', // Very Dark Grey
            surface: '#0d2438', // Dark Grey
            'on-background': '#e2e8f0', // Very Light Grey for text
            'on-surface': '#e2e8f0', // Very Light Grey for text
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
