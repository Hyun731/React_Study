import { useTodoStore } from "../store/todoStore";

function TodoList(){
    const todos = useTodoStore((state) => state.todos)
    const toggleTodo = useTodoStore((state) => state.toggleTodo)
    const deleteTodo =  useTodoStore((state) => state.deleteTodo)

    return (
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
            <input
                type="checkbox"
                checked={todo.complement}
                onChange={() => toggleTodo(todo.id)}
            />
            <span
                style={{
                textDecoration: todo.complement ? 'line-through' : 'none'
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </li>
        ))}
        </ul>
    )
}

export default TodoList