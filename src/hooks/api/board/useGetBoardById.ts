import { useQuery } from "@tanstack/react-query";
import { getBoardById } from "@/api/board-api";

export function useGetBoardById(id: string | undefined) {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ["boards", id],
    queryFn: () => getBoardById(id),
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000 * 1,
  });

  return { data, isLoading };
}
