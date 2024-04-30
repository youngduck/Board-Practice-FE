import Loading from "@/components/layout/Loading";
import { useGetBoardById } from "@/hooks/api/board/useGetBoardById";
import { useParams } from "react-router-dom";
import BoardDetailView from "@/components/board/BoardDetailView";

const BoardEditorPage = () => {
  const { id } = useParams();
  const { data: boardDetailData, isLoading } = useGetBoardById(id);

  if (isLoading) return <Loading />;
  const { title, content } = boardDetailData;

  return (
    <main>
      <BoardDetailView title={title} content={content} />
    </main>
  );
};

export default BoardEditorPage;
