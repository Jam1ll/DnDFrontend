import { api } from "./axiosClient";

//wrapper de C#
export interface ApiResponse<T> {
  succeeded: boolean;
  message: string;
  errors: string[] | null;
  data: T;
}

export const createGenericService = <
  TResponseDTO,
  TGetAllQuery,
  TGetByIdQuery extends { id: string },
  TCreateCommand,
  TUpdateCommand,
>(
  endpointName: string,
) => {
  return {
    //
    // GET
    //
    getAll: async (params: TGetAllQuery): Promise<TResponseDTO[]> => {
      const response = await api.get<ApiResponse<TResponseDTO[]>>(
        `${endpointName}/All`,
        { params },
      );
      return response.data.data;
    },
    //
    // GET(ID)
    //
    getById: async (data: TGetByIdQuery): Promise<TResponseDTO> => {
      const { id, ...queryParams } = data;
      const response = await api.get<ApiResponse<TResponseDTO>>(
        `${endpointName}/${id}`,
        {
          params: queryParams,
        },
      );
      return response.data.data;
    },
    //
    // CREATE
    //
    create: async (data: TCreateCommand) => {
      const response = await api.post<ApiResponse<string>>(
        `${endpointName}/Create`,
        data,
      );
      return response.data.data;
    },
    //
    // UPDATE
    //
    update: async (data: TUpdateCommand) => {
      const response = await api.put<ApiResponse<string>>(
        `${endpointName}/Update`,
        data,
      );
      return response.data.data;
    },
    //
    // DELETE
    //
    delete: async (id: string) => {
      const response = await api.delete<ApiResponse<string>>(
        `${endpointName}/Delete`,
        {
          data: { id: id },
        },
      );
      return response.data.data;
    },
  };
};
