import React, { useEffect, useState } from "react";
import { NavBar } from "./components/Project-RealState/Header";
import { BrowserRouter } from "react-router-dom";
import { HighOderCom } from "./components/Project-RealState/HighOrderCom";
import { Comp1 } from "./components/Project-RealState/Comp1";
import { Comp2 } from "./components/Project-RealState/Comp2";
import { Comp3 } from "./components/Project-RealState/Comp3";
const App = () => {
    
    let First = HighOderCom(Comp1)
    let Second = HighOderCom(Comp2)
    let Third=HighOderCom(Comp3)

    return (<>
        <BrowserRouter>
            <Second/>
        </BrowserRouter>
        
        <div className={"scroll"} id="main" >
            <img src="https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg" />
        </div>
    </>)


}
export default App