import React, { useState } from "react";
export const TodoModal = ({todo,setTodoList}) => {
const[title,setTitle]=useState("")
const[status,setStatus]=useState("completed")

const handleSubmit=()=>{
    todo.push({title,status})
    setTodoList([...todo])
}

    return (<>
        Title:<input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        Status: <select onChange={(e) => setStatus(e.target.value)}>
            <option value="completed">Completed</option>
            <option value="incomplete">Incompled</option>
        </select>
        <button onClick={() => handleSubmit()}>Add Task</button>



    </>)
}