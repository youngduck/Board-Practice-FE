import { IBoardListItem } from "@/types/types";
import BoardListItem from "./BoardItem";
import { useGetBoardList } from "@/hooks/api/board/useGetBoardList";

import Loading from "@/components/layout/Loading";

const BoardList = () => {
  const { data: boardListData, isLoading } = useGetBoardList();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section-1200w-flex-mxauto h-auto min-h-[800px] my-2">
      <ul className="w-full">
        {boardListData.map((item: IBoardListItem, idx: number) => (
          <BoardListItem
            key={idx}
            id={item.id}
            title={item.title}
            content={item.content}
            create_TIME={item.create_TIME}
            visible={item.visible}
          />
        ))}
      </ul>
    </section>
  );
};

export default BoardList;
