import { useState, type FormEvent, type ChangeEvent } from "react";
import { useManual } from "../../../api/manual/manual/manualService";
import { useFeat } from "../../../api/manual/feat/featService";
import { Modal } from "../../ui/Modal";

export const AddFeatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const createFeat = useFeat.useCreate();

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
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const manualId = formData.get("manualId") as string;
    const requisites = formData.get("requisites") as string;

    createFeat.mutate(
      {
        name,
        description,
        manualId,
        requisites,
      },
      { onSuccess: () => setIsOpen(false) },
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-slate-800 border border-slate-700 hover:border-blue-500 text-white rounded-full shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
      >
        <span className="text-xl font-bold text-blue-400">+</span>
        <span className="text-sm tracking-wide font-medium">NUEVO DOTE</span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
          <div className="text-white">
            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              NOMBRE
            </label>
            <input
              type="text"
              name="name"
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            />

            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              DESCRIPCIÓN
            </label>
            <textarea
              name="description"
              rows={4}
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full p-3.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              REQUISITOS
            </label>
            <input
              type="text"
              name="requisites"
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Nivel 4, Fuerza 13..."
              required
            />

            <label className="flex justify-start items-center mt-4 mb-2.5 text-sm font-bold">
              MANUAL
            </label>
            <select
              name="manualId"
              value={selectedValue}
              onChange={handleChange}
              required
              className="bg-slate-800 border border-gray-400 text-white text-sm rounded-md block w-full px-3 py-2.5 focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Selecciona un manual...
              </option>
              {manuals.map((manual) => (
                <option key={manual.id} value={manual.id}>
                  {manual.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={createFeat.isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md transition-all text-sm font-medium"
            >
              {createFeat.isPending ? "GUARDANDO..." : "GUARDAR"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
