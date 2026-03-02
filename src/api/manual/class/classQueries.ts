export interface GetAllClassesQuery {
  pageNumber: number;
  pageSize: number;
  name?: string;
  includesClassTraits: boolean;
  includesSubClasses: boolean;
}

export interface GetClassByIdQuery {
  id: string;
  pageNumber: number;
  pageSize: number;
  name?: string;
  includesClassTraits: boolean;
  includesSubClasses: boolean;
}
