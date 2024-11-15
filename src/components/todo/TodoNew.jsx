
const TodoNew = ({ addNewTodo }) => {
    //addNewTodo("Thanh Dat")

    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (value) => {
        console.log(">> handle onchange: ", value)
    }
    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => {
                    handleOnChange(event.target.value)
                }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                    handleClick()
                }}
            >Add</button>
        </div>
    );
}

export default TodoNew;