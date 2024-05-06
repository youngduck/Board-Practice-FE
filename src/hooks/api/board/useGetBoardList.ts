import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "@/api/board-api";

export function useGetBoardList() {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ["boards"],
    queryFn: () => getBoardList(),
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000,
  });

  return { data, isLoading };
}
