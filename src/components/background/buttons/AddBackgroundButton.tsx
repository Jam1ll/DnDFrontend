import { useState, type FormEvent, type ChangeEvent } from "react";
import { useManual } from "../../../api/manual/manual/manualService";
import { useBackground } from "../../../api/manual/background/backgroundService";
import { Modal } from "../../ui/Modal";

export const AddBackgroundButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Selección del manual
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const createBackground = useBackground.useCreate();

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const manualId = formData.get("manualId") as string;

    createBackground.mutate(
      {
        name: name,
        description: description,
        manualId: manualId,
      },
      {
        onSuccess: () => {
          setIsOpen(false);
          // Opcional: limpiar el formulario si lo deseas
        },
      },
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-slate-800 border border-slate-700 hover:border-blue-500 text-white rounded-full shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-700 transition-all duration-300"
      >
        <span className="text-xl font-bold text-blue-400">+</span>
        <span className="text-sm tracking-wide font-medium">
          NUEVO TRASFONDO
        </span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
          <div className="text-white">
            <label
              htmlFor="name"
              className="flex justify-start items-center mb-2.5 text-sm font-bold"
            >
              NOMBRE
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              placeholder="Ej: Sabio, Criminal, Héroe del Pueblo..."
              required
            />

            <label
              htmlFor="description"
              className="flex justify-start items-center mb-2.5 text-sm font-bold"
            >
              DESCRIPCIÓN
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="border border-gray-400 text-sm rounded-md block w-full p-3.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              placeholder="Historia y detalles del trasfondo..."
              required
            ></textarea>

            {/* Select del manual */}
            <label
              htmlFor="manualId"
              className="flex justify-start items-center mt-4 mb-2.5 text-sm font-bold"
            >
              MANUAL
            </label>
            <select
              id="manualId"
              name="manualId"
              value={selectedValue}
              onChange={handleChange}
              required
              className="bg-slate-800 border border-gray-400 text-white text-sm rounded-md block w-full px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              disabled={createBackground.isPending}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 disabled:bg-slate-900 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wide font-medium">
                {createBackground.isPending ? "GUARDANDO..." : "GUARDAR"}
              </span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
