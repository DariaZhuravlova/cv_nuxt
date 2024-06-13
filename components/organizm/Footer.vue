<template>
  <v-footer class="footer">
    <v-container>
      <v-row>
        <v-col class="footer-col" cols="12">
          <div class="footer-text">
            <p>Copyright © 2024. All rights reserved.</p>
          <p class="made-with-love">Made with <span class="heart">♡</span> by Daria Zhuravlova</p>
          </div>
          <div class="footer-icons" color="accent">
            <a href="https://github.com/DariaZhuravlova" target="_blank" class="footer-icon">
              <i class="mdi mdi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dariazhur/" target="_blank" class="footer-icon">
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/daria.zhuravlyova" target="_blank" class="footer-icon">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/daria_zhur/" target="_blank" class="footer-icon">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  padding: 20px 0;
  text-align: center;
}

.made-with-love {
  font-size: 14px;
}

.footer-icons {
  margin-top: 10px;
}

.footer-icon {
  color: inherit;
  margin-right: 10px;
  font-size: 24px;
}

.footer-icon:hover {
  color: #6366F1;
}

@media (min-width: 768px) {
  .footer-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-icon {
    font-size: 30px;
  }
}
</style>

