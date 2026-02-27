import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";
import { manualService } from "../../api/manual/manualService";
import { type ManualResponseDTO } from "../../api/manual/ManualResponseDTO";
import { useEffect, useState } from "react";

export const ManualDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const [manualDetails, setManualDetails] = useState<ManualResponseDTO>();
  const [isLoading, setIsLoading] = useState(true);

  const id = searchParams.get("q") as string;

  useEffect(() => {
    const fetchManualDetails = async () => {
      if (!id) return;

      try {
        setIsLoading(true);

        const response = await manualService.getById({
          id,
          includesRaces: true,
          includesClasses: true,
          includesBackgrounds: true,
          includesSpells: true,
          includesFeats: true,
        });
        setManualDetails(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchManualDetails();
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <main className="grow">
        <div className="flex items-center justify-between pb-6 pl-20 pr-20 pt-10">
          <h1 className="text-2xl text-gray-300 tracking-tighter">
            {isLoading
              ? "CARGANDO DETALLES..."
              : `${manualDetails?.name?.toUpperCase()}`}
          </h1>
        </div>

        {!isLoading && manualDetails && (
          <div className="px-20 text-white">
            <p className="text-gray-400">{manualDetails.description}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
