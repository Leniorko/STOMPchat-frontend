<template>
  <chat-page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatPage from "./pages/ChatPage.vue";

export default defineComponent({
  components: { ChatPage },
  name: "App",
});
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
