import React from "react";

export const CallBack1 = () => {

    const call = (callback) => {
        setTimeout(() => {
            console.log("please call me")
            callback()
        }, 3000)
    }
    const sayHi = () => {
        console.log("Hi!")
    }
    const sayHello = () => {
        console.log("Hello!")
    }
    call(sayHi)
    call(sayHello)


    return (<>
    </>)

}