import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";
import { CampaignsPage } from "./pages/CampaignsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
      </Routes>
    </>
  );
}
