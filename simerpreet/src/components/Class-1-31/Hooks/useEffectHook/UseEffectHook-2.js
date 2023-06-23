import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [sum, setSum]=useState(0)

    useEffect(() => {
        setSum((pre)=>pre+count)
    },[count])

    return (<>
       {count}--- {sum} 
    <button onClick={()=>setCount((pre)=>pre+1)}>Add Number</button>
    
    </>)

}