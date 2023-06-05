import React from "react";

export const JSX1 = () => {

    let element = React.createElement('h1', {}, 'I do not use JSX!');

    return (<>
                {element}
                <br />
                <h1>I use JSX!</h1>
            </>)

}
