import React, { useEffect, useState } from "react";
export const StateExample = () => {
    const [token] = useState(() => {
        let token = window.localStorage.getItem("my-token");
        return token || "default#-token#"
    })
    useEffect(() => {
        window.localStorage.setItem("my-token", "ezdfsfadfdkiem+lllflj");
    }, [])

    return <div>Token is {token}</div>
}