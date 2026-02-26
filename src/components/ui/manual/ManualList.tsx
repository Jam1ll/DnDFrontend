import { useEffect, useState } from "react";
import {
  manualService,
  type ManualResponseDTO,
} from "../../../api/manual/manualService";
import { ManualElement } from "./ManualElement";

export const ManualList = () => {
  const [manuals, setManuals] = useState<ManualResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManuals = async () => {
      try {
        const result = await manualService.getAll();
        setManuals(result.data);
      } catch (error) {
        console.log("Error loading manuals", error);
      } finally {
        setLoading(false);
      }
    };
    fetchManuals(); //ejecutar funcion para poblar el listado
  }, []);

  if (loading) return <h3>Tirando iniciativa para cargar los manuales...</h3>;

  return (
    <div className=" font-sans text-white">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 ml-20 mr-20">
        {manuals.map((m) => (
          <ManualElement key={m.id} name={m.name} />
        ))}
      </ul>
    </div>
  );
};
