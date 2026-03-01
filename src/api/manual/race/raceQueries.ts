export interface GetAllRacesQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
  includesTraits: boolean;
  includesSubRaces: boolean;
}

export interface GetRaceByIdQuery {
  id: string;
  includesTraits: boolean;
  includesSubRaces: boolean;
}
