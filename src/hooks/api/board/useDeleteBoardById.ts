import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBoardById } from "@/api/board-api";
import { useNavigate } from "react-router-dom";

export function useDeleteBoardById(id: string | undefined) {
  const queryClient = useQueryClient();
  const history = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteBoardById(id),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["boards"]);
      alert("게시글 삭제가 완료되었습니다.");
      history("/board/list");
    },
    onError: (err) => {
      alert("게시글 삭제를 실패했습니다.err :" + err);
    },
    mutationKey: ["boards"],
  });

  return { mutate, isPending };
}
