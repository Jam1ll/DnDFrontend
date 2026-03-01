import {
  useManual,
  type ManualResponseDTO,
} from "../../../api/manual/manual/manualService";
import { ManualElement } from "./ManualElement";

export const ManualList = () => {
  const { data: manuals = [], isLoading } = useManual.useGetAll({
    pageNumber: 1,
    pageSize: 999,
    includesRaces: false,
    includesSubRaces: false,
    includesClasses: false,
    includesSubClasses: false,
    includesBackgrounds: false,
    includesSpells: false,
    includesFeats: false,
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
