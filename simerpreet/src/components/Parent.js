import React, { useState } from "react";
import { PChild } from "./PChild";
import { PChild2 } from "./PChild2";
export const Parent = () => {

    const [counter, setCounter] = useState(0)
    return (<>
        <PChild setCounter={setCounter} counter={counter} />
    </>)

}