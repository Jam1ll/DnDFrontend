import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";
import type { CreateRaceCommand, UpdateRaceCommand } from "./raceCommands";
import type { GetAllRacesQuery, GetRaceByIdQuery } from "./raceQueries";
import type { RacialTraitResponseDTO } from "./racialTrait/racialTraitService";
import type { SubRaceResponseDTO } from "./subRace/subRaceService";

export interface RaceResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
  racialTraits?: RacialTraitResponseDTO[];
  subRaces?: SubRaceResponseDTO[];
}

export const raceService = createGenericService<
  RaceResponseDTO,
  GetAllRacesQuery,
  GetRaceByIdQuery,
  CreateRaceCommand,
  UpdateRaceCommand
>("Race");

export const useRace = createGenericHooks("races", raceService);
