import { useAuthStore } from "@/store/auth-store";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormData } from "@/types/types";
import {
  emailVlidation,
  passwordVlidation,
} from "@/constants/LoginFormValidation";
import ErrorText from "../layout/ErrorText";
import { useLogin } from "@/hooks/api/auth/useLogin";

const LoginForm = () => {
  const { nickname } = useAuthStore();
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const onSubmit: SubmitHandler<ILoginFormData> = (data: ILoginFormData) => {
    mutate(data);
    console.log(data);
    reset();
  };

  const abc = () => {
    alert("로그아웃");
  };

  return (
    <section>
      {nickname ? (
        <>
          <p>{nickname}님 환영합니다.</p>
          <button onClick={abc}>로그아웃</button>
        </>
      ) : (
        <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", emailVlidation)}
            className="input-orange mb-2"
            placeholder="email"
          />
          {errors.email && <ErrorText errorMessage={errors.email.message} />}

          <input
            {...register("password", passwordVlidation)}
            className="input-orange"
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <ErrorText errorMessage={errors.password.message} />
          )}

          <button
            type="submit"
            disabled={isPending}
            className="login-button w-full"
          >
            로그인
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginForm;
