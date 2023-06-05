// Memoizing the result of an API call:
import React, { useMemo, useState } from "react";
export const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    setInterval(() => {
        setCount((pre) => pre + 1)
    }, 3000);

    const processData = useMemo(() => {
        console.log("Render process data")
        return data.filter((dt) => dt > 3)
    }, [data])
    return (<>
        {count}
        <br />
        {processData.map((ele) => <li>{ele}</li>)}

    </>)

}