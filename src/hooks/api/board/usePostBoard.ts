import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBoard } from "@/api/board-api";
import { useNavigate } from "react-router-dom";

export function usePostBoard() {
  const queryClient = useQueryClient();
  const history = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => postBoard(data),
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      queryClient.invalidateQueries(["boards"]);
      alert("게시글 작성이 완료되었습니다.");
      history("/board/list");
    },
    onError: (err) => {
      console.log(err);
    },
    mutationKey: ["boards"],
  });

  return { mutate, isPending };
}
