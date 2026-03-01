import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CharactersPage } from "../pages/CharactersPage";
import { CampaignsPage } from "../pages/CampaignsPage";
import { ManualsPage } from "../pages/manual/ManualsPage";
import { ManualDetailsPage } from "../pages/manual/ManualDetailsPage";
import { RaceDetailsPage } from "../pages/race/RaceDetailsPage";
import { RacesPage } from "../pages/race/RacesPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/campaigns" element={<CampaignsPage />} />
      <Route path="/manuals" element={<ManualsPage />} />
      <Route path="/manual-details" element={<ManualDetailsPage />} />
      <Route path="/races" element={<RacesPage />} />
      <Route path="/race-details" element={<RaceDetailsPage />} />
    </Routes>
  );
};
