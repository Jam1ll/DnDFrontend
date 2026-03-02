import { createGenericHooks } from "../../../../hooks/genericHooks";
import { createGenericService } from "../../../genericService";
import type {
  CreateSubRaceCommand,
  UpdateSubRaceCommand,
} from "./subRaceCommands";
import type {
  GetAllSubRacesQuery,
  GetSubRaceByIdQuery,
} from "./subRaceQueries";
import type { SubRacialTraitResponseDTO } from "./subRacialTrait/subRacialTraitService";

export interface SubRaceResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
  subRacialTraits?: SubRacialTraitResponseDTO[];
}

export const subRaceService = createGenericService<
  SubRaceResponseDTO,
  GetAllSubRacesQuery,
  GetSubRaceByIdQuery,
  CreateSubRaceCommand,
  UpdateSubRaceCommand
>("SubRace");

export const useSubRace = createGenericHooks("subRaces", subRaceService);
