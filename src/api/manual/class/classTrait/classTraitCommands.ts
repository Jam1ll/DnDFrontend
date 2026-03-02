export interface CreateClassTraitCommand {
  manualId: string;
  classId: string;
  name: string;
  description: string;
  requiredLevel: string;
}

export interface UpdateClassTraitCommand {
  id: string;
  manualId: string;
  classId: string;
  name: string;
  description: string;
  requiredLevel: string;
}
