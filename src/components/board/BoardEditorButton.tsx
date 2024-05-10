import React from "react";

interface IBoardEditorButton {
  text: string;
  buttonType: "submit" | "button" | "reset";
  disabled: boolean;
  method?: (data: any) => any;
  isAuthor: boolean;
}

const BoardEditorButton: React.FC<IBoardEditorButton> = ({
  text,
  buttonType,
  disabled,
  method,
  isAuthor,
}) => {
  return (
    <>
      <button
        className={`${
          isAuthor ? "" : "hidden"
        } p-1 border-2 border-deep-orange mr-2 rounded-md hover:text-white hover:bg-light-orange disabled:bg-gray-900 disabled:cursor-not-allowed`}
        disabled={disabled}
        type={buttonType}
        onClick={method}
      >
        {text}
      </button>
    </>
  );
};

export default BoardEditorButton;
