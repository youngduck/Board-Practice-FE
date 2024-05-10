import { useAuthStore } from "@/store/auth-store";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormData } from "@/types/types";
import {
  emailVlidation,
  passwordVlidation,
} from "@/constants/LoginFormValidation";
import ErrorText from "../../shared/layout/ErrorText";
import { useLogin } from "@/hooks/api/auth/useLogin";

const LoginForm = () => {
  const { user, setUserData } = useAuthStore();
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const onSubmit: SubmitHandler<ILoginFormData> = (data: ILoginFormData) => {
    mutate(data);
    reset();
  };

  const onLogOut = () => {
    setUserData({ role: null, name: null, email: null, id: null });
    useAuthStore.persist.clearStorage();
  };

  return (
    <section>
      {user.email ? (
        <div className="">
          <img
            className="inline-flex object-cover border-4 border-light-orange rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-medium-orange h-44 w-44"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="user_img"
          />
          <p className="text-lg mx-auto mt-4 text-center">{user.name}님</p>
          <button
            type="button"
            className="login-button w-full"
            onClick={onLogOut}
          >
            로그아웃
          </button>
        </div>
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
