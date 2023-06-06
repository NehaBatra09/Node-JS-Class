import React from "react";
import { data } from "./Test";

export const ErrorEnhancedComponent = (WrapperComponent, role) => {



    class ErrorBoundries extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                error: null
            };
        }
        componentDidCatch(error, errorInfo) {
            this.setState({ error: true });
            // Optionally, you can log the error or send it to an error tracking service
            console.error(error);
        }


        render() {
            if (this.state.error) {
                return <div>Oops! Something went wrong.</div>;
            }
            return <h1>Yes Error Page <br/><WrapperComponent {...this.props} /></h1>

        }

    }
    return ErrorBoundries

}