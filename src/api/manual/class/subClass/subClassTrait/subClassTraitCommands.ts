export interface CreateSubClassTraitCommand {
  manualId: string;
  classId: string;
  name: string;
  description: string;
}

export interface UpdateSubClassTraitCommand {
  id: string;
  manualId: string;
  classId: string;
  name: string;
  description: string;
}
