import React, { useState, useMemo } from 'react';

export const UseMemoHook2 = () => {
    const [count, setCount] = useState(0)
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    setInterval(() => {
        setCount((pre) => pre + 1)
    }, 3000);


    const result = useMemo(() => {
        // Perform a complex calculation based on 'a' and 'b'
        return a * b + 10;
    }, [a, b]);

    return (
        <div>
            {count}<br />
            <input value={a} onChange={(e) => setA(Number(e.target.value))} />
            <input value={b} onChange={(e) => setB(Number(e.target.value))} />
            <p>Result: {result}</p>
        </div>
    );
};

import React, { useMemo } from 'react';

const ExpensiveComponent = () => {
    // Expensive calculations or heavy rendering logic

    return <div>Expensive Component</div>;
};

const ParentComponent = () => {
    const memoizedComponent = useMemo(() => {
        return <ExpensiveComponent />;
    }, []);

    return (
        <div>
            <h2>Parent Component</h2>
            {memoizedComponent}
        </div>
    );
};







