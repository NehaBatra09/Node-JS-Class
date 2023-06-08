import React, { createRef, useRef, useImperativeHandle, forwardRef } from "react";
export class ParentComponent extends React.Component {
    inputRef = createRef()
    selectRef=createRef()
    constructor(props) {
        super(props);
        this.state = {
            colo: "",
            number:0,
        }
    }

    handleCheckboxChange = () => {
        // this.inputRef.current.style.color = "red"

        this.setState({ colo: "red" })
        console.log(this.inputRef.current.value)
        console.log(this.selectRef.current.value)
    }

    render() {
        return (
            <div>
                <span style={{ color: `${this.state.colo}` }}>MCA</span>
                <input type="text" ref={this.inputRef} />
                <input type="checkbox"  checked={this.state.isChecked} onChange={this.handleCheckboxChange.bind(this)}/>
                
                <select ref={this.selectRef}>
                    <option value={"0"}>Select</option>
                    <option value={"1"}>One</option>
                    <option value={"2"}>Two</option>
                </select>
                {this.state.number}
                {/* <Checkbox
                    checked={this.state.isChecked}
                    onChange={this.handleCheckboxChange.bind(this)}
                />
                <Inputbox ref={this.inputRef}
                />
                <SelectBox /> */}
                {/* <button onClick={() => this.handleCheckboxChange()}>click</button> */}
                {/* <p>Checkbox is {this.state.isChecked ? 'checked' : 'unchecked'}</p> */}
            </div>
        );
    }
}

const Checkbox = ({ checked, onChange }) => {
    return (<>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
        />
    </>
    );
}
const Inputbox = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref,
        () => ({
            chaneInput: () => {
                inputRef.current.value = "You Select MCA Course!";
            }
        }));
    return (<>

        <input type="text" ref={inputRef} />
    </>
    );
})
// const Inputbox = forwardRef((props,ref) => {

//     return (<>
//         <input type="text" ref={ref} />
//     </>
//     );
// })

const SelectBox = () => {

    return (<>
        <select >
            <option>Select</option>
            <option>One</option>
            <option>One</option>
        </select>

    </>)
}