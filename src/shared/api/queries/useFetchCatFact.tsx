import { useQuery } from "@tanstack/react-query";
import { fetchCatFacts } from "../requests/fetchCatFact";

export const useFetchCatFact = () => useQuery({
    queryKey: ['catFact'],
    async queryFn() {
      const { data } = await fetchCatFacts();
      return data.fact;
    },
    enabled: false,
})