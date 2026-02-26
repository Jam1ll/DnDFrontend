import { BasicHeader } from "../components/ui/headers/BasicHeader";
import { MainHeader } from "../components/ui/headers/MainHeader";

export const CharactersPage = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <h1>Characters Page</h1>
    </div>
  );
};
