import React, { useCallback, useState } from "react";
import { MyList } from "./MyList";
export const UseCallbackHook4 = () => {

    const [name, setName] = useState("")
    const [num1, setNum1] = useState(1)
    const handler = useCallback(() => {
        console.log("Parent function")
        return num1
    },[num1])
   
    return (<>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <MyList handler={handler} />

    </>)

}