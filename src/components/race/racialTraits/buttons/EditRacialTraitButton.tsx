import { useEffect, useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useRacialTrait,
  type RacialTraitResponseDTO,
} from "../../../../api/manual/race/racialTrait/racialTraitService";
import { Modal } from "../../../ui/Modal";

interface EditRacialTraitProps extends RacialTraitResponseDTO {
  raceId: string;
}

export const EditRacialTraitButton = ({
  name,
  description,
  id,
  manualId,
  raceId,
}: EditRacialTraitProps) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const updateRacialTrait = useRacialTrait.useUpdate();

  useEffect(() => {
    setNewName(name || "");
    setNewDescription(description || "");
  }, [name, description]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateRacialTrait.mutate(
      {
        id: id,
        name: newName,
        description: newDescription,
        manualId: manualId,
        raceId: raceId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["races"] });
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <>
      <button
        type="button"
        title="Editar rasgo"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className="cursor-pointer p-2 bg-gray-700/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-md transition-all duration-200 ml-auto"
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
              className="mb-5 border border-gray-400 bg-transparent text-sm rounded-md block w-full px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border border-gray-400 bg-transparent text-sm rounded-md block w-full p-3.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={updateRacialTrait.isPending}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wide font-medium">
                {updateRacialTrait.isPending ? "GUARDANDO..." : "GUARDAR"}
              </span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
