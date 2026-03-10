import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";
import { useSubRace } from "../../api/manual/race/subRace/subRaceService";
import { EditSubRaceButton } from "../../components/race/subRace/buttons/EditSubRaceButton";
import { SubRacialTraitList } from "../../components/race/subRace/subRacialTraits/RacialTraitList";

export const SubRaceDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q") as string;

  const { data: SubRaceDetails, isLoading } = useSubRace.useGetById({
    id: id,
    includesSubRacialTraits: true,
  });

  console.log(SubRaceDetails);
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <main className="grow">
        <div className="flex items-center justify-between pb-6 pl-20 pr-20 pt-10">
          <h1 className="text-2xl text-gray-300 tracking-tighter flex items-center justify-between gap-1">
            {isLoading
              ? "CARGANDO DETALLES..."
              : `${SubRaceDetails?.name?.toUpperCase()}`}
          </h1>
          <div className="flex items-center gap-4">
            <EditSubRaceButton
              name={SubRaceDetails?.name ?? ""}
              description={SubRaceDetails?.description ?? ""}
              id={SubRaceDetails?.id ?? ""}
              manualId={SubRaceDetails?.manualId ?? ""}
              raceId={SubRaceDetails?.raceId ?? ""}
            />
          </div>
        </div>

        {!isLoading && SubRaceDetails && (
          <div className="px-10 lg:px-20 py-10 w-full flex justify-center flex-col">
            <div className="bg-black w-full max-w-7xl lg:flex shadow-2xl rounded-2xl overflow-hidden min-h-[60vh]">
              <div className="lg:w-1/2">
                <div
                  className="h-96 lg:h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://cdn.legit.ng/images/1120/7c39d7d170c73ee8.jpeg?v=1')",
                  }}
                ></div>
              </div>

              <div className="py-16 px-10 lg:p-20 flex flex-col justify-center lg:w-1/2 z-10 bg-[#222]">
                <h2 className="text-4xl lg:text-5xl text-gray-300 font-bold mb-6">
                  {SubRaceDetails.name}
                </h2>

                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed grow">
                  {SubRaceDetails.description}
                </p>
                <hr className="w-110 h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10" />
                <ul className="text-gray-300 grid grid-rows-2 grid-flow-col">
                  <li>{SubRaceDetails.subRacialTraits?.length ?? 0} rasgos</li>
                </ul>
              </div>
            </div>
            <SubRacialTraitList
              subRacialTraits={SubRaceDetails.subRacialTraits}
              manualId={SubRaceDetails.manualId}
              subRaceId={SubRaceDetails.id}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
