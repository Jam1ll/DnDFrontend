import { createGenericHooks } from "../../../../../hooks/genericHooks";
import { createGenericService } from "../../../../genericService";
import type {
  CreateSubRacialTraitCommand,
  UpdateSubRacialTraitCommand,
} from "./subRacialTraitCommands";
import type {
  GetAllSubRacialTraitsQuery,
  GetSubRacialTraitByIdQuery,
} from "./subRacialTraitQuery";

export interface SubRacialTraitResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
}

export const subRacialTraitService = createGenericService<
  SubRacialTraitResponseDTO,
  GetAllSubRacialTraitsQuery,
  GetSubRacialTraitByIdQuery,
  CreateSubRacialTraitCommand,
  UpdateSubRacialTraitCommand
>("SubRacialTrait");

export const useRacialTrait = createGenericHooks(
  "subRacialTraits",
  subRacialTraitService,
);
