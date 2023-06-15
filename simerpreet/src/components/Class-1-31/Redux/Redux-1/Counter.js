import React from "react";
import { useSelector } from 'react-redux'
export const Counter = () => {
    const count = useSelector(state=>state.counterReducer)
    console.log(count)
    return (<>

    </>)
}