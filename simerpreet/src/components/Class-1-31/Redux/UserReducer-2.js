import { accordionActionsClasses } from "@mui/material";
import React, { useReducer, useState } from "react";
const UserReducer = () => {

    const users = {
        list: []
    }

    const userOpertions = (state, action) => {
        console.log(action.id)

        switch (action.type) {

            case "ADD_USER": return { ...state, list: [...state.list, action.user] }
            case "DELETE_USER_DETAILS": return { ...state, list: state.list.filter((user) => user.id != action.id) }

            case "UPDATE_USER_PASSWORD":
                console.log(state, action.id)
                let ind = state.list.filter((user, index) => user.email == action.id)
                console.log(ind, action.password)
                ind = state.list.indexOf(ind[0])
                state.list[ind]["password"] = action.password


                return { ...state }

            default: return { ...state }
        }

    }


    const [state, dispatch] = useReducer(userOpertions, users)
    const [userDetails, setUserDetail] = useState({ email: "", password: "" })
    const [password, setPassword] = useState("")
    const [id, setId] = useState(0)

    const handleAddUser = () => {

        userDetails["id"] = userDetails.password
        dispatch({ type: "ADD_USER", user: userDetails })
    }
    const handleDeleteUser = () => {

        dispatch({ type: "DELETE_USER_DETAILS", id })

    }
    const handlleChangePassword = () => {
        console.log(password)
        dispatch({ type: "UPDATE_USER_PASSWORD", id, password })
    }

    return (<>
        {state.list.map((ele) => <li>{ele.email} {ele.password}</li>)}
        email:<input type="text" onChange={(e) => setUserDetail({ ...userDetails, email: e.target.value })} /><br />
        password:<input type="text" onChange={(e) => setUserDetail({ ...userDetails, password: e.target.value })} />
        <button onClick={handleAddUser}>Login</button><br /><br />
        {/* <button onClick={handleDeleteUser}> Delete user Details</button><br /> */}


        email <input type="text" onChange={(e) => setId(e.target.value)} />
        password<input type="text" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handlleChangePassword}>Update password</button>

    </>)

}
export default UserReducer