<template>
  <div class="inputs">
    <input
      type="text"
      name=""
      id=""
      class="message-input"
      placeholder="Enter message"
      v-model="enteredMessage"
    />
    <button
      class="message-send"
      @click="emitMessageSend()"
      :disabled="newID < 0"
    >
      Send
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MessageModel } from "@/models/ChatModels";

export default defineComponent({
  name: "MessageInputs",
  emits: ["sendMessage"],
  data() {
    return {
      enteredMessage: "",
    };
  },

  props: {
    newID: {
      type: Number,
      required: true,
    },
  },

  methods: {
    emitMessageSend() {
      if (this.enteredMessage && this.enteredMessage.replaceAll(" ", "")) {
        const newMessage: MessageModel = {
          id: this.newID,
          message: this.enteredMessage,
          nextID: 1,
        };

        this.$emit("sendMessage", newMessage);
        this.enteredMessage = "";
        return;
      }
      alert("Enter your message.");
    },
  },
});
</script>

<style></style>
