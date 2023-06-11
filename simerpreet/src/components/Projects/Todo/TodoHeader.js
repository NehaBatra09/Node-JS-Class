import React, { useState } from "react";
import { TodoModal } from "./TodoModal";

export const TodoHeader = ({todo, addTodoList, setFilterStatus }) => {
    const [modal, setModal] = useState(false)

    return (<>
        <button onClick={() => setModal(true)}>Add Task</button>
        <select onClick={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All</option>  
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
        <TodoModal todo={todo} addTodoList={addTodoList}></TodoModal>

    </>)

}