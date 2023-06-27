import React, { useMemo, useState } from 'react';



export const UseMemoHook3 = () => {
    const [count, setCount] = useState(0)
    const [togle, setToggle] = useState(false)

    setInterval(() => {
        setCount(pre => pre + 1)
    }, 2000);
    const MemoizedComponent = useMemo(() => {
        console.log("hello")
        return <ExpensiveComponent />;
    },[togle])

    return (
        <div>
            <h2>Parent Component</h2>
            {MemoizedComponent}
            <button onClick={() => setToggle(!togle)}>Toggle</button>
        </div>
    );
};

const ExpensiveComponent = () => {

    let c = 100 * 100 * 100 * 1000

    return <div>{c} Expensive Component</div>;
};






