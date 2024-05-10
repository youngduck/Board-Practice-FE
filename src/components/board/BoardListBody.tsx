import { IBoardListItem } from "@/types/types";
import BoardItem from "./BoardItem";
import { useGetBoardList } from "@/hooks/api/board/useGetBoardList";

import Loading from "@/shared/layout/Loading";

const BoardListBody = () => {
  const { data: boardListData, isLoading } = useGetBoardList();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section-1200w-flex-mxauto h-auto min-h-[800px] my-2">
      <ul className="w-full">
        {boardListData.map((item: IBoardListItem, idx: number) => (
          <BoardItem
            key={idx}
            id={item.id}
            uid={item.uid}
            title={item.title}
            content={item.content}
            create_TIME={item.create_TIME}
            visible={item.visible}
            name={item.name}
            depth={item.depth}
          />
        ))}
      </ul>
    </section>
  );
};

export default BoardListBody;
