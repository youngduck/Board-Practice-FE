import BoardEditorButton from "@/components/board/BoardEditorButton";
import { useGetBoardById } from "@/hooks/api/board/useGetBoardById";
import { useDeleteBoardById } from "@/hooks/api/board/useDeleteBoardById";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../shared/layout/Loading";
import useCheckRole from "@/hooks/common/useCheckRole";

const BoardDetailView = () => {
  //ANCHOR - 게시판 세부조회 API
  const { boardId } = useParams();
  const { data: boardDetailData, isLoading } = useGetBoardById(boardId);

  const { isAuthor, isAdmin } = useCheckRole(boardDetailData.uid);
  const navigate = useNavigate();

  //ANCHOR - 삭제 버튼
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteBoardById(boardId);

  if (isLoading) return <Loading />;

  if (boardDetailData.visible || isAdmin || isAuthor)
    return (
      <section className="board-editor-body">
        <div className="mb-4">
          <div className="flex justify-between">
            <div className="text-2xl my-4 block text-gray-600">제목</div>
            <p className="text-2xl my-4 block text-gray-600">
              작성자:{boardDetailData.name}
            </p>
          </div>
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
            disabled={false}
            method={() =>
              navigate("/Board/Write", {
                state: {
                  type: "update",
                  id: boardId,
                  title: boardDetailData.title,
                  content: boardDetailData.content,
                },
              })
            }
            isAuthor={isAuthor}
          />
          <BoardEditorButton
            text="삭제"
            buttonType="button"
            disabled={isDeletePending}
            method={deleteMutate}
            isAuthor={isAuthor}
          />
        </div>
      </section>
    );
  else
    return <section className="board-editor-body">삭제된 게시물입니다</section>;
};

export default BoardDetailView;
