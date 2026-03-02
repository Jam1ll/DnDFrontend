import { createGenericHooks } from "../../../../hooks/genericHooks";
import { createGenericService } from "../../../genericService";
import type {
  CreateRacialTraitCommand,
  UpdateRacialTraitCommand,
} from "./racialTraitCommands";
import type {
  GetAllRacialTraitsQuery,
  GetRacialTraitByIdQuery,
} from "./racialTraitQuery";

export interface RacialTraitResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
}

export const racialTraitService = createGenericService<
  RacialTraitResponseDTO,
  GetAllRacialTraitsQuery,
  GetRacialTraitByIdQuery,
  CreateRacialTraitCommand,
  UpdateRacialTraitCommand
>("RacialTrait");

export const useRacialTrait = createGenericHooks(
  "racialTraits",
  racialTraitService,
);
