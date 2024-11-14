
const TodoNew = ({ addNewTodo }) => {
    addNewTodo("Thanh Dat")
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;