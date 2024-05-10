import React from "react";

interface IErrorText {
  errorMessage: string | undefined;
}

const ErrorText: React.FC<IErrorText> = ({ errorMessage }) => {
  return <p className="text-sm text-light-orange">{errorMessage}</p>;
};

export default ErrorText;
