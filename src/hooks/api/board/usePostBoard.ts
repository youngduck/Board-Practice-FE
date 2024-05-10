import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBoard } from "@/api/board-api";
import { useNavigate } from "react-router-dom";
import { IBoardFormData } from "@/types/types";

export function usePostBoard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: IBoardFormData) => postBoard(data),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["boards"]);
      alert("게시글 작성이 완료되었습니다.");
      navigate("/board/list");
    },
    onError: (err) => {
      alert("게시글 작성을 실패했습니다. err :" + err);
    },
    mutationKey: ["boards"],
  });

  return { mutate, isPending };
}
