import React from "react";
import { Header, NavBar } from "./Header";
import { Footer } from "./Footer";

export const HighOderCom = (WrapperComponent) => {

    class CommonComponent extends React.Component {
        render() {

            return (<>
                <Header />
                <WrapperComponent />
                <Footer />
            </>)
        }
    }
    return CommonComponent

}