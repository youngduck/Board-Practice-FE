import BoardList from "@/components/board/BoardList";
import { useGetBoardList } from "@/hooks/api/board/useGetBoardList";
import { Link } from "react-router-dom";
import Loading from "@/components/layout/Loading";

const BoardListPage = () => {
  const { data: boardListData, isLoading } = useGetBoardList();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="w-full auto">
      <section className="flex justify-between w-[1200px] h-auto mx-auto my-2">
        <h1 className=" text-deep-orange font-bold text-[32px] border-b-4 border-deep-orange">
          게시글 목록
        </h1>
        <Link to="/Board/Write">
          <div className="rounded-md border-2 p-4 border-deep-orange">
            작성하기
          </div>
        </Link>
      </section>
      <BoardList boardListData={boardListData} />
    </main>
  );
};

export default BoardListPage;
