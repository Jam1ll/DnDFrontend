import { useBackground } from "../../api/manual/background/backgroundService";
import { BackgroundElement } from "./backgroundElement";

export const BackgroundList = () => {
  const { data: Backgrounds = [], isLoading } = useBackground.useGetAll({
    pageNumber: 1,
    pageSize: 999,
    includesBackgroundTraits: false,
    includesPersonalityTraits: false,
    includesIdeals: false,
    includesBonds: false,
    includesDefects: false,
  });

  if (isLoading)
    return (
      <h3 className="font-sans text-white ml-20 mt-10">
        Reuniendo los trasfondos...
      </h3>
    );

  return (
    <div className="font-sans text-white">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 ml-20 mr-20 pb-30">
        {Backgrounds.map((bg) => (
          <BackgroundElement key={bg.id} {...bg} />
        ))}

        {Backgrounds.length === 0 && !isLoading && (
          <p className="col-span-full text-gray-400">
            Aún no hay trasfondos en tu biblioteca.
          </p>
        )}
      </ul>
    </div>
  );
};
