import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoData, setTodoData] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const ntdat = "thanh dat";
  const age = 25
  const data = {
    address: "Thanhhoa",
    country: "Vietnam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name
    }
    setTodoData([...todoData, newTodo])
  }

  return (
    <div className="todo-container">
      <div className="todo-title">TODO LIST</div>
      <TodoNew
        addNewTodo={addNewTodo}
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
