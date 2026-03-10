export interface GetAllBackgroundsQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
  includesBackgroundTraits: boolean;
  includesPersonalityTraits: boolean;
  includesIdeals: boolean;
  includesBonds: boolean;
  includesDefects: boolean;
}

export interface GetBackgroundByIdQuery {
  id: string;
  includesBackgroundTraits: boolean;
  includesPersonalityTraits: boolean;
  includesIdeals: boolean;
  includesBonds: boolean;
  includesDefects: boolean;
}
