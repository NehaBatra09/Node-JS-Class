import { useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
export const MyPost = () => {
    const [title, setTitle] = useState("")
    const [desciption, setDesciption] = useState("")

    useEffect(() => {
        handleGetData()
    },[])

    const handlePost = () => {
        let post = {
            id: 1,
            title,
            desciption
        }
        axios.post("http://localhost:5000/post", post).then((res) =>
            console.log(res)
        )

    }

    const handleGetData = async() => {
        let res = await axios.get("http://localhost:5000/post")
        console.log(res)
    }
    return (<>
        <input type="text" onChange={(e) => setTitle(e.target.value)} /><br />
        <input type="text" onChange={(e) => setDesciption(e.target.value)} /><br />
        <button onClick={handlePost}>Submit Post</button>
    </>)

}