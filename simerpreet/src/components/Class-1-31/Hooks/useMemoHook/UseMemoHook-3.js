import React, { useMemo } from 'react';

const ExpensiveComponent = () => {
    // Expensive calculations or heavy rendering logic

    return <div>Expensive Component</div>;
};

export const UseMemoHook3 = () => {
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







