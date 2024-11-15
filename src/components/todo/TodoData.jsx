
const TodoData = ({ name, age, data, todoData }) => {
    console.log(">> check name: ", name, age, data);
    return (
        <div className='todo-data'>
            <div>Learning react</div>
            <div>Learning vite</div>
            <div>{data.address}</div>
            {JSON.stringify(todoData)}
        </div>

    );
}

export default TodoData;