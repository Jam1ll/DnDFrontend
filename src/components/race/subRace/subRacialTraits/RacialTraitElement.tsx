import type { SubRacialTraitResponseDTO } from "../../../../api/manual/race/subRace/subRacialTrait/subRacialTraitService";
import { DeleteSubRacialTraitButton } from "./buttons/DeleteSubRacialTraitButton";
import { EditSubRacialTraitButton } from "./buttons/EditSubRacialTraitButton";

interface SubRacialTraitElementProps extends SubRacialTraitResponseDTO {
  subRaceId: string;
  onClick: () => void;
}

export const SubRacialTraitElement = ({
  id,
  name,
  description,
  manualId,
  subRaceId,
  onClick,
}: SubRacialTraitElementProps) => {
  return (
    <li
      onClick={onClick}
      className=" bg-[#222] p-6 rounded-xl shadow-lg cursor-pointer hover:bg-[#2a2a2a] transition-all duration-300 border border-gray-800 hover:border-gray-500 hover:-translate-y-1 group flex flex-col gap-3 relative"
    >
      <div className="flex justify-between items-start">
        <h4 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
          {name}
        </h4>

        <div className="flex gap-2">
          <EditSubRacialTraitButton
            id={id}
            name={name}
            description={description}
            manualId={manualId}
            subRaceId={subRaceId}
          />
          <DeleteSubRacialTraitButton id={id} />
        </div>
      </div>

      <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed wrap-break-word">
        {description}
      </p>
      <span className="text-xs text-blue-400 font-semibold mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Ver detalles &rarr;
      </span>
    </li>
  );
};
