import React from "react";

export const CallBack2 = () => {

    let data = [1, 2, 3]

    const getData = () => {
        data.forEach((item) => console.log(item))
    }
    const createData = (element,callback) => {
        setTimeout(() => {
            data.push(element)
            callback()
        }, 4000);
    }
    createData(4,getData)
    return (<>
    </>)

}