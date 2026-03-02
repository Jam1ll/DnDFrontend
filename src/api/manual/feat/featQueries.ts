export interface GetAllFeatsQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

export interface GetFeatByIdQuery {
  id: string;
}
