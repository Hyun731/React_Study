import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>📝 나의 할 일</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App