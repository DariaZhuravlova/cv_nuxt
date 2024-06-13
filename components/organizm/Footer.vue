<template>
  <v-footer class="footer">
    <v-container>
      <v-row>
        <v-col class="footer-col" cols="12">
          <div class="footer-text">
            <p>Copyright © 2024. All rights reserved.</p>
          <p class="made-with-love">Made with <span class="heart">♡</span> by Daria Zhuravlova</p>
          </div>
          <atom-social></atom-social>         
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

@media (min-width: 768px) {
  .footer-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}
</style>

