import React from "react";
import type { IBoardListItem } from "@/types/types";
import { getCalculateTimeAgo } from "@/utils/timeUtils";
import { Link } from "react-router-dom";

const BoardItem: React.FC<IBoardListItem> = ({
  title,
  id,
  create_TIME,
  visible,
}) => {
  const calculateTimeAgo = getCalculateTimeAgo(create_TIME);

  return (
    <Link to={`/board/detail/${id}`}>
      <li className="rounded-md border-2 w-full my-4 p-4 border-light-orange hover:border-deep-orange">
        {visible ? (
          <>
            <div className="flex justify-between">
              <p className="text-[20px]">{title}</p>
              <div>
                <p>{calculateTimeAgo}</p>
              </div>
            </div>
          </>
        ) : (
          <>삭제된 게시물 입니다.</>
        )}
      </li>
    </Link>
  );
};

export default BoardItem;
