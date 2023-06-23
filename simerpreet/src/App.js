import React, { Suspense, useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserReducerCounter, UserReducerProduct } from './components/Class-1-31/Redux/UserReducerEx';
// import { TodoHeader } from './components/Projects/Todo-1/TodoHeader';
// import { TodoHead, TodoInSinglFile } from './components/Projects/Todo/TodoInSinglFile';
// import { TodoContent } from './components/Projects/Todo-1/TodoContent';
// import { UserReducerCounter, UserReducerEx } from './components/Class-1-31/Redux/UserReducerEx';
// import { Counter } from './components/Class-1-31/Redux/Redux-1/Counter';
import { Provider } from 'react-redux';
import UserReducer from './components/Class-1-31/Redux/UserReducer-2';
import { UseCallback1, UseEffectHook4 } from './components/Class-1-31/Hooks/useEffectHook/UseEffectHook-4';
// import { UseEffectHook } from './components/Class-1-31/Hooks/useEffectHook/UseEffectHook-3';
// import { store /} from './components/Class-1-31/Redux/Redux-1/store';
// import { TodoHeader/ } from './components/Projects/Todo/TodoHeader';
// import { Parent } from './components/Parent';
// import { TodoContent } from './components/Projects/Todo/TodoContent';

export default function App() {


    const [todo, setTodoList] = useState([])
    const [updatedTodoList, setUpdatedTodoList] = useState([])
    const [filterStatus, setFilterStatus] = useState(false)

    return (<>
        <UseCallback1/>
        {/* <UseEffectHook4/> */}
        {/* <UserReducer /> */}

        {/* <UserReducerCounter /> */}
        {/* <UserReducerProduct /> */}

        {/* <Provider store={store}>
            <Counter />
        </Provider> */}

        {/* <Parent/> */}

        {/* 1.... <TodoInSinglFile todo={todo} setTodoList={setUpdatedTodoList} />
        <TodoContent todo={updatedTodoList} /> */}

        {/*2... <TodoHeader todo={todo} addTodoList={setTodoList} setFilterStatus={setFilterStatus} />
        <TodoContent todo={todo} filterStatus={filterStatus} />
         */}

        {/* <Router>
            <Routes>
                <Route render={props=><Header handleSubmit={this.handleSubmit} history={props.history}/>}/>
                <Route path="/mountain" render={() => <Item searchItem={searchItem} />} />
                <Route path="/beach" render={() => <Item searchItem={searchItem} />} />
                <Route path="/bird" render={() => <Item searchItem={searchItem} />} />
                <Route path='/search/:searchInput' render={(props) => <Search searchItem={props.match.params.searchInput} />} />
                <Route component={<NotFound />} />
            </Routes>
        </Router> */}
    </>)

}
