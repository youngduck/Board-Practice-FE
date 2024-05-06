import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBoardById } from "@/api/board-api";
import { useNavigate } from "react-router-dom";

export function useUpdateBoardById(id: string | undefined) {
  const queryClient = useQueryClient();
  const history = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateBoardById(id),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["boards", id]);
      alert("게시글 수정이 완료되었습니다.");
      history("/board/list");
    },
    onError: (err) => {
      alert("게시글 수정을 실패했습니다.err :" + err);
    },
    mutationKey: ["boards", id],
  });

  return { mutate, isPending };
}
