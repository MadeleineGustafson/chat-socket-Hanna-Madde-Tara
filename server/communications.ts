export interface ServerToClientEvents {
  message: (name: string, message: string) => void; // Lägga till användarnamn i framtiden?
  roomCreated: (room: string) => void; 
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  join: (room: string, ack: () => void) => void;
  name: (name: string, ack: () => void) => void;
  create: (room: string, ack: () => void) => void;
  leave: (room: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  room: string;
}
