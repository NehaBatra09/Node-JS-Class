import React, { useState, useCallback } from 'react';

const CounterButton = React.memo(({ onClick }) => {
    console.log('Render CounterButton');
    return <button onClick={onClick}>Click me</button>;
});

export const CallBackHook = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0)

    setInterval(() => {
        setRenderCount((pre) => pre + 1)
    }, 2000);

    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[count]);

    return (
        <div>
            <p>Render Count: {renderCount}</p>
            <p>Count: {count}</p>
            <CounterButton onClick={handleClick} />
        </div>
    );
};
