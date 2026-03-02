export interface GetAllSubRacialTraitsQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
}

export interface GetSubRacialTraitByIdQuery {
  id: string;
}
