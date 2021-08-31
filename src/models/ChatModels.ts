export interface MessageModel {
  id: number;
  name?: String;
  message: String;
  nextID: number;
}

export interface MessagesInit {
  nextID: number;
}
