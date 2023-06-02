import React, { createRef, useEffect, useRef, useState } from "react";
const AddArguments = ({ setRef, id }) => {
    const inputRef = createRef("")
    const [text, setText] = useState("")
    const [value, setValue] = useState(false)
    const [uid, setUid] = useState("")
    const [tags, setTags] = useState([])
    useEffect(() => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
        }
        setUid(s4() + s4())
    }, [])

    React.useEffect(() => {
        setRef(inputRef);
    }, [value]);
    
    return (<>
        <div id={uid} ref={inputRef} >
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <select value={value} onChange={(e) => setValue(e.target.value)} >
                <option>select</option>
                <option value={true}>true</option>
                <option value={false}>false</option>
            </select>
            <br />
        </div>
    </>)

}


export default AddArguments