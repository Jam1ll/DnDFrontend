export interface CreateSubClassCommand {
  manualId: string;
  classId: string;
  name: string;
  description: string;
}

export interface UpdateSubClassCommand {
  id: string;
  manualId: string;
  classId: string;
  name: string;
  description: string;
}
