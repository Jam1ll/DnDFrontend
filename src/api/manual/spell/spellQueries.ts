export interface GetAllSpellsQuery {
  name?: string;
  slotLevel?: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetSpellByIdQuery {
  id: string;
}
