import BoardEditor from "@/components/board/BoardEditor";
import { Navigate, useLocation } from "react-router-dom";

const BoardEditorPage = () => {
  const { state } = useLocation();

  console.log(state === null);
  //ANCHOR - URL입력을 통한 접근제한
  if (state === null) {
    alert("로그인이 필요한 기능입니다.");
    return <Navigate to="/" />;
  }

  return (
    <main>
      <BoardEditor />
    </main>
  );
};

export default BoardEditorPage;
