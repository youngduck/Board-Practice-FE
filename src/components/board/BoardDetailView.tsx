import React from "react";
import BoardEditorButton from "@/components/board/BoardEditorButton";

interface IBoardDetailView {
  title: string;
  content: string;
}

const BoardDetailView: React.FC<IBoardDetailView> = ({ title, content }) => {
  const handlePut = () => {
    alert("수정");
  };
  const handleDelete = () => {
    alert("삭제");
  };

  return (
    <div>
      <section className="section-1200w-flex-mxauto flex-col my-24 border border-light-orange rounded-lg bg-white p-8">
        <div className="mb-4">
          <div className="text-2xl my-4 block text-gray-600">제목</div>
          <div className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange">
            {title}
          </div>
        </div>
        <div className="mb-4">
          <div className="text-2xl my-4 block text-gray-600">내용</div>
          <div className="h-96 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange">
            {content}
          </div>
        </div>
        <div className="flex flex-wrap">
          <BoardEditorButton
            text="수정"
            buttonType="button"
            disabled={true}
            method={handlePut}
          />
          <BoardEditorButton
            text="삭제"
            buttonType="button"
            disabled={false}
            method={handleDelete}
          />
        </div>
      </section>
    </div>
  );
};

export default BoardDetailView;
