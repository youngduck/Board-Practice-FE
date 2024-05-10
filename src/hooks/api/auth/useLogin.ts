import { postLogin } from "@/api/auth-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILoginFormData } from "@/types/types";
import { useAuthStore } from "@/store/auth-store";

export function useLogin() {
  const queryClient = useQueryClient();
  const { setUserData } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ILoginFormData) => postLogin(data),
    mutationKey: ["auth"],
    onSuccess: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      queryClient.invalidateQueries(["auth"]);
      setUserData(data.resultData);
      alert("로그인에 성공했습니다.");
    },
    onError: (err) => {
      alert("로그인에 실패했습니다 err: " + err);
    },
  });
  return { mutate, isPending };
}
