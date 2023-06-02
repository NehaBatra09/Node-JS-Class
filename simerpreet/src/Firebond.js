import React, { useEffect, useRef, useState } from "react";
import AddArguments from "./AddArguments";
import Select from "./Select";
import { AndOpr, Arguments, Contant } from "./pages/AllVariables";
import { CanceledError } from "axios";
import { CancelButton } from "./pages/MyButton";
export const Firebond = () => {
    const [argsRef, setArgsRefs] = useState([])
    const [change, setChangeRef] = useState([])
    const [result, setResult] = useState([])
    const [toggle, setToggle] = useState(false)
    const [index, setIndex] = useState([])

    function setRef(input, option = "0") {
        if (option == "3") {
            console.log()
            setOpt(input.current.children[0].value, input.current.children[3].value)
        } else {
            if (input.current && index.length == 0) {
                if (!change.includes(input.current)) {
                    change.push(input.current)
                    setArgsRefs([...argsRef, input.current])
                    setResult(input.current.children[1].value)
                }
            } else {
                if (input.current && index.length > 0) {
                    let respt = change[parseInt(index[0])]
                    console.log(respt)
                    if (respt) {
                        setResult(respt.children[1].value)
                    }
                } else {


                }
            }
        }
    }
    const changeIndex = (ind) => {
        index.length = 0
        index.push(ind)
        let respt = argsRef[parseInt(ind)]
        setResult(respt.children[1].value)
    }


    const [argument, setArguments] = useState([<AddArguments setRef={setRef} />])
    const [dynamicOptions, setDynamicOptions] = useState([])
    const addDynamicArguments = () => {

        setArguments([...argument, <AddArguments setRef={setRef} />])
    }

    function setOpt(opt, opt2) {
        if (opt == "0"||opt2=="0") {
            setDynamicOptions([])
            setToggle(false)
        }
        if (opt == "1"||opt2=="1") {
            setDynamicOptions([<><Contant setRef={setRef} /><CancelButton setOpt={setOpt} /></>])
            setToggle(true)
        }
        if (opt == "2"||opt2=="2") {
            setDynamicOptions([<><Arguments changeIndex={changeIndex} argsRef={argsRef} /><CancelButton setOpt={setOpt} /></>])
            setToggle(true)
        }
        if (opt == "3"||opt2=="3") {
            setDynamicOptions([<><AndOpr setOpt={setOpt} /></>])
            setToggle(false)

        }

    }

    return (

        <div>
            {console.log(result)}
            <div id="section_1">
                {argument}
            </div>
            <button onClick={addDynamicArguments}>+add args </button>
            <div id="section2">
                {!toggle && <Select setOpt={setOpt} />}

                {dynamicOptions}
            </div>

            result: {result + ""}

        </div>

    )
}