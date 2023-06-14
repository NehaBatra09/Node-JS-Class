import React, { useState } from "react";
export const TodoHeader = () => {
    const [todo, setTodo] = useState([])
    const [status, setStatus] = useState("completed")
    const [title, setTitle] = useState("")
    const [index, setIndex] = useState(null)
    const [filterTodoList, setfilterTodoList] = useState([])
    const addToDoList = () => {
        todo.push({ title, status })
        setfilterTodoList([...todo])
    }

    const handleFilter = (filterStatus) => {
        setfilterTodoList(todo.filter((task) => filterStatus != "all" ? task.status == filterStatus : true))
    }
    const handleDelete = (index) => {
        console.log(index)
        // todo.splice(index, 1)
        // console.log(todo)
        setfilterTodoList([...todo.filter((task,ind)=>ind!=index)])
    }
    const handleEdit = (index) => {

        todo[index].title = title
        todo[index].status = status
        setfilterTodoList([...todo])

    }

    return (<>
        Filter:<select onChange={(e) => handleFilter(e.target.value)}>
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
            {filterTodoList.length > 0 ? filterTodoList.map((task, index) => <li key={task+index}>{task.title} {task.status}
                <button onClick={() => handleEdit(index)} >edit</button>
                <button onClick={() => handleDelete(index)}>delete</button>

            </li>) : "No task found"}
        </ul>
    </>
    )


}
// import React from 'react'
// import { useState } from 'react'

//  export function TodoHeader() {
//     const [todo, setTodo] = useState([])
//     const [title, setTitle] = useState("")
//     const [status, setStatus] = useState("complete")
//     const [filterTodoList, setFilterTodoList] = useState([])

//     const handleSubmit = () => {
//         console.log(title,status)
//         todo.push({title, status})
//         setFilterTodoList([...todo])
//     }

//     const handleFilter =(filterStatus) => {
//         setFilterTodoList(todo.filter(task => filterStatus != "all" ?  task.status == filterStatus : true))
//     }
//   return (
//     <div>
      
//     Filter: <select  onChange={(e)=> handleFilter(e.target.value)}>
//         <option value="all">all</option>
//         <option value="complete">Complete</option>
//         <option value="incomplete">Incomplete</option>
//     </select>
//     <br />
//     <br />

//     Title: <input type="text" onChange={(e)=> setTitle(e.target.value)} />
//     <br /><br />
//     status: <select onChange={(e)=> setStatus(e.target.value)}>
//         <option value="complete">complete</option>
//         <option value="incomplete">Incomplete</option>
//     </select>
//     <button onClick={()=> handleSubmit()}>Add To Task</button>

//         <ul>
//  {filterTodoList.length > 0 ? filterTodoList.map((task,index)=> <li>{task.title}  {task.status}  </li>) : "non Task found"}
//         </ul>

//     </div>
//   )
// }
