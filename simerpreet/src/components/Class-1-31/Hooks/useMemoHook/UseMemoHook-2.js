import React, { useState, useMemo } from 'react';

export const UseMemoHook2 = () => {
    const [count, setCount] = useState(0)
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    

    setInterval(() => {
        setCount((pre) => pre + 1)
    }, 3000);


    const result = useMemo(() => {
        console.log("hello...")
        return a * b + 10;
        },[a, b]
    )
    return (
        <div>
            {count}<br />
            <input value={a} onChange={(e) => setA(parseInt(e.target.value))} />
            <input value={b} onChange={(e) => setB(parseInt(e.target.value))} />
            <p>Result: {result}</p>
        </div>
    );
};









