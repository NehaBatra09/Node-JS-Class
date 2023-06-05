import React, { useState } from "react";

export const PropDrill = () => {

    const [message, setMessage] = useState("Good Morning!")

    return (<>Parent Message: {message} <br /><Child setMessage={setMessage} message={message}/></>)

}
const Child = ({ message, setMessage }) => {

    return (<> Child Message: {message}<GrandChild setMessage={setMessage} message={message
    }/><button onClick={() => setMessage("Good Evening Child!")}> Child</button> </>)

}

const GrandChild = ({message, setMessage }) => {

    return <><br/> {message}<br/><button onClick={() => setMessage("Good Evening GrandChild!")}>GrandChild</button></>
}
