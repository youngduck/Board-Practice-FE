import axios from "axios";
//ANCHOR - 할일 조회
export async function getTodoList() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const responseData = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return responseData.data;
}

// export async function getAlbumList() {
//   const responseData = await axios.get(
//     "https://jsonplaceholder.typicode.com/albums"
//   );
//   return responseData.data;
// }

export async function getAlbumList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const responseData = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return responseData.data;
}
