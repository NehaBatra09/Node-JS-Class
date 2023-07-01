import React from "react";
export const Promise2 = () => {
    
    let didPromise = new Promise((resolve, reject) => {
        let a = 34
        let b=25
        if (a>b) {
            resolve("yes a is greater than b")
        } else {
            reject("sorry to say, a is not greater than b you cannot proceed..")
        }

    })
    didPromise.then((response) => console.log(response)).catch
        ((error) => console.log(error))



    return (<></>)
}