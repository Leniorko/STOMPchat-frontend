<template>
  <h1>Chat page</h1>
  <div class="chat">
    <message-list :messages="messages" :currentUser="username" />
    <message-inputs @sendMessage="sendMessage" :newID="nextMessageID" />
  </div>
</template>

<script lang="ts">
import MessageInputs from "@/components/MessageInputs.vue";
import MessageList from "@/components/MessagesList.vue";
import { MessageModel, MessagesInit } from "@/models/ChatModels";
import { computed, defineComponent } from "vue";
import SockJS from "sockjs-client";
import { Client, IStompSocket, StompSubscription } from "@stomp/stompjs";

export default defineComponent({
  components: { MessageInputs, MessageList },
  name: "ChatPage",
  data() {
    return {
      messages: [] as MessageModel[],
      nextMessageID: -1,
      sockJS: SockJS.prototype,
      stompClient: Client.prototype,
      stompSubscriptions: [StompSubscription.prototype],
      username: computed(() => {
        return this.$route.query.username as string;
      }),
    };
  },

  created() {
    const newSockJSConnection = new SockJS(
      "https://stomp-chat.herokuapp.com/messaging"
    );
    const newStompClient = new Client();
    newStompClient.webSocketFactory = () => newSockJSConnection as IStompSocket;

    newStompClient.onConnect = () => {
      this.stompSubscriptions.push(
        newStompClient.subscribe("/chat/setup", (configData) => {
          let body = JSON.parse(configData.body) as MessagesInit;
          this.nextMessageID = body.nextID;
        })
      );

      this.stompSubscriptions.push(
        newStompClient.subscribe("/chat/receive", (message) => {
          let messageData = JSON.parse(message.body) as MessageModel;
          this.messages.push(messageData);
          this.nextMessageID = messageData.nextID;
        })
      );

      this.sockJS = newSockJSConnection;
      this.stompClient = newStompClient;
    };

    newStompClient.activate();
  },

  methods: {
    sendMessage(message: MessageModel) {
      message.name = this.username;
      console.log(message);
      this.stompClient.publish({
        destination: "/send",
        body: JSON.stringify(message),
      });
    },
  },
});
</script>

<style>
.chat {
  max-width: 800px;
  margin: auto;
  max-height: 100vh;
}
</style>
