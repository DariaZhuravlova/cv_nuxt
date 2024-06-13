<template>
  <template-about></template-about>
  <template-projects></template-projects>
  <template-contacts></template-contacts>
  <organizm-footer></organizm-footer>
</template>

<style>

:root {
  --accent-color: #6366F1;
  --accent-color-hover: #4F46E5;
  --bg-color: #f9fafb;
  --text-color: #1f2937;
  --text-color-hover: #374151;
  --text-color-light: #6b7280;
  --text-color-light-hover: #9ca3af;
}

body {
  font-family: 'Inter', sans-serif;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

.v-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
}

@media (min-width: 768px) {
  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }
  .v-container {
    padding: 40px;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  p {
    font-size: 20px;
  }
  .v-container {
    padding: 40px 80px;
  }
}

</style>

