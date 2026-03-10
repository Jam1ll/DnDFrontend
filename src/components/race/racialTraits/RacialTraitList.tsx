import { useState } from "react";
import { RacialTraitElement } from "./RacialTraitElement";
import { AddRacialTraitButton } from "./buttons/AddRacialTraitButton";
import type { RacialTraitResponseDTO } from "../../../api/manual/race/racialTrait/racialTraitService";
import { Modal } from "../../ui/Modal";

interface RacialTraitListProps {
  racialTraits: RacialTraitResponseDTO[] | undefined;
  manualId: string;
  raceId: string;
}

export const RacialTraitList = ({
  racialTraits,
  manualId,
  raceId,
}: RacialTraitListProps) => {
  const [selectedTrait, setSelectedTrait] =
    useState<RacialTraitResponseDTO | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl text-gray-300 tracking-tighter">RASGOS</h3>
        <AddRacialTraitButton manualId={manualId} raceId={raceId} />
      </div>

      {!racialTraits || racialTraits.length === 0 ? (
        <div className="bg-[#222] p-10 rounded-2xl border border-gray-800 flex justify-center shadow-lg">
          <p className="text-gray-400 text-lg">
            Aún no hay rasgos en tu biblioteca.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {racialTraits.map((trait) => (
            <RacialTraitElement
              key={trait.id}
              id={trait.id}
              name={trait.name}
              description={trait.description}
              manualId={trait.manualId || manualId}
              raceId={raceId}
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
