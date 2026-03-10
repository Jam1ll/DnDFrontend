import { createGenericHooks } from "../../../../hooks/genericHooks";
import { createGenericService } from "../../../genericService";

export interface CreateTraitCommand {
  manualId: string;
  backgroundId: string;
  name: string;
  description: string;
}

export interface UpdateTraitCommand extends CreateTraitCommand {
  id: string;
}

export interface GetAllTraitsQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetTraitByIdQuery {
  id: string;
}

export interface TraitResponseDTO {
  id: string;
  manualId: string;
  backgroundId: string;
  name: string;
  description: string;
}

export function createTraitModule(entityName: string, hookKey: string) {
  const service = createGenericService<
    TraitResponseDTO,
    GetAllTraitsQuery,
    GetTraitByIdQuery,
    CreateTraitCommand,
    UpdateTraitCommand
  >(entityName);

  const hooks = createGenericHooks(hookKey, service);

  return {
    service,
    hooks,
  };
}
