export interface ServerToClientEvents {
  message: (message: string) => void; // Lägga till användarnamn i framtiden?
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  join: (room: string) => void;
  leave: (room: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
