<template>
  <template-about></template-about>
  <template-projects></template-projects>
  <template-contacts></template-contacts>
  <organizm-footer></organizm-footer>
</template>

<style>

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

