<template>
  <v-container>
    <h2 class="text-center">{{ $t('contact.contact') }}</h2>
    <div class="contact-box">
      
      <div class="address">
        
        <a href="https://t.me/dariazhuravleva" target="_blank"><v-icon class="tg">mdi-send</v-icon> {{ $t('contact.contactTg') }}</a>
        <a href="mailto:dariazhur89@gmail.com" target="_blank"><v-icon>mdi-email</v-icon> {{ $t('contact.contactEmail') }}</a>
        
      </div>
      <div class="form">
      
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="formData.name" :label="$t('contact.name')" required></v-text-field>
          <v-text-field v-model="formData.email" :label="$t('contact.email')" type="email" required></v-text-field>
          <v-textarea v-model="formData.message" :label="$t('contact.message')" required></v-textarea>
          <v-btn type="submit" color="accent">{{ $t('contact.send') }}</v-btn>
        </v-form>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  const { name, email, message } = formData.value;
  // Здесь вы можете добавить код для отправки данных на ваш сервер и дальнейшей обработки
  console.log(`Имя: ${name}, Email: ${email}, Сообщение: ${message}`);
  // Очистка формы
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
};
</script>

<style scoped>
.contact-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.address {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.address a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.tg {
  transform: rotate(-30deg);
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
  .contact-box {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .address {
    flex-basis: 45%;
    font-size: 20px;
  } 
  .form {
    flex-basis: 50%;
  } 
}
</style>