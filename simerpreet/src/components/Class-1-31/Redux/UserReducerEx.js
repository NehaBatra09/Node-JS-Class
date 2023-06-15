import React, { useReducer } from "react";
export const UserReducerCounter = () => {
    const initialState = {
        count: 0
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

    const Increment = () => {
        dispatch({ type: "INCREMENT" })
    }
    const Decrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    return (<>
        Count: {state.count}
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
            return { ...state, product: [...state.product, action.data] }
        }
        if (action.type === "REMOVE_PRODUCT") {
            return { ...state, product: state.product.filter((item) => item != action.data) }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const Increment = () => {
        dispatch({ type: "ADD_PRODUCT" })
    }
    const Decrement = () => {
        dispatch({ type: "REMOVE_PRODUCT" })
    }
    return (<>
        Count: {state.product.join()}
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </>)

}
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