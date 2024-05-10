import { useGetTodoList } from "@/hooks/api/json-test/useGetTodo";
import TodoLoading from "@/shared/layout/TodoLoading";

const TodoList = () => {
  const { data: TodoListData, isLoading } = useGetTodoList();

  if (isLoading) return <TodoLoading />;

  return (
    <>
      <h1 className="text-[40px] text-deep-orange">todo list</h1>
      <ul className="flex flex-wrap w-full h-[800px]">
        {TodoListData.map((item: any, index: number) => (
          <li key={index} className="p-1">
            todo:{item.id}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
