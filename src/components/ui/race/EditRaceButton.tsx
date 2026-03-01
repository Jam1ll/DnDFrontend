import { useEffect, useState, type FormEvent } from "react";
import { Modal } from "../Modal";
import {
  useRace,
  type RaceResponseDTO,
} from "../../../api/manual/race/raceService";

export const EditRaceButton = ({ name, description, id }: RaceResponseDTO) => {
  //
  // poblar el modal con los datos ya existentes
  //
  useEffect(() => {
    setNewName(name || "");
    setNewDescription(description || "");
  }, [name, description]);

  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const updateRace = useRace.useUpdate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateRace.mutate({
      id: id,
      name: newName,
      description: newDescription,
      manualId: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-blue-900 border border-slate-900 hover:border-blue-700 text-white rounded-full shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-700 transition-all duration-300"
      >
        <span className="text-sm tracking-wide font-medium">EDITAR</span>
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
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Race Necrético"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
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
              className="border border-gray-400 text-sm rounded-md block w-full p-3.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="El mejor Race de D&D"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={updateRace.isPending}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wide font-medium">
                {updateRace.isPending ? "GUARDANDO..." : "GUARDAR"}
              </span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
