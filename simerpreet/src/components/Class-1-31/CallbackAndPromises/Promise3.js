import React from "react";
export const Promise3 = () => {

    function prom(a, b) {
        return new Promise((resolve, reject) => {
            if (a > b) {
                resolve({message:"well done"})
            } else {
                reject("sorry to say, a is not greater than b you cannot proceed..")
            }

        })
    }
    const onFullfilled = (response) => {
        console.log(response)
    }
    const onReject = (error) => {
        console.log(error)
    }
    prom(4, 3).then(onFullfilled).catch(onReject)
    prom(1, 2).then(onFullfilled).catch(onReject)





    return (<></>)
}