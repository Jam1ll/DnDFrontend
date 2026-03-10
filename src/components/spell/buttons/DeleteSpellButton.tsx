import { type FormEvent, useState } from "react";
import { useSpell } from "../../../api/manual/spell/spellService";
import { Modal } from "../../ui/Modal";

export const DeleteSpellButton = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteSpell = useSpell.useDelete();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteSpell.mutate(id, { onSuccess: () => setIsOpen(false) });
  };

  return (
    <>
      <button
        type="button"
        title="Eliminar Conjuro"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className="p-1.5 bg-gray-700/50 hover:bg-red-600 text-gray-300 hover:text-white rounded-md transition-colors"
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto text-center space-y-6 pt-4"
        >
          <h2 className="text-lg text-gray-200">
            ¿Estás seguro/a de eliminar este Conjuro? <br />
            <span className="text-red-400 font-bold">
              Esta acción es permanente.
            </span>
          </h2>
          <button
            type="submit"
            disabled={deleteSpell.isPending}
            className="px-8 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-md font-bold text-sm"
          >
            {deleteSpell.isPending ? "ELIMINANDO..." : "ELIMINAR"}
          </button>
        </form>
      </Modal>
    </>
  );
};
