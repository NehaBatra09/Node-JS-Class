import React from "react";

export class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        console.log(this.state.counter)
        setTimeout(() => {
            this.setState({ counter: 1 })
        }, 3000);
    }
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (<>Hello {this.state.counter}</>)

    }


}