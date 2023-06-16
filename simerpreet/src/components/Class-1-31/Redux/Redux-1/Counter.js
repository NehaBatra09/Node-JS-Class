import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from "./action";
export const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state)

    const IncrementVal = () => {
        dispatch(Increment({ type: "INCREMENT" }))
    }
    const DecrementVal = () => {
        dispatch(Increment({ type: "DECREMENT" }))
    }

    return (<>
        {count}<br />
        <button onClick={IncrementVal}>Increment</button>
        <button onClick={DecrementVal}>Decrement</button>
    </>)
}