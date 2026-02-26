import { BasicHeader } from "../components/ui/headers/BasicHeader";
import { Footer } from "../components/ui/footers/Footer";
import { HomePageMainCard } from "../components/ui/home/HomePageMainCard";
import { HomePageSecondaryCard } from "../components/ui/home/HomePageSecondaryCard";
import { HomePageTerciaryCard } from "../components/ui/home/HomePageTerciaryCard";
import { MainHeader } from "../components/ui/headers/MainHeader";

export const HomePage = () => {
  const idToken = localStorage.getItem("idToken");
  const name = localStorage.getItem("name");
  console.log("idToken: ", idToken);
  console.log("name: ", name);
  return (
    <div className="min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <h1 className="text-2xl text-gray-300 tracking-tighter flex items-center pb-6 pl-20 pt-10 gap-1">
        INICIO
      </h1>
      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Columna izquierda */}
        <div className="pl-18 lg:col-span-2 h-full">
          <HomePageMainCard />
        </div>
        {/* Columna derecha */}
        <div className="flex flex-col gap-6 h-full pr-18">
          <div className="flex-1">
            <HomePageSecondaryCard />
          </div>
          <div className="flex-1">
            <HomePageTerciaryCard />
          </div>
        </div>
      </div>
      <div className="pt-25">
        <Footer />
      </div>
    </div>
  );
};
