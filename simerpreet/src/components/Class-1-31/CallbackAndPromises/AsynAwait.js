import React from "react";

export const AsyncAwait = () => {

    async function pro() {
       
      let result= await new Promise((resolve, reject) => {
            resolve({id:1,name:"kavita"})
      })
       return result
    }
    pro()

    
}