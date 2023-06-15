import React from "react";
export const PChild2 = ({ counter, setCounter }) => {

    const decrement = () => {
        setCounter((count) => count - 1)
    }

    return (<>
        {counter}
        <button onClick={decrement}>Decrement</button>
    </>)
}