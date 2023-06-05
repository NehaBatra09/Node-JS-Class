import React, { createRef, useRef, useImperativeHandle, forwardRef } from "react";
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
    useImperativeHandle(ref, () => ({
        chaneInput: () => {
            inputRef.current.value = "You Select MCA Course!";
        }
    }));
    return (<>

        <input type="text" ref={inputRef} />
    </>
    );
})
export class ParentComponent extends React.Component {
    inputRef = createRef()
    constructor(props) {
        super(props);
        this.state = {
            colo: ""

        }
    }

    handleCheckboxChange = () => {
        // this.inputRef.current.style.color = "red"

        this.setState({ colo: "red" })
        this.inputRef.current.chaneInput()
    }

    render() {
        return (
            <div>
                <span style={{ color: `${this.state.colo}` }}>MCA</span>
                {/* <input type="checkbox" ref={this.inputRef}></input> */}

                <Checkbox
                    checked={this.state.isChecked}
                    onChange={this.handleCheckboxChange.bind(this)}
                />
                <Inputbox ref={this.inputRef}
                />
                {/* <button onClick={() => this.handleCheckboxChange()}>click</button> */}
                {/* <p>Checkbox is {this.state.isChecked ? 'checked' : 'unchecked'}</p> */}
            </div>
        );
    }
}
