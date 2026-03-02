export interface GetAllSubRacesQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
  includesSubRacialTraits: boolean;
}

export interface GetSubRaceByIdQuery {
  id: string;
  includesSubRacialTraits: boolean;
}
