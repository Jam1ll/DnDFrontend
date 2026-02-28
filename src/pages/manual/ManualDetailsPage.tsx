import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";
import { manualService } from "../../api/manual/manualService";
import { EditManualFormButton } from "../../components/ui/manual/EditManualFormButton";
import { useQuery } from "@tanstack/react-query";

export const ManualDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q") as string;

  const { data: manualDetails, isLoading } = useQuery({
    queryKey: ["manual", id],
    queryFn: async () => {
      const response = await manualService.getById({
        id,
        includesRaces: true,
        includesClasses: true,
        includesBackgrounds: true,
        includesSpells: true,
        includesFeats: true,
        includesSubRaces: true,
        includesSubClasses: true,
      });
      return response.data;
    },
    enabled: !!id,
  });

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <main className="grow">
        <div className="flex items-center justify-between pb-6 pl-20 pr-20 pt-10">
          <h1 className="text-2xl text-gray-300 tracking-tighter flex items-center justify-between gap-1">
            {isLoading
              ? "CARGANDO DETALLES..."
              : `${manualDetails?.name?.toUpperCase()}`}
          </h1>
          <EditManualFormButton
            name={manualDetails?.name ?? ""}
            description={manualDetails?.description ?? ""}
            id={manualDetails?.id ?? ""}
          />
        </div>

        {!isLoading && manualDetails && (
          <div className="px-10 lg:px-20 py-10 w-full flex justify-center">
            <div className="bg-black w-full max-w-7xl lg:flex shadow-2xl rounded-2xl overflow-hidden min-h-[60vh]">
              <div className="lg:w-1/2">
                <div
                  className="h-96 lg:h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images6.alphacoders.com/601/601698.jpg')",
                  }}
                ></div>
              </div>

              <div className="py-16 px-10 lg:p-20 flex flex-col justify-center lg:w-1/2 z-10 bg-[#222]">
                <h2 className="text-4xl lg:text-5xl text-gray-300 font-bold mb-6">
                  {manualDetails.name}
                </h2>

                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed grow">
                  {manualDetails.description}
                </p>
                <hr className="w-110 h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10" />
                <ul className="text-gray-300 grid grid-rows-2 grid-flow-col">
                  <li>{manualDetails.classes?.length ?? 0} clases</li>
                  <li>{manualDetails.subClasses?.length ?? 0} subclases</li>
                  <li>{manualDetails.races?.length ?? 0} razas</li>
                  <li>{manualDetails.subRaces?.length ?? 0} subrazas</li>
                  <li>{manualDetails.backgrounds?.length ?? 0} trasfondos</li>
                  <li>{manualDetails.feats?.length ?? 0} dotes</li>
                  <li>{manualDetails.spells?.length ?? 0} conjuros</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
