import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";
import type { CreateClassCommand, UpdateClassCommand } from "./classCommands";
import type { GetAllClassesQuery, GetClassByIdQuery } from "./classQueries";
import type { ClassTraitResponseDTO } from "./classTrait/classTraitService";
import type { SubClassResponseDTO } from "./subClass/subClassService";

export interface ClassResponseDTO {
  id: string;
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
  classTraits: ClassTraitResponseDTO[];
  subClasses: SubClassResponseDTO[];
}

export const classService = createGenericService<
  ClassResponseDTO,
  GetAllClassesQuery,
  GetClassByIdQuery,
  CreateClassCommand,
  UpdateClassCommand
>("Class");

export const useClass = createGenericHooks("classes", classService);
