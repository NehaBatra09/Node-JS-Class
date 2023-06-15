import React, { useState } from "react";
import { TodoModal } from "./TodoModal";

export const TodoHeader = ({todo, addTodoList, setFilterStatus }) => {
    const [open, setOpen] = useState(false)

    return (<>
        <button onClick={() => setOpen(true)}>Open Add Task Modal</button>
        <select onClick={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All</option>  
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>

        <TodoModal todo={todo} addTodoList={addTodoList} open={open} setModal={setOpen}></TodoModal>

    </>)

}