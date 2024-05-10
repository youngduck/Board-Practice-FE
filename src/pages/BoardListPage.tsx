import BoardList from "@/components/board/BoardListBody";
import BoardListHeader from "@/components/board/BoardListHeader";

const BoardListPage = () => {
  return (
    <main className="w-full auto">
      <BoardListHeader />
      <BoardList />
    </main>
  );
};

export default BoardListPage;
