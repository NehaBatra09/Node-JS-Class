import React from "react";

export class Class2 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "neha",
            userList:[]
        }
        // debugger
    }
    componentDidMount() {
       console.log("did mount")
    }
    shouldComponentUpdate() {
        console.log("shouldcomponent update")
        return true
   }

    componentDidUpdate() {
        console.log(this.state.name)
        this.state.userList.push(this.state.name)
        console.log("did  update..",this.state.userList)
    }
    componentWillUnmount() {
        console.log("Unmounting phase")

    }
    render() {

        return (<h1 >{this.state.name}
        <button onClick={()=>this.setState({name:"kavita"})}>Change User Name</button>
        
        </h1>)
    }

}