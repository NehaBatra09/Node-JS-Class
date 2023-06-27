import React, { useEffect } from "react";
export const Button = React.memo(({ handleCount,children }) => {


console.log("hello")
    return (<>
    <button onClick={handleCount}>{children}</button>
    
    </>)

})