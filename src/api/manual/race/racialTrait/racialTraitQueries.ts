export interface GetAllRacialTraitsQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
}

export interface GetRacialTraitByIdQuery {
  id: string;
}
