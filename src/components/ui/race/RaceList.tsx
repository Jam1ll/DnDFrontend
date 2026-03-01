import {
  useRace,
  type RaceResponseDTO,
} from "../../../api/manual/race/raceService";
import { RaceElement } from "./RaceElement";

export const RaceList = () => {
  const { data: Races = [], isLoading } = useRace.useGetAll({
    pageNumber: 1,
    pageSize: 999,
    includesSubRaces: false,
    includesTraits: false,
  });

  if (isLoading)
    return (
      <h3 className="font-sans text-white ml-20 mt-10">
        Tirando iniciativa para cargar los Racees...
      </h3>
    );

  return (
    <div className="font-sans text-white">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ml-20 mr-20 pb-30">
        {Races.map((m: RaceResponseDTO) => (
          <RaceElement key={m.id} id={m.id} name={m.name} />
        ))}

        {Races.length === 0 && !isLoading && (
          <p className="col-span-full text-gray-400">
            Aún no hay Racees en tu biblioteca.
          </p>
        )}
      </ul>
    </div>
  );
};
