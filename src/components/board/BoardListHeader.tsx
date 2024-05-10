import { useNavigate } from "react-router-dom";

const BoardListHeader = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-between w-[1200px] h-auto mx-auto my-2">
      <h1 className=" text-medium-orange font-bold text-[32px] border-b-4 border-medium-orange">
        Board List
      </h1>
      <button
        className="rounded-md border-2 p-4 border-medium-orange"
        onClick={() => {
          navigate("/Board/Write", {
            state: {
              type: "new",
            },
          });
        }}
      >
        게시글 작성
      </button>
    </section>
  );
};

export default BoardListHeader;
