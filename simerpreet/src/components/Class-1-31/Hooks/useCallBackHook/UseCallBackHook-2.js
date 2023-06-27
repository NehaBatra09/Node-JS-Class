import React, { useCallback, useState } from "react";
import { Button, MyProductList } from "./Button";

export const UseCallBackHooK2 = () => {

    const [count1, setCount1] = useState(15)
    const [count2, setCount2] = useState(1)
    const[name,setName]=useState("")

    return (<>
        {count1}  ----- {count2}<br />
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <Button handleCount={useCallback(()=>setCount1((pre)=>pre-1),[count1])}>Count1</Button>
        <Button handleCount={useCallback(()=>setCount2((pre)=>pre+1),[count2])}>Count2</Button>
    </>)
}