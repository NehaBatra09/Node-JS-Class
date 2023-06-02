
import React, { useEffect, useRef, createRef, useState } from "react";

export default function Refe() {
    const [counter, setCounter] = useState(0);
    const ref = createRef();

    useEffect(() => {
        ref.current = "GeeksforGeeeks";
    }, []);

    useEffect(
        () => {
            console.log(counter, ref.current);
        },
        [counter]
    );

    return (
        <div >

            <h3>Example on createRef</h3>
            <button onClick={() => setCounter((c) => c + 1)}>
                Increment
            </button>
            <h5>Counter Value: {counter}</h5>{" "}
        </div>
    );
}


