
const TodoData = ({ name, age, data }) => {
    console.log(">> check name: ", name, age, data)
    return (
        <div className='todo-data'>
            <div>Learning react</div>
            <div>Learning vite</div>
            <div>{data.address}</div>
        </div>

    );
}

export default TodoData;