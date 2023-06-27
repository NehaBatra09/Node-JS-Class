import React, { useCallback, useState } from "react";
import { MyList } from "./MyList";

export const UseCallback3 = () => {

    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)
    const [name,setName]=useState("")
    let ans = useCallback(()=>mul(num1, num2),[num1,num2])
 

    
    return (<>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </>)

}


const mul = (num1, num2) => {
    console.log("muliply function")
    return num1*num2
}