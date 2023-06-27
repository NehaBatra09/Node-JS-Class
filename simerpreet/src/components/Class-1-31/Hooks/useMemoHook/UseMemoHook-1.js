// Memoizing the result of an API call:
import React, { useMemo, useState } from "react";
export const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    setInterval(() => {
        setCount((pre) => pre + 1)
    }, 3000);

    const processData = useMemo(() => {
        console.log("hello..")
        return data.filter((item) => item > 3)
    }, [data])
    
    const AddData = () => {
        setData([...data,"90"])
    }


    return (<>
        {count}
        <br />
        <button onClick={AddData}>Add data</button>
        {processData.map((ele) => <li>{ele}</li>)}

    </>)

}