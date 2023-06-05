import React, { useReducer } from "react";
// To handle Complex states use useReducer hook, Create Reducer funtion and use useReducer to get the state from reducer

export const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {
        productList: ["Keyboard"]
    })
    // console.log(state)
    const handleAddProduct = () => {

        dispatch({ type: "ADD_PRODUCT", data: "mouse" })
    }
    const handleRemoveProduct = (product) => {

        dispatch({ type: "REMOVE_PRODUCT", data: product })
    }
    return (<>
        {state.productList.map((product, index) => <li key={product + index}>{product} <button onClick={() => handleRemoveProduct(product
        )}>Remove</button></li>)}
        <button onClick={() => handleAddProduct()}>Add Product</button>
    </>)

}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            return { ...state, productList: [...state.productList, action.data] }
        case "REMOVE_PRODUCT":
            state.productList = state.productList.filter((product) => product != action.data)
            return { ...state }
        default:
            return state
    }
}