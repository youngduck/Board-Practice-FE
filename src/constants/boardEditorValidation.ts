export const titleValidation = {
  required: {
    value: true,
    message: "제목을 입력해주세요.",
  },
  minLength: {
    value: 2,
    message: "제목은 최소 2자 이상이어야 합니다.",
  },
  maxLength: {
    value: 10,
    message: "제목은 최대 10자 이하여야 합니다.",
  },
};
export const contentValidation = {
  required: {
    value: true,
    message: "내용을 입력해주세요.",
  },
  minLength: {
    value: 2,
    message: "내용은 최소 2자 이상이어야 합니다.",
  },
  maxLength: {
    value: 10,
    message: "내용은 최대 10자 이하여야 합니다.",
  },
};
