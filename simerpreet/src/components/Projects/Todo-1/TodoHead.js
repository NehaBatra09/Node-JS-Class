import React, { useState } from "react";
import { TodoModal } from "./TodoModal";
export const TodoHead = ({ todo, setTodoList }) => {
    const [status, setStatus] = useState(false)
    const handleFilter = (filterStatus) => {
        setTodoList(todo.filter((ele) => filterStatus != "all" ? ele.status == filterStatus : true))
    }

    return (<>
        <button onClick={() => setStatus(true)}>Add Task</button>
        <select onChange={(e) => handleFilter(e.target.value)}>
            <option value={"all"}>All</option>
            <option value={"completed"}>completed</option>
            <option value={"incomplete"}>incomplete</option>
        </select>
        {status && <TodoModal todo={todo} setTodoList={setTodoList} />}
    </>)
}