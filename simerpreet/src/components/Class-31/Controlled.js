import React, { createRef, useRef } from "react";
class Checkbox extends React.Component {
    render() {
        return (
            <input
                type="checkbox"
                checked={this.props.checked}
                onChange={this.props.onChange}
            />
        );
    }
}

export class ParentComponent extends React.Component {
    inputRef =createRef()
    constructor(props) {
        super(props);
        this.state = {
            colo: ""

        }
    }

    handleCheckboxChange = () => {
        // this.inputRef.current.style.color = "red"

        this.setState({ colo: "red" })
    }

    render() {
        return (
            <div>
                <span style={{ color: `${this.state.colo}` }}>Element</span>
                <span ref={this.inputRef}>Elemtent</span>
                {/* <input type="checkbox" ref={this.inputRef}></input> */}
                <button onClick={() => this.handleCheckboxChange()}>click</button>
                {/* <Checkbox
          checked={this.state.isChecked}
          onChange={this.handleCheckboxChange.bind(this)}
        /> */}
                {/* <p>Checkbox is {this.state.isChecked ? 'checked' : 'unchecked'}</p> */}
            </div>
        );
    }
}
