import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";
import { BackgroundList } from "../../components/background/BackgroundList";
import { AddBackgroundButton } from "../../components/background/buttons/AddBackgroundButton";

export const BackgroundsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <main className="grow">
        <div className="text-2xl text-gray-300 tracking-tighter flex items-center justify-between pb-6 pl-20 pr-20 pt-5 gap-1">
          <h1>TRASFONDOS</h1>
          <AddBackgroundButton />
        </div>
        <BackgroundList />
      </main>
      <Footer />
    </div>
  );
};
