import './App.css'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {

  return (
    <>
      <h1>Todo List</h1>
      <TodoAdd />
      <TodoList />
    </>
  )
}

export default App
