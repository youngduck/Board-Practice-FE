import React, { useState } from "react";
import { usePostBoard } from "@/hooks/api/board/usePostBoard";
import BoardEditorButton from "./BoardEditorButton";

type FormData = {
  title: string;
  content: string;
};

const BoardEditor = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const { mutate, isPending } = usePostBoard();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <>
      <form
        className="section-1200w-flex-mxauto flex-col my-24 border border-light-orange rounded-lg bg-white p-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="title" className="text-2xl my-4 block text-gray-600">
            제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
          />
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
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="h-96 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
          ></textarea>
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
