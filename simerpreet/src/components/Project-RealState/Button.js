import React from "react";
export const Button = ({children, handleButton}) => {

    return (<>
        <button onClick={handleButton} style={{color:"white",background:"red"}}>{children}</button>
    </>)
}