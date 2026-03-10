/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "../ui/Modal";
import type { TraitResponseDTO } from "../../api/manual/background/trait/traitFactory";

interface GenericTraitSectionProps {
  title: string;
  traits: TraitResponseDTO[] | undefined;
  manualId: string;
  backgroundId: string;
  useTraitModule: any;
}

export const GenericTraitSection = ({
  title,
  traits = [],
  manualId,
  backgroundId,
  useTraitModule,
}: GenericTraitSectionProps) => {
  const queryClient = useQueryClient();

  const createMutation = useTraitModule.useCreate();
  const updateMutation = useTraitModule.useUpdate();
  const deleteMutation = useTraitModule.useDelete();

  // Estados para controlar los modales
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingTrait, setEditingTrait] = useState<TraitResponseDTO | null>(
    null,
  );
  const [deletingTraitId, setDeletingTraitId] = useState<string | null>(null);

  // Estados locales para los formularios
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Autocompletar el formulario
  useEffect(() => {
    if (editingTrait) {
      setName(editingTrait.name);
      setDescription(editingTrait.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [editingTrait]);

  const handleCreateOrUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingTrait) {
      updateMutation.mutate(
        { id: editingTrait.id, manualId, backgroundId, name, description },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["backgrounds"] });
            setEditingTrait(null);
          },
        },
      );
    } else {
      createMutation.mutate(
        { manualId, backgroundId, name, description },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["backgrounds"] });
            setIsAddOpen(false);
          },
        },
      );
    }
  };

  const handleDelete = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (deletingTraitId) {
      deleteMutation.mutate(deletingTraitId, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["backgrounds"] });
          setDeletingTraitId(null);
        },
      });
    }
  };

  return (
    <div className="w-full mt-10">
      {/* CABECERA DE LA SECCIÓN */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-2">
        <h3 className="text-xl text-gray-300 tracking-wider font-bold">
          {title}
        </h3>
        <button
          onClick={() => setIsAddOpen(true)}
          className="text-xs bg-slate-800 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md transition-colors font-bold"
        >
          + AÑADIR
        </button>
      </div>

      {/* LISTA DE TARJETAS PEQUEÑAS */}
      {traits.length === 0 ? (
        <p className="text-gray-500 italic text-sm">
          No hay elementos registrados.
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((trait) => (
            <li
              key={trait.id}
              className="bg-[#222] p-5 rounded-xl border border-gray-800 shadow-md relative group hover:border-gray-500 transition-colors"
            >
              {/* Botones de acción flotantes */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  title="Editar"
                  onClick={() => setEditingTrait(trait)}
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
                <button
                  title="Eliminar"
                  onClick={() => setDeletingTraitId(trait.id)}
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
              </div>

              <h5 className="text-lg font-bold text-gray-200 pr-14">
                {trait.name}
              </h5>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed wrap-break-word whitespace-pre-wrap">
                {trait.description}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* MODAL: AGREGAR / EDITAR */}
      <Modal
        isOpen={isAddOpen || !!editingTrait}
        onClose={() => {
          setIsAddOpen(false);
          setEditingTrait(null);
        }}
      >
        <form
          onSubmit={handleCreateOrUpdate}
          className="max-w-sm mx-auto space-y-4"
        >
          <div className="text-white">
            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              NOMBRE
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-5 border border-gray-400 bg-transparent text-sm rounded-md block w-full px-3 py-2.5 focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="flex justify-start items-center mb-2.5 text-sm font-bold">
              DESCRIPCIÓN
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 bg-transparent text-sm rounded-md block w-full p-3.5 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={createMutation.isPending || updateMutation.isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-md shadow-md transition-all font-medium text-sm"
            >
              {createMutation.isPending || updateMutation.isPending
                ? "GUARDANDO..."
                : "GUARDAR"}
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL: ELIMINAR */}
      <Modal
        isOpen={!!deletingTraitId}
        onClose={() => setDeletingTraitId(null)}
      >
        <form onSubmit={handleDelete} className="max-w-sm mx-auto space-y-2">
          <div className="text-white font-sans flex flex-col items-center gap-6 pt-6 pb-2 text-center">
            <h2 className="text-lg text-gray-200 leading-relaxed">
              ¿Estás seguro/a de eliminar este elemento? <br />
              <span className="text-red-400 font-bold">
                ¡Se perderá para siempre!
              </span>
            </h2>
            <button
              type="submit"
              disabled={deleteMutation.isPending}
              className="px-8 py-2.5 bg-red-600 hover:bg-red-500 disabled:bg-red-800 text-white rounded-md shadow-md font-bold text-sm"
            >
              {deleteMutation.isPending ? "ELIMINANDO..." : "ELIMINAR"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
