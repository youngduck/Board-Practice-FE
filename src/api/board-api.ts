import { api } from "./axiosInstance";

export async function getBoardList() {
  const responseData = await api.get("/Board/List");
  return responseData.data;
}

export async function getBoardById(id: string | undefined) {
  const responseData = await api.get(`/Board/Detail?id=${id}`);
  return responseData.data;
}

export async function postBoard(data: any) {
  const responseData = await api.post("/Board", data);
  return responseData.data;
}
