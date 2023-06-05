import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    setInterval(() => {
        setCount((pre) => pre + 1)
    }, 3000);

    useEffect(() => {
        console.log("First Render")
    }, [])
    useEffect(() => {
        console.log("On Count Change Render")
    }, [count])

    useEffect(() => {
        return function () {
            console.log(" Unmounted Component!")
        }

    }, [])
    return (<>{count}</>)


}