import React, { useEffect, useState } from "react";

export const Class4 = React.memo(({ name }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount((pre) => ++pre)
    }, [name])
    console.log(count)
    return (<>{count}</>)

})