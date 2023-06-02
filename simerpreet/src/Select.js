import React, { useEffect, useState } from "react";
const Select = ({ setOpt }) => {
    const [opt, setOptions] = useState("0")
    useEffect(() => {
        setOpt(opt)
    }, [opt])

    return (<>
            <select value={opt} defaultValue="0" onChange={(e) => setOptions(e.target.value)}>
                <option value="0">Select...</option>
                <option value="1">contant</option>
                <option value="2">argument</option>
                <option value="3">and</option>
                <option value="4">or</option>
            </select>
            

    </>)


}

export default Select