import React, { useState } from "react";
export const TodoHeader = () => {
    const [todo, setTodo] = useState([])

    const [status, setStatus] = useState("completed")
    const [title, setTitle] = useState("")
    const [filterStatus, setFilterStatus] = useState("all")
    const [isDelete, setIsDelted] = useState(null)
    const addToDoList = () => {
        setTodo([...todo, { title, status }])
    }


    let filterTodoList = todo.filter((task) => filterStatus != "all" ? task.status == filterStatus : true)
    

    return (<>
        Filter:<select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value={"all"}>All</option>
            <option value={"completed"}>completed</option>
            <option value={"incomplete"}>incomplete</option>
        </select>
        <br />

        Title:<input type="text" onChange={(e) => setTitle(e.target.value)} /><br />
        staus: <select onChange={(e) => setStatus(e.target.value)}><br />
            <option value={"completed"}>completed</option>
            <option value={"incomplete"}>incomplete</option>
        </select>
        <button onClick={() => addToDoList()}>Add Task</button>
        <ul>
            {filterTodoList.length > 0 ? filterTodoList.map((task, index) => <li>{task.title} {task.status}
                <button >edit</button>
                <button onClick={() => setIsDelted(index+"")}>delete</button>

            </li>) : "No task found"}
        </ul>
    </>
    )


}