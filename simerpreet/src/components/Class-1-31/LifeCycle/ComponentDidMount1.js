import React from 'react'
class ComponentDidMouneCycle extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "neha",
            age: 30
        }
    }

    componentDidMount() {
        console.log("Component Did Mount called")
        this.setState({ name:"kavtia",age:36 })

    }
    shouldComponentUpdate(prop, preState) {
        if(preState.age==this.state.age)
        {
            return false
        }
        return true
    }

    componentDidUpdate() {
        console.log("Did Update called...")
    }

    render() {
        return <>Project DashBoard For {this.state.name} {this.state.age}
            <button onClick={() => this.setState({ ...this.state, age: 40 })}>Change Age</button>

        </>
    }

}
export default ComponentDidMouneCycle