import React from "react";
import type { IBoardListItem } from "@/types/types";
import { getCalculateTimeAgo } from "@/utils/timeUtils";
import { useNavigate } from "react-router-dom";
import BoardEditorButton from "@/components/board/BoardEditorButton";
import { useDeleteBoardById } from "@/hooks/api/board/useDeleteBoardById";
import rightarrow from "@/assets/svg/right_arrow.svg";
import useCheckRole from "@/hooks/common/useCheckRole";
const BoardItem: React.FC<IBoardListItem> = ({
  id,
  uid,
  title,
  content,
  create_TIME,
  visible,
  name,
  depth,
}) => {
  const calculateTimeAgo = getCalculateTimeAgo(create_TIME);
  const navigate = useNavigate();

  const { isAuthor, isAdmin } = useCheckRole(uid);

  //ANCHOR - 삭제 버튼
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteBoardById(String(id));

  if (visible)
    return (
      <>
        <li
          className={`rounded-md border-2 w-full my-4 p-4 border-light-orange hover:border-deep-orange`}
          style={{ marginLeft: depth * 40 }}
        >
          <div className={`flex justify-between`}>
            <div>
              {depth > 0 && <img src={rightarrow} alt="" />}
              <p className="text-[20px]">제목: {title}</p>
              <p>내용: {content}</p>
              <p>작성자: {name}</p>
              <div className="mt-2">
                <BoardEditorButton
                  text="답글 달기"
                  buttonType="button"
                  disabled={false}
                  method={() =>
                    navigate("/Board/Write", {
                      state: {
                        type: "comment",
                        id: id,
                      },
                    })
                  }
                  isAuthor={true}
                />
                <BoardEditorButton
                  text="게시글 이동"
                  buttonType="button"
                  disabled={false}
                  method={() => navigate(`/board/detail/${id}`)}
                  isAuthor={true}
                />
                <BoardEditorButton
                  text="수정"
                  buttonType="button"
                  disabled={false}
                  method={() =>
                    navigate("/Board/Write", {
                      state: {
                        type: "update",
                        id: id,
                        title: title,
                        content: content,
                      },
                    })
                  }
                  isAuthor={isAuthor || isAdmin}
                />
                <BoardEditorButton
                  text="삭제"
                  buttonType="button"
                  disabled={isDeletePending}
                  method={deleteMutate}
                  isAuthor={isAuthor || isAdmin}
                />
              </div>
            </div>
            <div>
              <p>{calculateTimeAgo}</p>
            </div>
          </div>
        </li>
      </>
    );
  else
    return (
      <li
        className="rounded-md border-2 w-full my-4 p-4 border-light-orange hover:border-deep-orange"
        style={{ marginLeft: depth * 40 }}
        onClick={() => navigate(`/board/detail/${id}`)}
      >
        <p>삭제된 게시물 입니다.</p>
      </li>
    );
};

export default BoardItem;
