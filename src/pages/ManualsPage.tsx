import { Footer } from "../components/ui/footers/Footer";
import { BasicHeader } from "../components/ui/headers/BasicHeader";
import { MainHeader } from "../components/ui/headers/MainHeader";
import { AddManualFormButton } from "../components/ui/manual/AddManualFormButton";
import { ManualList } from "../components/ui/manual/ManualList";

export const ManualsPage = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <div className="flex items-center justify-between pb-6 pl-20 pr-20 pt-10">
        <h1 className="text-2xl text-gray-300 tracking-tighter">MANUALES</h1>
        <AddManualFormButton />
      </div>
      <ManualList />
      <Footer />
    </div>
  );
};
