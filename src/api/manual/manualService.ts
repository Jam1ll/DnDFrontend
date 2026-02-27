import { api } from "../axiosClient";
import type { BackgroundResponseDTO } from "./background/backgroundService";
import type { ClassResponseDTO } from "./class/classService";
import type { FeatResponseDTO } from "./feat/featService";
import type { RaceResponseDTO } from "./race/raceService";
import type { SpellResponseDTO } from "./spell/spellService";
import type { SubClassResponseDTO } from "./subClass/classService";
import type { SubRaceResponseDTO } from "./subRace/subRaceService";
import {
  type CreateManualCommand,
  type UpdateManualCommand,
} from "./manualCommands";
import type { GetAllManualsQuery, GetManualByIdQuery } from "./manualQueries";

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

export const manualService = {
  getAll: async (data: GetAllManualsQuery) => {
    const response = await api.get("Manual/All", { params: { data } });
    return response.data;
  },

  getById: async (data: GetManualByIdQuery) => {
    const response = await api.get(`Manual/${data.id}`, { params: { data } });
    return response.data;
  },

  create: async (data: CreateManualCommand) => {
    const response = await api.post("Manual/Create", data);
    return response.data;
  },

  update: async (data: UpdateManualCommand) => {
    const response = await api.put("Manual/Update", data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete("Manual/Delete", {
      data: { id },
    });
    return response.data;
  },
};
