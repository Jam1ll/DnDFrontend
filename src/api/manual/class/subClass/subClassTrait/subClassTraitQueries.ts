export interface GetAllSubClassTraitsQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId?: string;
}

export interface GetSubClassTraitByIdQuery {
  id: string;
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId?: string;
}
