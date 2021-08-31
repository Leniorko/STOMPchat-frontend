<template>
  <ul class="messages">
    <li v-for="message in messages" :key="message.id" class="message">
      {{ `${message.name}: ${message.message}` }}
    </li>
  </ul>
</template>

<script lang="ts">
import { MessageModel } from "@/models/ChatModels";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MessagesList",
  props: {
    messages: Object as PropType<Array<MessageModel>>,
  },
});
</script>

<style></style>
