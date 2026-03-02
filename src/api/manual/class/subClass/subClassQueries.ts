export interface GetAllSubClassesQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId?: string;
  includesSubClassTraits: boolean;
}

export interface GetSubClassByIdQuery {
  id: string;
  pageNumber: number;
  pageSize: number;
  name?: string;
  classId?: string;
  includesSubClassTraits: boolean;
}
