import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CharactersPage } from "../pages/CharactersPage";
import { CampaignsPage } from "../pages/CampaignsPage";
import { ManualsPage } from "../pages/manual/ManualsPage";
import { ManualDetailsPage } from "../pages/manual/ManualDetailsPage";
import { RaceDetailsPage } from "../pages/race/RaceDetailsPage";
import { RacesPage } from "../pages/race/RacesPage";
import { SubRaceDetailsPage } from "../pages/race/SubRaceDetailsPage";
import { BackgroundDetailsPage } from "../pages/background/BackgroundDetailsPage";
import { BackgroundsPage } from "../pages/background/BackgroundsPage";
import { FeatsPage } from "../pages/feat/FeatsPage";
import { SpellsPage } from "../pages/spell/SpellsPage";

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
      <Route path="/subrace-details" element={<SubRaceDetailsPage />} />
      <Route path="/backgrounds" element={<BackgroundsPage />} />
      <Route path="/background-details" element={<BackgroundDetailsPage />} />
      <Route path="/feats" element={<FeatsPage />} />
      <Route path="/spells" element={<SpellsPage />} />
    </Routes>
  );
};
