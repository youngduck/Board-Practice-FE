import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBoardById } from "@/api/board-api";
import { useNavigate } from "react-router-dom";
import { IBoardFormData } from "@/types/types";

export function useUpdateBoardById(id: string | undefined) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: IBoardFormData) => updateBoardById(id, data),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["boards", id]);
      navigate("/board/list");
      alert("게시글 수정이 완료되었습니다.");
    },
    onError: (err) => {
      alert("게시글 수정을 실패했습니다.err :" + err);
    },
    mutationKey: ["boards", id],
  });

  return { mutate, isPending };
}
