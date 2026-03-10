import { useState } from "react";
import { Modal } from "../../ui/Modal";
import type { SubRaceResponseDTO } from "../../../api/manual/race/subRace/subRaceService";
import { SubRaceElement } from "./SubRaceElement";
import { AddSubRaceButton } from "./buttons/AddSubRaceButton";

interface SubRaceListProps {
  SubRaces: SubRaceResponseDTO[] | undefined;
  manualId: string;
  raceId: string;
  includesSubRacialTraits: boolean;
}

export const SubRaceList = ({
  SubRaces,
  manualId,
  raceId,
}: SubRaceListProps) => {
  const [selectedSubRace, setSelectedSubRace] =
    useState<SubRaceResponseDTO | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl text-gray-300 tracking-tighter">SUBRAZAS</h3>
        <AddSubRaceButton manualId={manualId} raceId={raceId} />
      </div>

      {!SubRaces || SubRaces.length === 0 ? (
        <div className="bg-[#222] p-10 rounded-2xl border border-gray-800 flex justify-center shadow-lg">
          <p className="text-gray-400 text-lg">
            Aún no hay subrazas en tu biblioteca.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SubRaces.map((SubRace) => (
            <SubRaceElement
              key={SubRace.id}
              id={SubRace.id}
              name={SubRace.name}
              description={SubRace.description}
              manualId={SubRace.manualId || manualId}
              raceId={raceId}
            />
          ))}
        </ul>
      )}

      <Modal
        isOpen={!!selectedSubRace}
        onClose={() => setSelectedSubRace(null)}
      >
        {selectedSubRace && (
          <div className="text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-3">
              {selectedSubRace.name}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap wrap-break-word">
                {selectedSubRace.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
