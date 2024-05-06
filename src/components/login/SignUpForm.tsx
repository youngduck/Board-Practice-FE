import { useForm, SubmitHandler } from "react-hook-form";
import ErrorText from "../layout/ErrorText";
import {
  nameValidation,
  emailVlidation,
  passwordVlidation,
} from "@/constants/signupFormValidation";
import { ISignUpFormData } from "@/types/types";
import { useSignUp } from "@/hooks/api/auth/useSignUp";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUpFormData>();
  const { mutate, isPending } = useSignUp();

  const onSubmit: SubmitHandler<ISignUpFormData> = (data: ISignUpFormData) => {
    mutate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block" htmlFor="name">
        이름
      </label>
      <input {...register("name", nameValidation)} className="input-orange" />
      {errors.name && <ErrorText errorMessage={errors.name.message} />}

      <label className="block" htmlFor="email">
        <span>이메일</span>
        {errors.email && <ErrorText errorMessage={errors.email.message} />}
      </label>

      <input {...register("email", emailVlidation)} className="input-orange" />

      <label className="block" htmlFor="password">
        비밀번호
      </label>
      <input
        {...register("password", passwordVlidation)}
        type="password"
        className="input-orange"
      />
      {errors.password && <ErrorText errorMessage={errors.password.message} />}

      <button
        type="submit"
        disabled={isPending}
        className="bg-deep-orange text-white rounded-md mt-10 p-2 disabled:bg-gray-300"
      >
        회원가입하기
      </button>
    </form>
  );
};

export default SignUpForm;
