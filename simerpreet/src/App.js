import React, { Suspense, useEffect, useState } from 'react';
import './style.css';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import { lazy } from 'react';
// import Loader from './components/Loader';
// import axios from 'axios'
// import { Firebond } from './Firebond';
// const Login = lazy(() => import("./pages/Login"))
// import Class1 from './components/Class1';
// import { Class2 } from './components/Class2';
// import { Class3 } from './components/Class3';
// import { Class4 } from './components/Class4';
// import { Class5 } from './components/Class5';
// import Refe from './components/Class-31/Refernce';
// import { ImpureComponent } from './components/Class-31/PureComponent';
// import { Controlled } from './components/Class-31/Controlled';
// import { LifeCycle } from './components/Class-31-1/LifeCycle';
// import { EnhancedComponent } from './components/Class-1-2-06-23/HighOrderComponent-1';
// import { Temp } from './components/Class-1-2-06-23/Temp';
// import { ImpureComponent } from './components/Class-31/PureComponent';
// import { ParentComponent } from './components/Class-31/Controlled';
// import Refe from './components/Class-31/Refernce';
// import { ErrorPage, MyComponent, Posts, Users } from './components/Class-1-2-06-23/Posts';
// import { ErrorEnhancedComponent } from './components/Class-1-2-06-23/HighOrderErrorComponent';

import { Parent } from './components/Class-1-31/Parent-Child-EX';
import { PropDrill } from './components/Class-1-31/PropDrilling-Pro';
import { PropSolution } from './components/Class-1-31/PropDrilling-Sol';
import GameMgr from './components/Class-1-31/Child-Parent-2';
import { ParentComponent } from './components/Class-1-31/Controlled-UnControlled';
import { ClassPropValidation, FunPropValidation } from './components/Class-1-31/PropValidation';
import { ReducerHook } from './components/Class-1-31/Hooks/useReducerHook-1';
import { CallBackHook } from './components/Class-1-31/Hooks/useCallBackHook-1';
import { UseMemoHook } from './components/Class-1-31/Hooks/useMemoHook/UseMemoHook-1';
import { UseEffectHook } from './components/Class-1-31/Hooks/useEffectHook/UseEffectHook-1';
import Refe, { MyComponent, UserForm } from './components/Class-1-31/Refernce';
import { StateExample } from './components/Class-1-31/StateExample';
import { ShadowDOMEx } from './components/Class-1-31/ShadowDOM-1';
import { Class2 } from './components/Class-1-31/LifeCycle';
export default function App() {

    const [toggle, setToggle] = useState(false)
    const [posts, setPosts] = useState([{ id: "1" }])
    const [users, setUsers] = useState([{ id: "1" }])
    // setTimeout(() => {
    //     setToggle(true)
    // }, 3000);
    // let data = {

    //     getPosts: async function () {

    //         let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    //         return response
    //     },
    //     getUsers: async function () {

    //         let response = await axios.get("https://jsonplaceholder.typicode.com/users")
    //         return response
    //     }

    // }
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        // console.log(await data.getPosts())
        // setPosts(await data.getPosts())
        // setUsers(await data.getUsers())

    }

    // const PostHighOrder = EnhancedComponent(Posts, "users")
    // const UsersHighOrder = EnhancedComponent(Users, "admin")
    // const ErrorHighOrder = ErrorEnhancedComponent(MyComponent)
    return (<>
        {/* <Enhanced /> */}
        {/* <Users users={users} />  */}
        {/* <UsersHighOrder users={users} /> */}
        {/* <PostHighOrder posts={posts} /> */}
        {/* <ErrorHighOrder /> */}
        {/* <Temp name={"neha"}/> */}
        {/* <LifeCycle /> */}
        {/* <Controlled/> */}
        {/* <Refe/> */}
        {/* <ImpureComponent /> */}
        {/* {(!toggle) ? <ImpureComponent /> : <Class1 />} */}
        {/* <Class5/> */}
        {/* <Test/> */}
        {/* <ParentComponent /> */}

        {/* <Parent/> */}
        {/* <PropDrill/> */}
        {/* <PropSolution/> */}
        {/* <GameMgr/> */}

        {/* <FunPropValidation isAdmin={"admin"} age={17}/> */}
        {/* <ClassPropValidation name={"neha"}/> */}
        {/* <ReducerHook/> */}
        {/* <CallBackHook /> */}
        {/* <UseMemoHook /> */}

        {/* <UseEffectHook /> */}
        {/* {!toggle && <UseEffectHook />} */}
        {/* <UserForm/> */}
        {/* <MyComponent/> */}
        {/* <StateExample/> */}
        {/* <Class2/> */}
        {/* <ShadowDOMEx/> */}
    </>
    );
}
