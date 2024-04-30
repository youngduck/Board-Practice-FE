import { IBoardListItem } from "@/types/types";
import BoardListItem from "./BoardListItem";

interface IBoardList {
  boardListData: IBoardListItem[];
}

const BoardList: React.FC<IBoardList> = ({ boardListData }) => {
  return (
    <section className="section-1200w-flex-mxauto h-auto my-2">
      <ul className="w-full">
        {boardListData.map((item: IBoardListItem, idx: number) => (
          <BoardListItem
            key={idx}
            id={item.id}
            title={item.title}
            content={item.content}
            create_TIME={item.create_TIME}
          />
        ))}
      </ul>
    </section>
  );
};

export default BoardList;
