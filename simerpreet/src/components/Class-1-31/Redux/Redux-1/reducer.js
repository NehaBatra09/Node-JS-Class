
const counterReducer=(state=1,action)=>{
    if (action.type === "INCREMENT") {
        return { ...state, count: state + 1 }
    }
    if (action.type === "DECREMENT") {
        return { ...state, count: state - 1 }
    }
    return state
}
export default counterReducer