import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { io } from "socket.io-client";
import App from "./App";
import "./index.css";

export const socket = io("ws://localhost:3000");

import StartPage from "./Pages/StartPage";
import WelcomePage from "./Pages/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/startpage" element={<StartPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
