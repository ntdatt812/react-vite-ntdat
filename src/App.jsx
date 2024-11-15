import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoData, setTodoData] = useState([
    { id: 1, name: "Nguyen Thanh Dat" },
    { id: 2, name: "Do Ngoc Anh" }
  ]);

  const ntdat = "thanh dat";
  const age = 25
  const data = {
    address: "Thanhhoa",
    country: "Vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">TODO LIST</div>
      <TodoNew
        addNewTodo={addNewTodo}
        setTodoData={setTodoData}
        todoData={todoData}
      />
      <TodoData
        name={ntdat}
        age={age}
        data={data}
        todoData={todoData}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
