import React from "react";
export const Promise1 = () => {
    let isDone = false
    let didPromise
    
        didPromise = new Promise((resolve, reject) => {
            if (isDone) {
                resolve("yes i completed my task")
            } else {
                reject("sorry to say, task is not completed..")
            }

        })
   
    // console.log(didPromise)
    didPromise.then((data) => console.log(data)).catch((error)=>console.log(error))




    return (<></>)
}