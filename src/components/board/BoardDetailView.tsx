import BoardEditorButton from "@/components/board/BoardEditorButton";
import { useUpdateBoardById } from "@/hooks/api/board/useUpdateBoard";
import { useGetBoardById } from "@/hooks/api/board/useGetBoardById";
import { useDeleteBoardById } from "@/hooks/api/board/useDeleteBoardById";
import { useParams } from "react-router-dom";
import Loading from "../layout/Loading";

const BoardDetailView = () => {
  const { id } = useParams();

  const { data: boardDetailData, isLoading } = useGetBoardById(id);
  const { mutate: updateMutate, isPending: isUpdatePending } =
    useUpdateBoardById(id);
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteBoardById(id);

  if (isLoading) return <Loading />;

  if (!boardDetailData.visible)
    return <section className="board-editor-body">삭제된 게시물입니다</section>;
  else
    return (
      <section className="board-editor-body">
        <div className="mb-4">
          <div className="text-2xl my-4 block text-gray-600">제목</div>
          <div className="input-orange">{boardDetailData.title}</div>
        </div>
        <div className="mb-4">
          <div className="text-2xl my-4 block text-gray-600">내용</div>
          <div className="h-96 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange">
            {boardDetailData.content}
          </div>
        </div>
        <div className="flex flex-wrap">
          <BoardEditorButton
            text="수정"
            buttonType="button"
            disabled={isDeletePending || isUpdatePending}
            method={updateMutate}
          />
          <BoardEditorButton
            text="삭제"
            buttonType="button"
            disabled={isDeletePending || isUpdatePending}
            method={deleteMutate}
          />
        </div>
      </section>
    );
};

export default BoardDetailView;
