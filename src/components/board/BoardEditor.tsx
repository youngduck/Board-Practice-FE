import { usePostBoard } from "@/hooks/api/board/usePostBoard";
import BoardEditorButton from "./BoardEditorButton";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  titleValidation,
  contentValidation,
} from "@/constants/boardEditorValidation";
import ErrorText from "../layout/ErrorText";
import { IBoardFormData } from "@/types/types";

const BoardEditor = () => {
  const { mutate, isPending } = usePostBoard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBoardFormData>();

  const onSubmit: SubmitHandler<IBoardFormData> = (data: IBoardFormData) => {
    mutate(data);
    reset();
  };

  return (
    <>
      <form className="board-editor-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="text-2xl block text-gray-600">
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
            text="작성"
            buttonType="submit"
            disabled={isPending}
          />
        </div>
      </form>
    </>
  );
};

export default BoardEditor;
