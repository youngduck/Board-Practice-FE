import { useForm, SubmitHandler } from "react-hook-form";
import ErrorText from "../layout/ErrorText";
import {
  nameValidation,
  emailVlidation,
  passwordVlidation,
} from "@/constants/signupFormValidation";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log("formData", data);
    reset();
  };

  const abc = () => {
    console.log("abc");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block" htmlFor="name">
        이름
      </label>
      <input
        {...register("name", nameValidation)}
        className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
      />
      {errors.name && <ErrorText errorMessage={errors.name.message} />}

      <label className="block" htmlFor="email">
        <span>이메일</span>
        {errors.email && <ErrorText errorMessage={errors.email.message} />}
      </label>

      <input
        {...register("email", emailVlidation)}
        className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
      />

      <label className="block" htmlFor="password">
        비밀번호
      </label>
      <input
        {...register("password", passwordVlidation)}
        type="password"
        className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-medium-orange focus:ring-2 focus:ring-medium-orange"
      />
      {errors.password && <ErrorText errorMessage={errors.password.message} />}

      <button
        type="submit"
        disabled={false}
        className="bg-deep-orange text-white rounded-md mt-10 p-2 disabled:bg-gray-300"
      >
        회원가입하기
      </button>
      <button type="button" onClick={abc}>
        zz
      </button>
    </form>
  );
};

export default SignUpForm;
