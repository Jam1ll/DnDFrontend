import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";
import type { CreateClassCommand, UpdateClassCommand } from "./classCommands";
import type { GetAllClassesQuery, GetClassByIdQuery } from "./classQueries";

export interface ClassResponseDTO {
  id: string;
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
}

export const classService = createGenericService<
  ClassResponseDTO,
  GetAllClassesQuery,
  GetClassByIdQuery,
  CreateClassCommand,
  UpdateClassCommand
>("Class");

export const useClass = createGenericHooks("classes", classService);
