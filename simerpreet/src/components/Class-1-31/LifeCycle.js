import React from "react";

export class Class2 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "neha"
        }
        // debugger
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "hena" })
        }, 2000);
        // debugger
    }
    shouldComponentUpdate() {
        // debugger
        return true
    }
    componentDidUpdate() {
        console.log(this.state.name)
        // debugger
        setTimeout(() => {
            this.setState({ name: "kanu" })
        }, 2000);
        // debugger
    }
    componentWillUnmount() {
        console.log("Unmounting phase")
    }
    render() {

        return (<h1 >{this.state.name}</h1>)
    }

}