import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "@/api/board-api";

export function useGetBoardList() {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ["boards"],
    queryFn: () => getBoardList(),
  });

  return { data, isLoading };
}
