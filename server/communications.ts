export interface ServerToClientEvents {
  message: (name: string, message: string) => void;
}

export interface ClientToServerEvents {
  message: (room: string, message: string) => void;
  join: (room: string, ack: () => void) => void;
  name: (name: string, ack: () => void) => void;
  leave: (room: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  room: string;
}

export interface Message {
  name: string;
  message: string;
}
