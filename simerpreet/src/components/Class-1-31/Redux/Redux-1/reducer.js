let initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    console.log("reducer called",state.count)
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === "DECREMENT") {
        return { ...state, count: state.count - 1 }
    }
    return state
}
export default counterReducer