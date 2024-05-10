import { api } from "./axiosInstance";
import { IBoardFormData, IReplyBoardFormData } from "@/types/types";

//ANCHOR - 게시판 전체조회
export async function getBoardList() {
  const responseData = await api.get("/Board");
  console.log(responseData, "responseData 전체조회");
  return responseData.data.resultData;
}

//ANCHOR - 게시판 세부조회
export async function getBoardById(id: string | undefined) {
  const responseData = await api.get(`/Board/Detail?id=${id}`);
  return responseData.data;
}

//ANCHOR - 게시판 작성
export async function postBoard(data: IBoardFormData) {
  const responseData = await api.post("/Board", data);
  return responseData.data;
}

//ANCHOR - 게시판 답글 작성
export async function postReplyBoard(id: any, data: IReplyBoardFormData) {
  console.log("게시판 답글작성 api", data);
  const responseData = await api.post(`/Board/${id}`, data);
  return responseData.data;
}

//ANCHOR - 게시판 수정
export async function updateBoardById(id: string | undefined, data: any) {
  const responseData = await api.put(`/Board/${id}`, {
    id: id,
    title: data.title,
    content: data.content,
  });
  return responseData.data;
}

//ANCHOR - 게시판 삭제
export async function deleteBoardById(id: string | undefined) {
  const responseData = await api.put(`/Board/Detail?id=${id}`);
  return responseData.data;
}
