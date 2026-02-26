import { BasicHeader } from "../components/ui/headers/BasicHeader";
import { MainHeader } from "../components/ui/headers/MainHeader";
import { ManualList } from "../components/ui/manual/ManualList";

export const ManualsPage = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <h1 className="text-2xl text-gray-300 tracking-tighter flex items-center pb-6 pl-20 pt-10 gap-1">
        MANUALES
      </h1>
      <ManualList />
    </div>
  );
};
