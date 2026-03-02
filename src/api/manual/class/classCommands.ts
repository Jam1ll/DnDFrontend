export interface CreateClassCommand {
  manualId: string;
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
}

export interface UpdateClassCommand {
  id: string;
  manualId: string;
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
}
