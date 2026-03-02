export interface GetAllRacialTraitsQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetRacialTraitByIdQuery {
  id: string;
}
