import React from "react";

export class Class2 extends React.PureComponent {
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
   
    componentDidUpdate() {
        console.log(this.state.name)
        // debugger
        setInterval(() => {
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