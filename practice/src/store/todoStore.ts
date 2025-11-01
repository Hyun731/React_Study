import {create} from 'zustand'
import type {Todo} from '../types/todo'

interface TodoStore{
    todos : Todo[];
    addTodo : (text: string) => void;
    toggleTodo : (id:number) => void;
    deleteTodo : (id:number) => void;
}

export const useTodoStore = create<TodoStore>((set) =>({
    todos : [],

    addTodo : (text) => set((state) => ({
        todos : [
            ...state.todos,{
                id : Date.now(),
                text:text,
                complement : false
            }
        ]
    })),
    toggleTodo : (id) => set((state) =>({
        todos: state.todos.map(todo => todo.id === id ? {...todo,complement : !todo.complement} : todo)
    })),
    deleteTodo : (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    }))
}))