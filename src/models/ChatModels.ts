export interface MessageModel {
  id: number;
  name?: string;
  message: string;
  nextID: number;
}

export interface MessagesInit {
  nextID: number;
}
