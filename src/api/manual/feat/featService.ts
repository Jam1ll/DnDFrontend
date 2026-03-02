import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";
import type { CreateFeatCommand, UpdateFeatCommand } from "./featCommands";
import type { GetAllFeatsQuery, GetFeatByIdQuery } from "./featQueries";

export interface FeatResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
}

export const featService = createGenericService<
  FeatResponseDTO,
  GetAllFeatsQuery,
  GetFeatByIdQuery,
  CreateFeatCommand,
  UpdateFeatCommand
>("Feat");

export const useRacialTrait = createGenericHooks("feats", featService);
