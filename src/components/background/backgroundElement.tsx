import { useNavigate } from "react-router-dom";
import type { BackgroundResponseDTO } from "../../api/manual/background/backgroundService";

export const BackgroundElement = ({
  id,
  name,
  description,
  ideals,
  bonds,
  defects,
  backgroundTraits,
  personalityTraits,
}: BackgroundResponseDTO) => {
  const navigate = useNavigate();

  const totalTraits =
    (backgroundTraits?.length ?? 0) + (personalityTraits?.length ?? 0);
  const totalRoleplay =
    (ideals?.length ?? 0) + (bonds?.length ?? 0) + (defects?.length ?? 0);

  return (
    <li className="list-none w-full">
      <div
        onClick={() => navigate(`/background-details?q=${id}`)}
        className="bg-[#222] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
      >
        <img
          className="h-48 w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          alt={`Imagen de ${name}`}
        />

        <div className="p-6 flex flex-col grow">
          <div className="flex items-baseline flex-wrap gap-2">
            <span className="inline-block bg-blue-900/50 text-blue-300 py-1 px-3 text-xs rounded-full uppercase font-bold tracking-wide border border-blue-800">
              Trasfondo
            </span>
            <div className="ml-1 text-gray-500 text-xs uppercase font-semibold tracking-wide">
              {totalTraits} Rasgos &bull; {totalRoleplay} Rol
            </div>
          </div>

          <h4 className="mt-4 font-bold text-xl text-gray-200 leading-tight truncate">
            {name}
          </h4>

          <div className="mt-2 text-gray-400 text-sm line-clamp-4 wrap-break-word leading-relaxed grow">
            {description}
          </div>

          <div className="mt-4 flex items-center justify-end">
            <span className="text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300">
              Ver detalles &rarr;
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
