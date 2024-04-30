export const nameValidation = {
  required: {
    value: true,
    message: "이름을 입력해주세요.",
  },
  minLength: {
    value: 2,
    message: "이름은 최소 2자 이상이어야 합니다.",
  },
  maxLength: {
    value: 10,
    message: "이름은 최대 10자 이하여야 합니다.",
  },
};

export const emailVlidation = {
  required: {
    value: true,
    message: "이메일을 입력해주세요.",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "올바른 이메일 형식을 입력해 주세요.",
  },
};

export const passwordVlidation = {
  required: {
    value: true,
    message: "비밀번호를 입력해주세요.",
  },
  minLength: {
    value: 6,
    message: "비밀번호는 최소 6자 이상이어야 합니다.",
  },
  maxLength: {
    value: 10,
    message: "비밀번호는 최대 10자 이하이어야 합니다.",
  },
};
