import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { fetchAgeData } from "../requests/fetchAgeData";

type Options = Omit<UseQueryOptions<number>, 'queryKey' | 'queryFn'>

export const useFetchAgeData = (name: string, options: Options) => useQuery({
  queryKey: ['fetchAgeData', name],
  queryFn: () => fetchAgeData(name),
  ...options
});
