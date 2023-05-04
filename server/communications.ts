export interface ServerToClientEvents {
  message: (message: string) => void; // Lägga till användarnamn i framtiden?
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  join: (join: string) => void;
  leave: (leave: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
