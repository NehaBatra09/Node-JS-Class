import React from "react";

export const Class3 = () => {

    //-----------------------------Cloning------------------------------------------

    //-----------------------------Deep Cloning------------------------------------------
    //    let arrObj=[{name:"neha"},{name:'karan'},{name:"jesika"}]
    //     let [first,second,third]=arrObj
    //     console.log(first)
    //-----------------------------------------------------------------------

    //-------------------------------Shallow Cloning----------------------------------------

    // let numbers=[1,2,3]
    // let numbers2=numbers
    // numbers2[3]=4
    // console.log(numbers,numbers2)

    // let numbers = [1, 2, 3]
    // let numbers2 = [...numbers]
    // numbers2[3] = 4
    // console.log(numbers, numbers2)


    //-----------------------------------------------------------------------
    const handleChange = (event) => {

        event.preventDefault()
        let formData = new FormData(event.target)
        console.log(formData.get("name"))

    }


    return (<>

        <form onSubmit={handleChange}>
            <input id="name" name="name" type="text" />
            <button>Send Data</button>
        </form>

    </>)
}