import { api } from "./axiosInstance";

export async function createAuth() {
  const responseData = await api.post("/Signup");
  return responseData.data;
}
