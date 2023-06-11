import React, { useState } from "react";

export const TodoModal = ({ todo, addTodoList }) => {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("completed")

    const handleSubmit = () => 
    {
        addTodoList([...todo,{ title, status }])
    }
    return (<>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <select onChange={(e) => setStatus(e.target.value)}>
                <option value="completed">Completed</option>
                <option value="incomplete">Incompled</option>
            </select>
            <button onClick={() => handleSubmit()}>Add Task</button>

    </>)
}