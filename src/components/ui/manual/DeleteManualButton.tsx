import { type FormEvent, useState } from "react";
import {
  manualService,
  useManual,
} from "../../../api/manual/manual/manualService";
import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";

interface DeleteProps {
  id: string;
}

export const DeleteManualButton = ({ id }: DeleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const deleteManual = useManual.useDelete();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteManual.mutate(id);
    navigate("/manuals");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 mt-5 bg-red-900 border border-slate-900 hover:border-red-700 text-white rounded-full shadow-md hover:shadow-red-500/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-700 transition-all duration-300"
      >
        <span className="text-sm tracking-wide font-medium">ELIMINAR</span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-2">
          <div className="text-white font-sans flex flex-col items-center justify-center gap-6 pt-6 pb-2 text-center">
            <h2 className="text-lg text-gray-200 leading-relaxed max-w-sm">
              ¿Estás seguro/a de eliminar este manual? <br />
              <span className="text-red-400 font-bold">
                ¡Toda la información en él se perderá!
              </span>
            </h2>

            <button
              type="submit"
              className="cursor-pointer flex items-center justify-center px-8 py-2.5 bg-red-600 hover:bg-red-500 disabled:bg-red-800 text-white rounded-md shadow-md transition-all duration-300"
            >
              <span className="text-sm tracking-wider font-bold">ELIMINAR</span>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
