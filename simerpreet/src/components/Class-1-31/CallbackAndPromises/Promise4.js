import React from "react";
export const Promise4 = () => {

    let didPromise = new Promise((resolve, reject) => {
        let a = 1
        let b = 1
        let c = a / b
        if (a, b) {
            resolve(c)
        } else {
            reject("a cannot be divided by b")
        }
    })
    didPromise.then((response) => console.log(response)).catch
        ((error) => console.log(error))



    return (<></>)
}