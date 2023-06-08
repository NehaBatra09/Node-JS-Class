import React, { useState } from "react";

export const User = () => {

    return (<>
        <UserDetail />
        <Actions />
    </>)

}
const UserDetail = () => {
    const [user, setUser] = useState({ email: "", password: "", confirmPassword: "" })


    return (<>
        <div>
            Email:<input type="text" placeholder="Enter Email" onChange={(e)=>setUser({...user,email:e.target.value})} /><br />
            Password:<input type="password" placeholder="Enter Password"   onChange={(e)=>setUser({...user,password:e.target.value})} /><br />
            Confirm Password<input type="password" placeholder="Enter Confirm Password"  onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}  /><br />
        </div>
        <h3> {user.email} {user.password} {user.confirmPassword}</h3>

    </>)
}

const Actions = () => {

    return (<>
        <div>
            <button>Cancel</button>
            <button>Login</button>
        </div>
    </>)

}