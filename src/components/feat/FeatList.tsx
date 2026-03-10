import { useState } from "react";

import { EditFeatButton } from "./buttons/EditFeatButton";
import { DeleteFeatButton } from "./buttons/DeleteFeatButton";
import {
  useFeat,
  type FeatResponseDTO,
} from "../../api/manual/feat/featService";
import { Modal } from "../ui/Modal";

export const FeatList = () => {
  const { data: Feats = [], isLoading } = useFeat.useGetAll({
    pageNumber: 1,
    pageSize: 999,
  });

  const [selectedFeat, setSelectedFeat] = useState<FeatResponseDTO | null>(
    null,
  );

  if (isLoading)
    return (
      <h3 className="font-sans text-white ml-20 mt-10">Cargando dotes...</h3>
    );

  return (
    <div className="font-sans text-white w-full max-w-7xl mx-auto px-10 lg:px-20 mt-8 pb-30">
      {Feats.length === 0 ? (
        <p className="text-gray-400">Aún no hay dotes en tu biblioteca.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Feats.map((feat) => (
            <li
              key={feat.id}
              onClick={() => setSelectedFeat(feat)}
              className="bg-[#222] p-6 rounded-xl border border-gray-800 shadow-md relative group hover:border-gray-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Contenedor de botones superior derecho */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <EditFeatButton {...feat} />
                <DeleteFeatButton id={feat.id} />
              </div>

              <h4 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors pr-16">
                {feat.name}
              </h4>
              <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed wrap-break-word">
                {feat.description}
              </p>
              <span className="text-xs font-semibold text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver detalles &rarr;
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Modal de "Solo Lectura" para ver el detalle completo */}
      <Modal isOpen={!!selectedFeat} onClose={() => setSelectedFeat(null)}>
        {selectedFeat && (
          <div className="text-gray-200 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-white">
              {selectedFeat.name}
            </h2>
            {/* Mostrar el requisito como una pequeña etiqueta */}
            <span className="inline-block bg-blue-900/50 text-blue-300 py-1 px-3 mb-4 text-xs rounded-full font-bold tracking-wide border border-blue-800">
              Requisitos: {selectedFeat.requisites}
            </span>

            <div className="border-t border-gray-700 pt-3">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                {selectedFeat.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
