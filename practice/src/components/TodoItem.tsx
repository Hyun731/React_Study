import { useTodoStore } from "../store/todoStore";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <li
      style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={todo.complement}
        onChange={() => toggleTodo(todo.id)}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.complement ? "line-through" : "none",
          color: todo.complement ? "#999" : "#000",
          fontSize: "16px",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          padding: "5px 15px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
