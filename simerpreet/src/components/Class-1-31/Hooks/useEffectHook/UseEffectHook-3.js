import React, { useEffect, useState } from "react";
export const UseEffectHook = () => {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        if (isOnline) {
            localStorage.setItem("userId",1)
        } else {
            localStorage.clear()
        }
    },[isOnline])
    return (<>
    <button onClick={()=>setIsOnline((pre=>!pre))}>Logout</button>
    
    </>)
}



