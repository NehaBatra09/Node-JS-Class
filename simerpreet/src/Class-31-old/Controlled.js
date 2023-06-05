import React, { useRef, useState } from "react";

export const Controlled = () => {

    const [userDetail, setUserDetail] = useState({ firstName: "" })
    const inputRef = useRef()
    const handleChange = () => {
        console.log(inputRef.current.value)
        // setUserDetail({ firstName })
    }

    return (<>
        <div>
            <input type="text" />
            <button onClick={() => handleChange()}>Click</button>
        </div>
    </>)


}