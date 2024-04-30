import React from "react";

interface ISignUpFormErrorText {
  errorMessage: string | undefined;
}

const SignUpFormErrorText: React.FC<ISignUpFormErrorText> = ({
  errorMessage,
}) => {
  return <p className="text-sm text-light-orange">{errorMessage}</p>;
};

export default SignUpFormErrorText;
