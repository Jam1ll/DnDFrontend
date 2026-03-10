import { useState, type FormEvent, type ChangeEvent } from "react";
import { useManual } from "../../../api/manual/manual/manualService";
import { useSpell } from "../../../api/manual/spell/spellService";
import { Modal } from "../../ui/Modal";

export const AddSpellButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const createSpell = useSpell.useCreate();

  const { data: manuals = [] } = useManual.useGetAll({
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

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    createSpell.mutate(
      {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        components: formData.get("components") as string,
        castingTime: formData.get("castingTime") as string,
        duration: formData.get("duration") as string,
        type: formData.get("type") as string,
        range: Number(formData.get("range")),
        slotLevel: Number(formData.get("slotLevel")),
        dice: (formData.get("dice") as string) || undefined,
        manualId: formData.get("manualId") as string,
      },
      { onSuccess: () => setIsOpen(false) },
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-slate-800 border border-slate-700 hover:border-blue-500 text-white rounded-full shadow-md hover:-translate-y-1 transition-all"
      >
        <span className="text-xl font-bold text-blue-400">+</span>
        <span className="text-sm tracking-wide font-medium">NUEVO CONJURO</span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            Crear Conjuro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            {/* Columna 1 */}
            <div>
              <label className="block text-xs font-bold mb-1">NOMBRE</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                NIVEL (0 = Truco)
              </label>
              <input
                type="number"
                name="slotLevel"
                min="0"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                ESCUELA (Tipo)
              </label>
              <input
                type="text"
                name="type"
                placeholder="Ej: Evocación, Ilusión..."
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                TIEMPO DE LANZAMIENTO
              </label>
              <input
                type="text"
                name="castingTime"
                placeholder="Ej: 1 Acción"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">MANUAL</label>
              <select
                name="manualId"
                value={selectedValue}
                onChange={handleChange}
                required
                className="w-full border border-gray-500 rounded p-2 bg-slate-800 text-sm"
              >
                <option value="" disabled>
                  Selecciona un manual...
                </option>
                {manuals.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Columna 2 */}
            <div>
              <label className="block text-xs font-bold mb-1">
                ALCANCE (Pies)
              </label>
              <input
                type="number"
                name="range"
                placeholder="Ej: 60"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                COMPONENTES
              </label>
              <input
                type="text"
                name="components"
                placeholder="Ej: V, S, M (una pluma)"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">DURACIÓN</label>
              <input
                type="text"
                name="duration"
                placeholder="Ej: Concentración, hasta 1 min"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                DADOS DE DAÑO (Opcional)
              </label>
              <input
                type="text"
                name="dice"
                placeholder="Ej: 8d6"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
              />
            </div>
          </div>

          <div className="text-white mt-2">
            <label className="block text-xs font-bold mb-1">DESCRIPCIÓN</label>
            <textarea
              name="description"
              rows={3}
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm"
              required
            ></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={createSpell.isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-bold"
            >
              {createSpell.isPending ? "GUARDANDO..." : "GUARDAR"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
