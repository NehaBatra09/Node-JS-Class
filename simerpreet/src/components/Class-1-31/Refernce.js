
import React, { useEffect, useRef, createRef, useState } from "react";

export default function Refe() {
    const [counter, setCounter] = useState(0);
    const ref = createRef();
    const usRef = useRef()
    useEffect(() => {
        ref.current = "GeeksforGeeeks";
        usRef.current = "GeeksforGeeeks"
    }, []);

    useEffect(
        () => {
            console.log(counter, " -- ", ref.current, " -- ", usRef.current);
        },
        [counter]
    );

    return (
        <div >

            <h3>Example on createRef and useRef</h3>
            <button onClick={() => setCounter((c) => c + 1)}>
                Increment
            </button>
            <h5>Counter Value: {counter}</h5>{" "}
        </div>
    );
}


