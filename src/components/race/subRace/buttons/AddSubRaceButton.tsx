import { useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "../../../ui/Modal";
import { useSubRace } from "../../../../api/manual/race/subRace/subRaceService";

interface SubRaceProps {
  manualId: string;
  raceId: string;
}

export const AddSubRaceButton = ({ manualId, raceId }: SubRaceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const createSubRace = useSubRace.useCreate();

  const queryClient = useQueryClient();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    createSubRace.mutate(
      {
        name: name,
        description: description,
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
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-blue-900 border border-slate-900 hover:border-blue-700 text-white rounded-full shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-700 transition-all duration-300"
      >
        <span className="text-sm tracking-wide font-medium">NUEVA SUBRAZA</span>
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
              required
            ></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wide font-medium">GUARDAR</span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
