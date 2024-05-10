import { usePostBoard } from "@/hooks/api/board/usePostBoard";
import { useAuthStore } from "@/store/auth-store";
import BoardEditorButton from "./BoardEditorButton";
import { useForm } from "react-hook-form";
import {
  titleValidation,
  contentValidation,
} from "@/constants/boardEditorValidation";
import ErrorText from "../../shared/layout/ErrorText";
import { IBoardFormData } from "@/types/types";
import { useLocation } from "react-router-dom";
import { useUpdateBoardById } from "@/hooks/api/board/useUpdateBoard";
import { usePostReplyBoard } from "@/hooks/api/board/usePostReplyBoard";

const BoardEditor: React.FC = () => {
  const uid = useAuthStore((state) => state.user.id);

  const { state } = useLocation();

  //ANCHOR - 작성,수정 조건 defaultValues
  let defaultValues = {
    title: "",
    content: "",
  };
  if (state.type === "update") {
    defaultValues = {
      title: state.title,
      content: state.content,
    };
  }

  //ANCHOR - 작성,수정,답글작성 mutates
  const { mutate: postMutate, isPending: isPostPending } = usePostBoard();
  const { mutate: updateMutate, isPending: isUpdatePending } =
    useUpdateBoardById(state.id);
  const { mutate: replyPostMutate, isPending: isReplyPending } =
    usePostReplyBoard(state.id);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<IBoardFormData>({
    defaultValues: defaultValues,
  });

  return (
    <>
      <form className="board-editor-body">
        <div className="mb-4">
          <label htmlFor="title" className="text-2xl block my-4 text-gray-600">
            제목
          </label>
          <input
            id="title"
            {...register("title", titleValidation)}
            className="input-orange"
          />
          {errors.title && <ErrorText errorMessage={errors.title.message} />}
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="text-2xl my-4 block text-gray-600"
          >
            내용
          </label>
          <textarea
            id="content"
            {...register("content", contentValidation)}
            className="textarea-orange"
          ></textarea>
          {errors.content && (
            <ErrorText errorMessage={errors.content.message} />
          )}
        </div>
        <div className="flex flex-wrap">
          <BoardEditorButton
            isAuthor={state.type === "new"}
            text="작성"
            buttonType="button"
            disabled={isPostPending}
            method={() => {
              const submitData = { ...getValues(), uid: uid };
              postMutate(submitData);
            }}
          />
          <BoardEditorButton
            isAuthor={state.type === "update"}
            text="수정"
            buttonType="button"
            disabled={isUpdatePending}
            method={() => updateMutate(getValues())}
          />
          <BoardEditorButton
            isAuthor={state.type === "comment"}
            text="답글달기"
            buttonType="button"
            disabled={isReplyPending}
            method={() => {
              const submitData = {
                ...getValues(),
                uid: uid,
                pid: state.id,
              };
              console.log("submitData답글", submitData);
              replyPostMutate(submitData);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default BoardEditor;
