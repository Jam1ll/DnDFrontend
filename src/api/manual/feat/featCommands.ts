export interface CreateFeatCommand {
  manualId: string;
  subRaceId: string;
  name: string;
  description: string;
}

export interface UpdateFeatCommand {
  id: string;
  manualId: string;
  subRaceId: string;
  name: string;
  description: string;
}
