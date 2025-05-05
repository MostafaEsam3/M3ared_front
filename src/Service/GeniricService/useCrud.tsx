// src/Service/GeniricService/useCrud.tsx

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './../Api/Interceptor'; // <-- adjust this import if needed
import type { UseQueryOptions } from '@tanstack/react-query';

// Optional: Define a generic type if you want to make this strongly typed later.
type Method = 'get' | 'post' | 'put' | 'delete';
type CrudOptions = Omit<UseQueryOptions<any, any, any>, 'queryKey' | 'queryFn'>;

export const useCrud = (url: string, id?: string ,  queryOptions?: CrudOptions
) => {
  const queryClient = useQueryClient();

  // --------------------------
  // GET (List or Single)
  // --------------------------
  const getQuery = useQuery({
    queryKey: id ? [url, id] : [url],
    queryFn: async () => {
      const res = await api.get(id ? `${url}/${id}` : url);
      return Array.isArray(res.data.data) ? res.data.data : [res.data.data];
    },
    enabled: !!url,
    ...queryOptions, // <--- allows staleTime, refetchOnMount, etc.

  });

  // --------------------------
  // CREATE
  // --------------------------
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post(url, data);
      return res.data;
    },
    onError: (error) => {
      console.error('Error creating data:', error);},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] as const });
    },
  });

  // --------------------------
  // UPDATE
  // --------------------------
  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.put(`${url}/${data.id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] as const });
    },
  });

  // --------------------------
  // DELETE
  // --------------------------
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`${url}/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [url] as const });
    },
  });

  return {
    getQuery,              // use for GET: getQuery.data, getQuery.isLoading, etc.
    create: createMutation.mutate,      // use like: create({ name: "User" })
    update: updateMutation.mutate,      // use like: update({ id: "123", name: "Updated" })
    remove: deleteMutation.mutate,      // use like: remove("123")
  };
};
