import React from "react";
import { data } from "./Test";

export const EnhancedComponent = (WrapperComponent, role) => {



    class Logger extends React.Component {

        constructor(props) {
            super(props)

        }

        componentDidMount() {
            console.log("component Mounted")
        }

        componentWillUnmount() {
            console.log("component UnMounted")
        }

        render() {
            return (<>
                <h1>Home    Services    Products Blogs   ContactUS </h1>
                {role == "admin" ? <WrapperComponent {...this.props} /> : <h3>Unauthorized users</h3>}
                <h2>This website is produced in 2020</h2>

            </>)

        }

    }
    return Logger

}