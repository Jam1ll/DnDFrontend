import { useState } from "react";
import type { SubRacialTraitResponseDTO } from "../../../../api/manual/race/subRace/subRacialTrait/subRacialTraitService";
import { Modal } from "../../../ui/Modal";
import { SubRacialTraitElement } from "./RacialTraitElement";
import { AddSubRacialTraitButton } from "./buttons/AddSubRacialTraitButton";

interface SubRacialTraitListProps {
  subRacialTraits: SubRacialTraitResponseDTO[] | undefined;
  manualId: string;
  subRaceId: string;
}

export const SubRacialTraitList = ({
  subRacialTraits,
  manualId,
  subRaceId,
}: SubRacialTraitListProps) => {
  const [selectedTrait, setSelectedTrait] =
    useState<SubRacialTraitResponseDTO | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl text-gray-300 tracking-tighter">RASGOS</h3>
        <AddSubRacialTraitButton manualId={manualId} subRaceId={subRaceId} />
      </div>

      {!subRacialTraits || subRacialTraits.length === 0 ? (
        <div className="bg-[#222] p-10 rounded-2xl border border-gray-800 flex justify-center shadow-lg">
          <p className="text-gray-400 text-lg">
            Aún no hay rasgos en tu biblioteca.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subRacialTraits.map((trait) => (
            <SubRacialTraitElement
              key={trait.id}
              id={trait.id}
              name={trait.name}
              description={trait.description}
              manualId={trait.manualId || manualId}
              subRaceId={subRaceId}
              onClick={() => setSelectedTrait(trait)}
            />
          ))}
        </ul>
      )}

      <Modal isOpen={!!selectedTrait} onClose={() => setSelectedTrait(null)}>
        {selectedTrait && (
          <div className="text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-3">
              {selectedTrait.name}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap wrap-break-word">
                {selectedTrait.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
