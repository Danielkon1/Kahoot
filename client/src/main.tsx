import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import SignUp from "./pages/SignUp.tsx";
import User from "./pages/User.tsx";
import Game from "./pages/Game.tsx";
import GameCreation from "./pages/GameCreation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/create-game",
    element: <GameCreation />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
