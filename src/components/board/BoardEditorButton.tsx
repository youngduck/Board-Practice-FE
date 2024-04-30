import React from "react";

interface IBoardEditorButton {
  text: string;
  buttonType: "submit" | "button" | "reset";
  disabled: boolean;
  method?: () => void;
}

const BoardEditorButton: React.FC<IBoardEditorButton> = ({
  text,
  buttonType,
  disabled,
  method,
}) => {
  return (
    <>
      <button
        className="rounded border-2 bg-white mx-2 py-2 px-6 text-lg text-medium-orange border-medium-orange hover:bg-light-orange hover:text-white focus:outline-none disabled:bg-gray-900 disabled:cursor-not-allowed"
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
