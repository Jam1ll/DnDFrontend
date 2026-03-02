export interface CreateRacialTraitCommand {
  manualId: string;
  raceId: string;
  name: string;
  description: string;
}

export interface UpdateRacialTraitCommand {
  id: string;
  manualId: string;
  raceId: string;
  name: string;
  description: string;
}
