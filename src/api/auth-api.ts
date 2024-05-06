import { api } from "./axiosInstance";
import { ISignUpFormData, ILoginFormData } from "@/types/types";

export async function createAuth(data: ISignUpFormData) {
  const responseData = await api.post("/Signup", data);
  return responseData.data;
}

export async function postLogin(data: ILoginFormData) {
  const responseData = await api.post("/Login", data);
  return responseData.data;
}
