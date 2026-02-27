import { api } from "../axiosClient";
import {
  type CreateManualCommand,
  type UpdateManualCommand,
} from "./manualCommands";

export interface ManualResponseDTO {
  id: string;
  name: string;
  description: string;
}

export const manualService = {
  getAll: async (pageNumber = 1, pageSize = 12, name?: string) => {
    const response = await api.get("Manual/All", {
      params: { pageNumber, pageSize, name },
    });
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
