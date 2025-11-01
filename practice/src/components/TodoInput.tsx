import {useState} from 'react'
import { useTodoStore } from '../store/todoStore'

function TodoInput(){
    const [input, setInput] = useState<string>('')

    const addTodo = useTodoStore((state) => state.addTodo)
    
    const handleSubmit = (e : React.FormEvent) =>{
        e.preventDefault()
        if(input.trim()){
            addTodo(input)
            setInput('')
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
        </form>
    )
}

export default TodoInput