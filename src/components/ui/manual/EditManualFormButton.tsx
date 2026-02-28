import { useEffect, useState, type FormEvent } from "react";
import { Modal } from "../Modal";
import {
  manualService,
  type ManualResponseDTO,
} from "../../../api/manual/manualService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const EditManualFormButton = ({
  name,
  description,
  id,
}: ManualResponseDTO) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    setNewName(name || "");
    // eslint-disable-next-line react-hooks/immutability
    setNewDescription(description || "");
  }, [name, description]);

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const editManualMutation = useMutation({
    mutationFn: async (updatedData: {
      id: string;
      name: string;
      description: string;
    }) => {
      console.log("updating...");
      return await manualService.update(updatedData);
    },
    onSuccess: (data) => {
      console.log("updated: ", data);

      queryClient.invalidateQueries({ queryKey: ["manuals"] });
      queryClient.invalidateQueries({ queryKey: ["manual", id] });

      setIsOpen(false);
    },
    onError: (error) => {
      console.error("Error al editar el manual:", error);
    },
  });

  console.log(name, description);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    editManualMutation.mutate({
      id: id,
      name: newName,
      description: newDescription,
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-slate-800 border border-slate-700 hover:border-blue-500 text-white rounded-full shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-700 transition-all duration-300"
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
              placeholder="Manual Necrético"
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
              placeholder="El mejor manual de D&D"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={editManualMutation.isPending}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wide font-medium">
                {editManualMutation.isPending ? "GUARDANDO..." : "GUARDAR"}
              </span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
