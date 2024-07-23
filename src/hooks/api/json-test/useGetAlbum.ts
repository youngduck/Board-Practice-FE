import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getAlbumList } from "@/api/json-test-api";

export function useGetAlbum() {
  const fallback: [] = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: () => getAlbumList(),
    staleTime: 60 * 1000 * 2,
    gcTime: 60 * 1000,
  });

  return { data, isLoading };
}

export function useGetAlbum2() {
  const { data } = useSuspenseQuery({
    queryKey: ["post"],
    queryFn: () => getAlbumList(),
  });

  return { data };
}
