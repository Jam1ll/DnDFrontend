import { createGenericHooks } from "../../../../hooks/genericHooks";
import { createGenericService } from "../../../genericService";
import type {
  CreateSubClassCommand,
  UpdateSubClassCommand,
} from "./subClassCommands";
import type {
  GetAllSubClassesQuery,
  GetSubClassByIdQuery,
} from "./subClassQueries";

export interface SubClassResponseDTO {
  id: string;
  manualId: string;
  clasId: string;
  name: string;
  description: string;
  subClassTraits: SubClassTraitResponseDTO[];
}

export const subClassService = createGenericService<
  SubClassResponseDTO,
  GetAllSubClassesQuery,
  GetSubClassByIdQuery,
  CreateSubClassCommand,
  UpdateSubClassCommand
>("SubClass");

export const useSubClass = createGenericHooks("subClasses", subClassService);
