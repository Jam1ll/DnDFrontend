import { useEffect, useState, type FormEvent } from "react";
import {
  useFeat,
  type FeatResponseDTO,
} from "../../../api/manual/feat/featService";
import { Modal } from "../../ui/Modal";

export const EditFeatButton = ({
  id,
  name,
  description,
  manualId,
  requisites,
}: FeatResponseDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newRequisites, setNewRequisites] = useState(requisites);

  const updateFeat = useFeat.useUpdate();

  useEffect(() => {
    setNewName(name || "");
    setNewDescription(description || "");
    setNewRequisites(requisites || "");
  }, [name, description, requisites]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateFeat.mutate(
      {
        id,
        name: newName,
        description: newDescription,
        manualId,
        requisites: newRequisites,
      },
      { onSuccess: () => setIsOpen(false) },
    );
  };

  return (
    <>
      <button
        type="button"
        title="Editar Dote"
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
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
          <div className="text-white">
            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              NOMBRE
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            />

            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              DESCRIPCIÓN
            </label>
            <textarea
              rows={4}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full p-3.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              REQUISITOS
            </label>
            <input
              type="text"
              value={newRequisites}
              onChange={(e) => setNewRequisites(e.target.value)}
              className="mb-5 border border-gray-400 text-sm rounded-md block w-full px-3 py-2.5 bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={updateFeat.isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md transition-all text-sm font-medium"
            >
              {updateFeat.isPending ? "GUARDANDO..." : "GUARDAR"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
