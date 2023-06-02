import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";

const Login = () => {
    const [loading, setLoading] = useState(true)
   
    return (<>
        <h1>Login Page Loaded..</h1>
    </>)
}
export default Login