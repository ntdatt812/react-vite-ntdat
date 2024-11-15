import { useState } from "react"

const TodoNew = ({ addNewTodo }) => {
    //addNewTodo("Thanh Dat")
    const [valueInput, setValueInput] = useState("")

    const handleClick = () => {
        console.log(">> check value input: ", valueInput)
        setValueInput(valueInput)
    }

    const handleOnChange = (value) => {
        console.log(">> handle onchange: ", value)
        setValueInput(value)
    }
    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => {
                    handleOnChange(handleClick(event.target.value))
                }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                    handleClick()
                }}
            >Add</button>
            <div>My name is {valueInput}</div>
        </div>
    );
}

export default TodoNew;