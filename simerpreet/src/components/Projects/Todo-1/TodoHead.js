import React, { useState } from "react";
import { TodoModal } from "./TodoModal";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export const TodoHead = ({ todo, setTodoList }) => {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("completed")

    const handleFilter = (filterStatus) => {
        setTodoList(todo.filter((ele) => filterStatus != "all" ? ele.status == filterStatus : true))
    }

    const handleSubmit = () => {
        todo.push({ title, status })
        setTodoList([...todo])
    }

    return (<>
        <button onClick={() => setOpen(true)}>Open  Add Task Modal</button>
        <select onChange={(e) => handleFilter(e.target.value)}>
            <option value={"all"}>All</option>
            <option value={"completed"}>completed</option>
            <option value={"incomplete"}>incomplete</option>
        </select>

        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}>
            <DialogTitle>Add To do Task</DialogTitle>
            <DialogContent dividers>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incompled</option>
                </select>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit()}>
                    Add Task
                </Button>
            </DialogActions>
        </Dialog>
         {/* <TodoModal todo={todo} setTodoList={setTodoList}  open={open} setModal={setOpen}/> */}
    </>)
}