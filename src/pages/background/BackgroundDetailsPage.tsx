import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/ui/footers/Footer";
import { BasicHeader } from "../../components/ui/headers/BasicHeader";
import { MainHeader } from "../../components/ui/headers/MainHeader";

import { useBackground } from "../../api/manual/background/backgroundService";

import { useBackgroundTrait } from "../../api/manual/background/backgroundTrait/backgroundTraitService";
import { usePersonalityTrait } from "../../api/manual/background/personalityTrait/personalityTraitService";
import { useIdeal } from "../../api/manual/background/ideal/idealService";
import { useBond } from "../../api/manual/background/bond/bondService";
import { useDefect } from "../../api/manual/background/defect/defectService";

import { GenericTraitSection } from "../../components/background/GenericTraitSection";
import { EditBackgroundButton } from "../../components/background/buttons/EditBackgroundButton";
import { DeleteBackgroundButton } from "../../components/background/buttons/DeleteBackgroundButton";

export const BackgroundDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q") as string;

  const { data: bgDetails, isLoading } = useBackground.useGetById({
    id: id,
    includesBackgroundTraits: true,
    includesPersonalityTraits: true,
    includesIdeals: true,
    includesBonds: true,
    includesDefects: true,
  });

  console.log(bgDetails?.description);

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <MainHeader />
      <BasicHeader />
      <main className="grow">
        {/* Cabecera del Trasfondo */}
        <div className="flex items-center justify-between pb-6 pl-20 pr-20 pt-10">
          <h1 className="text-2xl text-gray-300 tracking-tighter">
            {isLoading
              ? "CARGANDO TRASFONDO..."
              : `${bgDetails?.name?.toUpperCase()}`}
          </h1>
          {!isLoading && bgDetails && (
            <div className="flex items-center gap-4">
              <EditBackgroundButton
                id={bgDetails.id}
                name={bgDetails.name}
                description={bgDetails.description}
                manualId={bgDetails.manualId}
              />
              <DeleteBackgroundButton id={bgDetails.id} />
            </div>
          )}
        </div>

        {!isLoading && bgDetails && (
          <div className="px-10 lg:px-20 py-10 w-full flex justify-center flex-col max-w-7xl mx-auto">
            {/* Tarjeta Principal (Hero) */}
            <div className="bg-[#222] w-full p-10 shadow-2xl rounded-2xl border border-gray-800 mb-10">
              <h2 className="text-4xl text-gray-200 font-bold mb-6">
                {bgDetails.name}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed whitespace-pre-wrap">
                {bgDetails.description}
              </p>
            </div>

            {/* LAS 5 SECCIONES MÁGICAS */}
            <GenericTraitSection
              title="RASGOS DEL TRASFONDO"
              traits={bgDetails.backgroundTraits}
              manualId={bgDetails.manualId}
              backgroundId={bgDetails.id}
              useTraitModule={useBackgroundTrait}
            />

            <GenericTraitSection
              title="RASGOS DE PERSONALIDAD"
              traits={bgDetails.personalityTraits}
              manualId={bgDetails.manualId}
              backgroundId={bgDetails.id}
              useTraitModule={usePersonalityTrait}
            />

            <GenericTraitSection
              title="IDEALES"
              traits={bgDetails.ideals}
              manualId={bgDetails.manualId}
              backgroundId={bgDetails.id}
              useTraitModule={useIdeal}
            />

            <GenericTraitSection
              title="VÍNCULOS"
              traits={bgDetails.bonds}
              manualId={bgDetails.manualId}
              backgroundId={bgDetails.id}
              useTraitModule={useBond}
            />

            <GenericTraitSection
              title="DEFECTOS"
              traits={bgDetails.defects}
              manualId={bgDetails.manualId}
              backgroundId={bgDetails.id}
              useTraitModule={useDefect}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
