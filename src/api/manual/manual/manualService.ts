import type { BackgroundResponseDTO } from "../background/backgroundService";
import type { ClassResponseDTO } from "../class/classService";
import type { FeatResponseDTO } from "../feat/featService";
import type { RaceResponseDTO } from "../race/raceService";
import type { SpellResponseDTO } from "../spell/spellService";
import type { SubClassResponseDTO } from "../class/subClass/subClassService";
import type { SubRaceResponseDTO } from "../race/subRace/subRaceService";
import {
  type CreateManualCommand,
  type UpdateManualCommand,
} from "./manualCommands";
import type { GetAllManualsQuery, GetManualByIdQuery } from "./manualQueries";
import { createGenericService } from "../../genericService";
import { createGenericHooks } from "../../../hooks/genericHooks";

export interface ManualResponseDTO {
  id: string;
  name: string;
  description: string;
  classes?: ClassResponseDTO[];
  subClasses?: SubClassResponseDTO[];
  races?: RaceResponseDTO[];
  subRaces?: SubRaceResponseDTO[];
  backgrounds?: BackgroundResponseDTO[];
  spells?: SpellResponseDTO[];
  feats?: FeatResponseDTO[];
}

export const manualService = createGenericService<
  ManualResponseDTO,
  GetAllManualsQuery,
  GetManualByIdQuery,
  CreateManualCommand,
  UpdateManualCommand
>("Manual");

export const useManual = createGenericHooks("manuals", manualService);
