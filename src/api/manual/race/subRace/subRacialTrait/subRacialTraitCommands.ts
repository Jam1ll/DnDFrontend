export interface CreateSubRacialTraitCommand {
  manualId: string;
  subRaceId: string;
  name: string;
  description: string;
}

export interface UpdateSubRacialTraitCommand {
  id: string;
  manualId: string;
  subRaceId: string;
  name: string;
  description: string;
}
