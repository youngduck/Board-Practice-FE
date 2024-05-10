import { createAuth } from "@/api/auth-api";
import { useMutation } from "@tanstack/react-query";
import { ISignUpFormData } from "@/types/types";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ISignUpFormData) => createAuth(data),
    onSuccess: () => {
      alert("회원가입을 성공했습니다.");
      navigate("/");
    },
    onError: (err) => {
      alert("회원가입에 실패했습니다 err: " + err);
    },
  });
  return { mutate, isPending };
}
