import React, { useState } from "react";

export const Parent = () => {
    const message = "Good Morning!";
    const obj = {
        name: "neha",
        age: 30
    }


    return (
        <div>
            <Child message={message} obj={obj} />
        </div>
    );
};

const Child = ({ message,obj }) => {
    const [msg, setMessage] = useState(message)

    return (<div>
        <h2>{msg} {obj.name} your age is {obj.age}</h2>
        <button onClick={() => setMessage("Good Evening!")}>Change Message</button>
    </div>);
};
