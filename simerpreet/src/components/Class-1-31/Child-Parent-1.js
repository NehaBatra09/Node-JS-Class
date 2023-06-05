import React from "react";

export const Parent = () => {
    const [message, setMessage] = React.useState("Good Morning!");
    const chooseMessage = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h1>{message}</h1>
        <Child chooseMessage={chooseMessage} />
      </div>
    );
  };
  const Child = ({ chooseMessage }) => {
    let msg = 'Good Evening!';
    return (
      <div>
        <button onClick={() => chooseMessage(msg)}>Change    Message</button>
      </div>
    );
  };