import React from "react";
export const TodoContent = ({ todo, setTodoList }) => {


    return (<>
        {todo.length > 0 ? todo.map((ele) => <li>{ele.title} {ele.status}</li>) : "No Task Found..."}
    </>)
}
