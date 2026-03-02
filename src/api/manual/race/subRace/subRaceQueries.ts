export interface GetAllSubRacesQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
  includesTraits: boolean;
}

export interface GetSubRaceByIdQuery {
  id: string;
  includesTraits: boolean;
}
