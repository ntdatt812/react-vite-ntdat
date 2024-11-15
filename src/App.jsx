import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const App = () => {

  const [todoData, setTodoData] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name
    }
    setTodoData([...todoData, newTodo])
  }

  const deleteTodo = (id) => {
    console.log(">> check id: ", id)
    const result = todoData.filter((todo) => todo.id !== id)
    setTodoData(result)
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">TODO LIST</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoData.length !== 0 ?
          <TodoData
            todoData={todoData}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo-image'>
            <img className='logo' src={reactLogo} />
          </div>
        }
      </div>
      <Footer />
    </>

  )
}

export default App
