<template>
  <div class="loader-box">
    <div class="loader" border-color="accent"></div>
  </div>
</template>

<style scoped>
.loader-box {
  display: flex;  
  justify-content: center;
  align-items: center;
  padding: 200px;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>