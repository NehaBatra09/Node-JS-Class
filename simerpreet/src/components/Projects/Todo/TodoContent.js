import React, { useState } from 'react'
export const TodoContent = ({ todo, filterStatus }) => {
    const[todoList,setTodoList]=useState(todo)
    if (filterStatus) {
            todo = todo.filter((task) =>filterStatus!="all"? task.status == filterStatus:true)
    }
    return (<>
        {todo.length > 0 ? todo.map((task) => <li>{task.title} {task.status}</li>) : "No List found"}

    </>)

}