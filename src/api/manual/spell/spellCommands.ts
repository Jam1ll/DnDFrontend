export interface CreateSpellCommand {
  manualId: string;
  name: string;
  description: string;
  components: string;
  castingTime: string;
  duration: string;
  type: string;
  range: number;
  dice?: string;
  slotLevel: number;
}

export interface UpdateSpellCommand {
  manualId: string;
  name: string;
  description: string;
  components: string;
  castingTime: string;
  duration: string;
  type: string;
  range: number;
  dice?: string;
  slotLevel: number;
}
