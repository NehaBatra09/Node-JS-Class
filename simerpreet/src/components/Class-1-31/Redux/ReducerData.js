export const initialState = {
    count: 0,
}
export const reducer = (state, action) => {

    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === "DECREMENT") {
        return { ...state, count: state.count - 1 }
    }
    return state

}