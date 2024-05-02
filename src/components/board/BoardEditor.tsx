import { usePostBoard } from "@/hooks/api/board/usePostBoard";
import BoardEditorButton from "./BoardEditorButton";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  titleValidation,
  contentValidation,
} from "@/constants/boardEditorValidation";
import SignUpFormErrorText from "../login/SignUpFormErrorText";

type FormData = {
  title: string;
  content: string;
};

const BoardEditor = () => {
  const { mutate, isPending } = usePostBoard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    mutate(data);
    reset();
  };

  return (
    <>
      <form
        className="section-1200w-flex-mxauto flex-col my-24 border border-light-orange rounded-lg bg-white p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label htmlFor="title" className="text-2xl my-4 block text-gray-600">
            제목
          </label>
          <input
            id="title"
            {...register("title", titleValidation)}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
          />
          {errors.title && (
            <SignUpFormErrorText errorMessage={errors.title.message} />
          )}
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
            className="h-96 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
          ></textarea>
          {errors.content && (
            <SignUpFormErrorText errorMessage={errors.content.message} />
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
