import React from "react";

export default class Class1 extends React.Component {
    element = "neha"
    constructor(props) {
        super(props)
        this.state = {
            studentName: "jesika",
            studentAge: 30

        }
        this.handleChange = this.handleChange.bind(this)
    }
    shouldComponentUpdate() {
        return true
    }
    // componentDidMount() {
    //     setTimeout(() => this.setState({ studentName: "kavita", studentAge: 45 }), 1000)
    // }
    componentDidUpdate() {

        console.log(this.state)
    }
    // handleChange() {
    //     console.log(this.state.studentAge, this.state.studentName)
    //     this.setState((pre) => { return { studentAge: pre.studentAge, studentName: "hena" } })
    // }
    render() {
        return <> <button onClick={this.handleChange}>click here</button> {this.state.studentAge} {this.state.studentName}</>
    }


}