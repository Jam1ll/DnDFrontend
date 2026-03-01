import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";
import { useRace } from "../../api/manual/race/raceService";
import { EditRaceButton } from "../../components/ui/race/EditRaceButton";
import { DeleteRaceButton } from "../../components/ui/race/DeleteRaceButton";

export const RaceDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q") as string;

  const { data: RaceDetails, isLoading } = useRace.useGetById({
    id: id,
    includesTraits: true,
    includesSubRaces: true,
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
              : `${RaceDetails?.name?.toUpperCase()}`}
          </h1>
          <div className="flex items-center gap-4">
            <EditRaceButton
              name={RaceDetails?.name ?? ""}
              description={RaceDetails?.description ?? ""}
              id={RaceDetails?.id ?? ""}
              manualId={""}
            />
            <DeleteRaceButton id={RaceDetails?.id ?? ""} />
          </div>
        </div>

        {!isLoading && RaceDetails && (
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
                  {RaceDetails.name}
                </h2>

                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed grow">
                  {RaceDetails.description}
                </p>
                <hr className="w-110 h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10" />
                <ul className="text-gray-300 grid grid-rows-2 grid-flow-col">
                  <li>{RaceDetails.racialTraits?.length ?? 0} rasgos</li>
                  <li>{RaceDetails.subRaces?.length ?? 0} subrazas</li>
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
