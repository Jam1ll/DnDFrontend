import { useQuery } from "@tanstack/react-query";
import {
  manualService,
  type ManualResponseDTO,
} from "../../../api/manual/manualService";
import { ManualElement } from "./ManualElement";

export const ManualList = () => {
  const { data: manuals = [], isLoading } = useQuery({
    queryKey: ["manuals"],
    queryFn: async () => {
      const result = await manualService.getAll({
        pageNumber: 1,
        pageSize: 999,
        name: undefined,
        includesRaces: false,
        includesClasses: false,
        includesBackgrounds: false,
        includesFeats: false,
        includesSpells: false,
        includesSubClasses: false,
        includesSubRaces: false,
      });
      return result.data;
    },
  });

  if (isLoading)
    return (
      <h3 className="font-sans text-white ml-20 mt-10">
        Tirando iniciativa para cargar los manuales...
      </h3>
    );

  return (
    <div className="font-sans text-white">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ml-20 mr-20 pb-30">
        {manuals.map((m: ManualResponseDTO) => (
          <ManualElement key={m.id} id={m.id} name={m.name} />
        ))}

        {manuals.length === 0 && !isLoading && (
          <p className="col-span-full text-gray-400">
            Aún no hay manuales en tu biblioteca.
          </p>
        )}
      </ul>
    </div>
  );
};
