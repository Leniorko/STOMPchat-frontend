<template>
  <ul class="messages">
    <li
      v-for="message in messages"
      :key="message.id"
      :class="
        'messages__container ' +
        (currentUser === message.name ? 'messages__container--sent' : '')
      "
    >
      <p class="messages__username">{{ message.name }}</p>
      <p class="messages__message">{{ message.message }}</p>
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
    currentUser: String,
  },
});
</script>

<style>
.messages {
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 85vh;
  overflow-y: scroll;
}

.messages__container {
  display: flex;
  justify-content: space-between;
  background-color: rgba(22, 74, 218, 0.562);
}

.messages__container--sent {
  flex-direction: row-reverse;
  background-color: rgba(22, 178, 218, 0.562);
}
</style>
