import React, { useReducer, useState } from "react";
const UserReducer = () => {

    const users = {
        list: []
    }

    const userOpertions = (state, action) => {
        console.log(state.list)

        switch (action.type) {

            case "ADD_USER": return { ...state, list: [...state.list, action.user] }
            default: return { ...state }
        }

    }


    const [state, dispatch] = useReducer(userOpertions, users)
    const [userDetails, setUserDetail] = useState({ email: "", password: "" })

    const handleAddUser = () => {

        userDetails["id"] = userDetails.password
        dispatch({ type: "ADD_USER", user: userDetails })
    }


    return (<>
        {state.list.map((ele) => <li>{ele.email} {ele.password}</li>)}
        email:<input type="text" onChange={(e) => setUserDetail({ ...userDetails, email: e.target.value })} /><br />
        password:<input type="text" onChange={(e) => setUserDetail({ ...userDetails, password: e.target.value })} />
        <button onClick={handleAddUser}>Login</button>
    </>)

}
export default UserReducer