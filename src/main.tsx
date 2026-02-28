import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GOOGLE_CLIENT_ID =
  "42997531659-o0rk6iitqab29nslb8r6p09i3n9ikati.apps.googleusercontent.com";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*Libreria para manejar cache y peticiones de la API*/}
    <QueryClientProvider client={queryClient}>
      {/*Libreria para manejar la API de Google*/}
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {/*Libreria para manejar rutas*/}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
