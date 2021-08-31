<template>
  <h1>Login page</h1>
  <div class="login">
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter your name"
      v-model="username"
    />
    <button class="login__btn" @click="goToChat()">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      username: "",
    };
  },

  methods: {
    goToChat() {
      if (this.username && this.username.replaceAll(" ", "")) {
        this.$router.push({
          name: "Chat",
          query: { username: this.username },
        });
        return;
      }
      alert("Enter username");
    },
  },
});
</script>

<style></style>
