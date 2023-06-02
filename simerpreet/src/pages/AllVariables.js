import React, { useEffect, useRef, useState } from "react"
import Select from "../Select"
import { CancelButton } from "./MyButton"
export const Contant = ({ setRef }) => {
    useEffect(() => {
        setRef(true)
    }, [])
    return (<>
        <select onChange={(e) => setRef(e.target.value)} >
            <option value={true}>true</option>
            <option value={false}>false</option>
        </select>
    </>)
}
export const Arguments = ({ changeIndex, argsRef }) => {

    const [val, setVal] = useState("0")
    useEffect(() => {
        changeIndex(val)
    }, [val])

    return (<>
        <select id={val} onChange={(e) => setVal(e.target.value)}>
            {argsRef.length > 0 && argsRef.map((args, index) =>
                <>
                    <option value={index} id={args}>{args.children[0].value}</option>
                </>
            )}
        </select >
    </>)
}

export const AndOpr = ({ setOpt }) => {
    const [opt1, setOpt1] = useState("2")
    const [opt2, setOpt2] = useState("2")
    const [uid, setUid] = useState("")
    let inputRef = useRef("")
    useEffect(() => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
        }
        setUid(s4() + s4())

    }, [])
   

    return (<>
        <div id={uid} ref={inputRef}  >
            <Select setOpt={setOpt1} /><CancelButton setOpt={setOpt1} /> <br />
            <Select setOpt={setOpt2} /><CancelButton setOpt={setOpt2} />
        </div>
    </>)
}