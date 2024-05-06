import BoardDetailView from "@/components/board/BoardDetailView";

const BoardDetailPage = () => {
  return (
    <main>
      <BoardDetailView />
      <section className="board-editor-body">
        <div>추가하기</div>
      </section>
    </main>
  );
};

export default BoardDetailPage;
