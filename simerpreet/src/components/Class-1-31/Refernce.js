import React, { useEffect, useRef, createRef, useState } from "react";

export default function Refe() {
    const [counter, setCounter] = useState(0);
    const ref = createRef();
    const usRef = useRef()

    useEffect(() => {
        ref.current = "GeeksforGeeeks";
        usRef.current = "GeeksforGeeeks"
    }, []);

    useEffect(
        () => {
            console.log(counter, " -- ", ref.current, " -- ", usRef.current);
        },
        [counter]
    );

    return (
        <div >

            <h3>Example on createRef and useRef</h3>
            <button onClick={() => setCounter((c) => c + 1)}>
                Increment
            </button>
            <h5>Counter Value: {counter}</h5>{" "}
        </div>
    );
}


export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }
    render() {

        return (<><input type="text" ref={(input) => this.myRef = input} />

            <button onClick={() => console.log(this.myRef.value)}></button>
        </>);
    }
}

export class UserForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Input Value is: ", this.inputRef.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    ref={(input) => this.inputRef = input} /> // Access DOM input in handle submit
                <button type='submit'>Submit</button>
            </form>
        )
    }
}