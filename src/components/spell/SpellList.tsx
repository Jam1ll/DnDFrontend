import { useState } from "react";
import { EditSpellButton } from "./buttons/EditSpellButton";
import { DeleteSpellButton } from "./buttons/DeleteSpellButton";
import {
  useSpell,
  type SpellResponseDTO,
} from "../../api/manual/spell/spellService";
import { Modal } from "../ui/Modal";

export const SpellList = () => {
  const { data: Spells = [], isLoading } = useSpell.useGetAll({
    pageNumber: 1,
    pageSize: 999,
  });
  const [selectedSpell, setSelectedSpell] = useState<SpellResponseDTO | null>(
    null,
  );

  // Imagen de prueba (placeholder) para los conjuros
  const placeholderImage =
    "https://mysterydicegoblin.com/cdn/shop/articles/wow-artwork-dispel-magic-5e_ab0a4a96-4c0e-45f8-b9ec-0d8a0938abb8.webp?v=1724242156&width=600";

  if (isLoading)
    return (
      <h3 className="font-sans text-white ml-20 mt-10">Conjurando lista...</h3>
    );

  return (
    // 1. Ampliamos el max-w para que tenga espacio para 5 columnas (usamos max-w-[95%])
    <div className="font-sans text-white w-full max-w-[95%] mx-auto px-4 lg:px-8 mt-8 pb-30">
      {Spells.length === 0 ? (
        <p className="text-gray-400">Aún no hay conjuros en tu grimorio.</p>
      ) : (
        // 2. Actualizamos el grid para llegar hasta 5 columnas (xl:grid-cols-5)
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {Spells.map((spell) => (
            <li
              key={spell.id}
              onClick={() => setSelectedSpell(spell)}
              className="bg-[#1a1a1a] rounded-xl border border-gray-700 shadow-md relative group hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            >
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <EditSpellButton {...spell} />
                <DeleteSpellButton id={spell.id} />
              </div>

              {/* Imagen Superior de la Tarjeta (Reducimos un poco la altura de h-48 a h-40 para proporciones) */}
              <div className="h-40 w-full relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] to-transparent z-0"></div>
                <img
                  src={placeholderImage}
                  alt={`Imagen de ${spell.name}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Contenido de la Tarjeta (Cambiamos p-6 a p-4 para aprovechar el espacio) */}
              <div className="p-4 pt-2 flex flex-col grow relative z-10">
                <div className="mb-2">
                  <span
                    className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${spell.slotLevel === 0 ? "bg-gray-800 text-gray-300" : "bg-purple-900/50 text-purple-300 border border-purple-800"}`}
                  >
                    {spell.slotLevel === 0
                      ? "Truco"
                      : `Nivel ${spell.slotLevel}`}{" "}
                    • {spell.type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-200 mt-1 line-clamp-1 pr-14">
                  {spell.name}
                </h4>

                {/* Reducimos el gap de la info para que quepa bien en columnas estrechas */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-gray-400 border-t border-gray-800 pt-3">
                  <p className="truncate" title={spell.castingTime}>
                    <strong className="text-gray-300">Tiempo:</strong>{" "}
                    {spell.castingTime}
                  </p>
                  <p className="truncate" title={`${spell.range} pies`}>
                    <strong className="text-gray-300">Alcance:</strong>{" "}
                    {spell.range} pies
                  </p>
                  <p className="truncate" title={spell.duration}>
                    <strong className="text-gray-300">Duración:</strong>{" "}
                    {spell.duration}
                  </p>
                  <p className="truncate" title={spell.components}>
                    <strong className="text-gray-300">Comp:</strong>{" "}
                    {spell.components}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* MODAL DE DETALLES (Se mantiene igual, ya que funciona perfecto) */}
      <Modal isOpen={!!selectedSpell} onClose={() => setSelectedSpell(null)}>
        {selectedSpell && (
          <div className="text-gray-200 max-w-2xl mx-auto custom-scrollbar overflow-y-auto max-h-[80vh] pr-2">
            <h2 className="text-3xl font-bold text-white">
              {selectedSpell.name}
            </h2>
            <p className="italic text-gray-400 mt-1 mb-4">
              {selectedSpell.slotLevel === 0
                ? "Truco"
                : `Conjuro de nivel ${selectedSpell.slotLevel}`}{" "}
              de {selectedSpell.type}
            </p>

            <div className="grid grid-cols-2 gap-y-3 text-sm bg-slate-900/80 p-5 rounded-lg border border-slate-700 mb-6 shadow-inner">
              <p>
                <strong className="text-purple-300">
                  Tiempo de lanzamiento:
                </strong>{" "}
                <br />
                {selectedSpell.castingTime}
              </p>
              <p>
                <strong className="text-purple-300">Alcance:</strong> <br />
                {selectedSpell.range} pies
              </p>
              <p>
                <strong className="text-purple-300">Componentes:</strong> <br />
                {selectedSpell.components}
              </p>
              <p>
                <strong className="text-purple-300">Duración:</strong> <br />
                {selectedSpell.duration}
              </p>
              {selectedSpell.dice && (
                <p className="col-span-2 text-blue-300 border-t border-slate-700 pt-2 mt-1">
                  <strong>Daño / Efecto:</strong> {selectedSpell.dice}
                </p>
              )}
            </div>

            <div className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap mb-8">
              {selectedSpell.description}
            </div>

            <div className="border-t border-gray-700 pt-6 mt-4">
              <img
                src={placeholderImage}
                alt={`Ilustración de ${selectedSpell.name}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg border border-gray-800 opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
