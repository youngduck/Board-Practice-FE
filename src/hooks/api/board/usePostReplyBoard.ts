import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReplyBoard } from "@/api/board-api";
import { useNavigate } from "react-router-dom";
import { IReplyBoardFormData } from "@/types/types";

export function usePostReplyBoard(id: any) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: IReplyBoardFormData) => postReplyBoard(id, data),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["boards", "reply", id]);
      alert("답글 작성이 완료되었습니다.");
      navigate("/board/list");
    },
    onError: (err) => {
      alert("답글 작성을 실패했습니다. err :" + err);
    },
    mutationKey: ["boards", "reply", id],
  });

  return { mutate, isPending };
}
