import { createGenericHooks } from "../../../../../hooks/genericHooks";
import { createGenericService } from "../../../../genericService";
import type {
  CreateSubClassTraitCommand,
  UpdateSubClassTraitCommand,
} from "./subClassTraitCommands";
import type {
  GetAllSubClassTraitsQuery,
  GetSubClassTraitByIdQuery,
} from "./subClassTraitQueries";

export interface SubClassTraitResponseDTO {
  id: string;
  manualId: string;
  clasId: string;
  name: string;
  description: string;
}

export const SubClassTraitService = createGenericService<
  SubClassTraitResponseDTO,
  GetAllSubClassTraitsQuery,
  GetSubClassTraitByIdQuery,
  CreateSubClassTraitCommand,
  UpdateSubClassTraitCommand
>("SubClassTrait");

export const useSubClassTrait = createGenericHooks(
  "subClassTraits",
  SubClassTraitService,
);
