import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const createGenericHooks = <
  TResponseDTO,
  TGetAllQuery,
  TGetByIdQuery extends { id: string },
  TCreateCommand,
  TUpdateCommand,
>(
  queryKeyBase: string,
  service: {
    getAll: (params: TGetAllQuery) => Promise<TResponseDTO[]>;
    getById: (params: TGetByIdQuery) => Promise<TResponseDTO>;
    create: (params: TCreateCommand) => Promise<string>;
    update: (params: TUpdateCommand) => Promise<string>;
    delete: (id: string) => Promise<string>;
  },
) => {
  return {
    //
    // GET
    //
    useGetAll: (params: TGetAllQuery) => {
      return useQuery({
        queryKey: [queryKeyBase, "all", params],
        queryFn: () => service.getAll(params),
      });
    },
    //
    // GET(ID)
    //
    useGetById: (params: TGetByIdQuery, enabled: boolean = true) => {
      return useQuery({
        queryKey: [queryKeyBase, "detail", params.id, params],
        queryFn: () => service.getById(params),
        enabled: !!params.id && enabled, //solo buscara si el Guid es valido
      });
    },
    //
    // CREATE
    //
    useCreate: () => {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: (data: TCreateCommand) => service.create(data),
        onSuccess: () => {
          //borra la cache que empiece por la palabra clave
          queryClient.invalidateQueries({ queryKey: [queryKeyBase] });
        },
      });
    },
    //
    // UPDATE
    //
    useUpdate: () => {
      const queryCient = useQueryClient();
      return useMutation({
        mutationFn: (data: TUpdateCommand) => service.update(data),
        onSuccess: () => {
          queryCient.invalidateQueries({ queryKey: [queryKeyBase] });
        },
      });
    },
    //
    // DELETE
    //
    useDelete: () => {
      const queryCient = useQueryClient();
      return useMutation({
        mutationFn: (id: string) => service.delete(id),
        onSuccess: () => {
          queryCient.invalidateQueries({ queryKey: [queryKeyBase] });
        },
      });
    },
  };
};
