import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "@/api/json-test-api";

export function useGetTodoList() {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodoList(),
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000,
  });

  return { data, isLoading };
}
