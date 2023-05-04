import React from "react";
import ReactDOM from "react-dom/client";
import { io, Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../server/communications";
import App from "./App";
import "./index.css";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
