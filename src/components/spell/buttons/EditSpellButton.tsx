import { useEffect, useState, type FormEvent } from "react";
import {
  useSpell,
  type SpellResponseDTO,
} from "../../../api/manual/spell/spellService";
import { Modal } from "../../ui/Modal";

export const EditSpellButton = (spell: SpellResponseDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<SpellResponseDTO>(spell);
  const updateSpell = useSpell.useUpdate();

  useEffect(() => {
    setFormData(spell);
  }, [spell]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateSpell.mutate(
      {
        ...formData,
        range: Number(formData.range),
        slotLevel: Number(formData.slotLevel),
      },
      { onSuccess: () => setIsOpen(false) },
    );
  };

  return (
    <>
      <button
        type="button"
        title="Editar Conjuro"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className="p-1.5 bg-gray-700/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-md transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            Editar Conjuro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div>
              <label className="block text-xs font-bold mb-1">NOMBRE</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">NIVEL</label>
              <input
                type="number"
                name="slotLevel"
                value={formData.slotLevel}
                onChange={handleChange}
                min="0"
                max="9"
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">ESCUELA</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                TIEMPO DE LANZAMIENTO
              </label>
              <input
                type="text"
                name="castingTime"
                value={formData.castingTime}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">
                ALCANCE (Pies)
              </label>
              <input
                type="number"
                name="range"
                value={formData.range}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                COMPONENTES
              </label>
              <input
                type="text"
                name="components"
                value={formData.components}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">DURACIÓN</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
                required
              />

              <label className="block text-xs font-bold mb-1">
                DADOS DE DAÑO
              </label>
              <input
                type="text"
                name="dice"
                value={formData.dice || ""}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm mb-3"
              />
            </div>
          </div>

          <div className="text-white mt-2">
            <label className="block text-xs font-bold mb-1">DESCRIPCIÓN</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-500 rounded p-2 bg-transparent text-sm"
              required
            ></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={updateSpell.isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-bold"
            >
              {updateSpell.isPending ? "GUARDANDO..." : "GUARDAR"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
