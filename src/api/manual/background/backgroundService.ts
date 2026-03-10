import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";

import type {
  CreateBackgroundCommand,
  UpdateBackgroundCommand,
} from "./backgroundCommands";

import type {
  GetAllBackgroundsQuery,
  GetBackgroundByIdQuery,
} from "./backgroundQueries";
import type { TraitResponseDTO } from "./trait/traitFactory";

export interface BackgroundResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;

  backgroundTraits?: TraitResponseDTO[];
  personalityTraits?: TraitResponseDTO[];
  ideals?: TraitResponseDTO[];
  bonds?: TraitResponseDTO[];
  defects?: TraitResponseDTO[];
}

export const backgroundService = createGenericService<
  BackgroundResponseDTO,
  GetAllBackgroundsQuery,
  GetBackgroundByIdQuery,
  CreateBackgroundCommand,
  UpdateBackgroundCommand
>("Background");

export const useBackground = createGenericHooks(
  "backgrounds",
  backgroundService,
);
