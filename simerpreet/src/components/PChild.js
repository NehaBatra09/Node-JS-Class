import React from "react";
import { PChild2 } from "./PChild2";
export const PChild = ({ counter, setCounter }) => {


    const increment = () => {
        setCounter((counter) => counter + 1)
    }
    return (<>
        <button onClick={increment}>Increment</button>
        <PChild2 setCounter={setCounter} counter={counter} />
    </>)
}