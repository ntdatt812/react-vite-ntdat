
const TodoData = ({ todoData }) => {

    return (
        <div className='todo-data'>
            {todoData.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                );
            })}
        </div>

    );
}

export default TodoData;