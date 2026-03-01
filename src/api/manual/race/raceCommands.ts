export interface CreateRaceCommand {
  manualId: string;
  name: string;
  description: string;
}

export interface UpdateRaceCommand {
  id: string;
  manualId: string;
  name: string;
  description: string;
}
