export interface CreateBackgroundCommand {
  manualId: string;
  name: string;
  description: string;
}

export interface UpdateBackgroundCommand {
  id: string;
  manualId: string;
  name: string;
  description: string;
}
