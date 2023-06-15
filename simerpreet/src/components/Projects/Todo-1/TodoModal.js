import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export const TodoModal = ({ todo, setTodoList, open, setModal }) => {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("completed")

    const handleSubmit = () => {
        todo.push({ title, status })
        setTodoList([...todo])
    }
    return (<>
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
                <Button onClick={() => setModal(false)}>
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit()}>
                    Add Task
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}