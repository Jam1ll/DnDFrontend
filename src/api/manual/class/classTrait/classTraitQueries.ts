export interface GetAllClassTraitsQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId: string;
}

export interface GetClassTraitByIdQuery {
  id: string;
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId: string;
}
