import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { Increment, Decrement } from "./action";
// import axios from 'axios'
export const Counter = () => {
    // const dispatch = useDispatch()
    const state = useSelector(state => state)
    const dispatch=useDispatch()
    console.log(state)

    const IncrementVal = () => {
        dispatch({type:"INCREMENT"})
    }
   

    return (<>
        Login:{state.count}<br />
        <button onClick={IncrementVal}>Increment</button>
        {/* <button >Decrement</button> */}
    </>)
}