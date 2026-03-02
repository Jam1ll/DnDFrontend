export interface CreateClassCommand {
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
}

export interface UpdateClassCommand {
  id: string;
  name: string;
  description: string;
  hitPoints: string;
  multiClassRequirements: string;
}
