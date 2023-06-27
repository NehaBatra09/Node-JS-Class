import React, { useReducer, useState } from "react";
// import { reducer, initialState } from './ReducerData'

export const UserReducerCounter = () => {

    const initialState = {
        count: 0,
    }
    const reducer = (state, action) => {

        if (action.type === "INCREMENT") {
            return { ...state, count: state.count + 1 }
        }
        if (action.type === "DECREMENT") {
            return { ...state, count: state.count - 1 }
        }
        return state

    }



    const [state, dispatch] = useReducer(reducer, initialState)
    const { count } = state



    const Increment = () => {
        dispatch({ type: "INCREMENT" })
    }
    const Decrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    return (<>
        Count: {count}
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </>)

}
export const UserReducerProduct = () => {
    const initialState = {
        product: []
    }
    const reducer = (state, action) => {

        if (action.type === "ADD_PRODUCT") {
            return { ...state, product: [...state.product, action.product] }
        }
        if (action.type === "REMOVE_PRODUCT") {
            return { ...state, product: state.product.filter((item, ind) => item != action.product) }

            // return { ...state, product: state.product.filter((item) => item != action.data) }
        }
        if (action.type === "UPDATE_PRODUCT") {
            state.product[action.index] = action.product
            return { ...state }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [pro, setPro] = useState("")
    const [index, setIndex] = useState(0)

    const AddProduct = () => {
        dispatch({ type: "ADD_PRODUCT", product: pro })
    }
    const RemoveProduct = () => {
        dispatch({ type: "REMOVE_PRODUCT", product: pro })
    }
    const UpdateProduct = () => {
        dispatch({ type: "UPDATE_PRODUCT", index, product: pro })
    }
    return (<>
        Product:---  {state.product.join()}
        <input type="text" onChange={(e) => setPro(e.target.value)} />
        <input type="text" onChange={(e) => setIndex(e.target.value)} />
        <button onClick={AddProduct}>AddProduct</button>
        <button onClick={RemoveProduct}>Decrement</button>
        <button onClick={UpdateProduct}>UpdateProduct</button>
    </>)

}

// [1,2,3,4]==>1,2,3,4
// export const UserReducerUser = () => {
//     const initialState = {
//         product: []
//     }
//     const reducer = (state, action) => {

//         if (action.type === "ADD_USER") {
//             return { ...state, product: [...state.product, action.data] }
//         }
//         if (action.type === "REMOVE_USER") {
//             return { ...state, product: state.product.filter((item) => item != action.data) }
//         }
//         if (action.type === "UPDATE_USER") {
//             return { ...state, product: state.product.filter((item) => item != action.data) }
//         }
//         return state
//     }

//     const [state, dispatch] = useReducer(reducer, initialState)

//     const Increment = () => {
//         dispatch({ type: "ADD_PRODUCT" })
//     }
//     const Decrement = () => {
//         dispatch({ type: "REMOVE_PRODUCT" })
//     }
//     return (<>
//         Count: {state.product.join()}
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//     </>)

// }