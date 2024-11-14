import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {

  const ntdat = "thanh dat";
  const age = 25
  const data = {
    address: "Thanhhoa",
    country: "Vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">TODO LIST</div>
      <TodoNew />
      <TodoData
        name={ntdat}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
