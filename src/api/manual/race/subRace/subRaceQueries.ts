export interface GetAllSubRacesQuery {
  name?: string;
  raceId?: string;
  pageNumber: number;
  pageSize: number;
  includesSubRacialTraits: boolean;
}

export interface GetSubRaceByIdQuery {
  id: string;
  includesSubRacialTraits: boolean;
}
