import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Todo = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)
    const Decrement = () => {
        dispatch({ type: "DECREMENT" })
    }


    return (<>
        Signup:{state.count}<br />
        <button onClick={Decrement}>Decrement</button>

    </>)

}