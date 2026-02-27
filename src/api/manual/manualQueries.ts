export interface GetAllManualsQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
  includesRaces: boolean;
  includesSubRaces: boolean;
  includesClasses: boolean;
  includesSubClasses: boolean;
  includesBackgrounds: boolean;
  includesSpells: boolean;
  includesFeats: boolean;
}

export interface GetManualByIdQuery {
  id: string;
  includesRaces: boolean;
  includesClasses: boolean;
  includesBackgrounds: boolean;
  includesSpells: boolean;
  includesFeats: boolean;
}
