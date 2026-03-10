export interface CreateFeatCommand {
  manualId: string;
  name: string;
  description: string;
  requisites: string;
}

export interface UpdateFeatCommand {
  id: string;
  manualId: string;
  name: string;
  description: string;
  requisites: string;
}
