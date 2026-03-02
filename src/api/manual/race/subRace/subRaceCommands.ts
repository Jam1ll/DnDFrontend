export interface CreateSubRaceCommand {
  manualId: string;
  raceId: string;
  name: string;
  description: string;
}

export interface UpdateSubRaceCommand {
  id: string;
  manualId: string;
  raceId: string;
  name: string;
  description: string;
}
