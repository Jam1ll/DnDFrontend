import { createGenericHooks } from "../../../hooks/genericHooks";
import { createGenericService } from "../../genericService";
import type { CreateSpellCommand, UpdateSpellCommand } from "./spellCommands";
import type { GetAllSpellsQuery, GetSpellByIdQuery } from "./spellQueries";

export interface SpellResponseDTO {
  id: string;
  manualId: string;
  name: string;
  description: string;
  components: string;
  castingTime: string;
  duration: string;
  type: string;
  range: number;
  dice?: string;
  slotLevel: number;
}

export const spellService = createGenericService<
  SpellResponseDTO,
  GetAllSpellsQuery,
  GetSpellByIdQuery,
  CreateSpellCommand,
  UpdateSpellCommand
>("Spell");

export const useSpell = createGenericHooks("spells", spellService);
