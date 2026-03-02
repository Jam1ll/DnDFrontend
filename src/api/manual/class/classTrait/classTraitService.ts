import { createGenericHooks } from "../../../../hooks/genericHooks";
import { createGenericService } from "../../../genericService";
import type {
  CreateClassTraitCommand,
  UpdateClassTraitCommand,
} from "./classTraitCommands";
import type {
  GetAllClassTraitsQuery,
  GetClassTraitByIdQuery,
} from "./classTraitQueries";

export interface ClassTraitResponseDTO {
  id: string;
  manualId: string;
  classId: string;
  name: string;
  description: string;
  requiredLevel: string;
}

export const classTraitService = createGenericService<
  ClassTraitResponseDTO,
  GetAllClassTraitsQuery,
  GetClassTraitByIdQuery,
  CreateClassTraitCommand,
  UpdateClassTraitCommand
>("ClassTrait");

export const useClassTrait = createGenericHooks(
  "classTraits",
  classTraitService,
);
