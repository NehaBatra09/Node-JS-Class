import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './components/Class-1-31/Redux/Redux-1/store';
import { Counter } from './components/Class-1-31/Redux/Redux-1/Counter';
import { Todo } from './components/Class-1-31/Redux/Redux-1/Todo';
import { UserReducerProduct } from './components/Class-1-31/Redux/UserReducerEx';
import { UseEffectHook } from './components/Class-1-31/Hooks/useEffectHook/UseEffectHook-3';
import { UseMemoHook2 } from './components/Class-1-31/Hooks/useMemoHook/UseMemoHook-2';
import { UseCallBackHooK2 } from './components/Class-1-31/Hooks/useCallBackHook/UseCallBackHook-2';
import { UseCallback3 } from './components/Class-1-31/Hooks/useCallBackHook/UseCallBackHook-3';
import { UseCallbackHook4 } from './components/Class-1-31/Hooks/useCallBackHook/UseCallBackHook-4';
import { UseCallback5 } from './components/Class-1-31/Hooks/useCallBackHook/UseCallBackHook-5';
import { UseMemoHook } from './components/Class-1-31/Hooks/useMemoHook/UseMemoHook-1';
import { UseMemoHook3 } from './components/Class-1-31/Hooks/useMemoHook/UseMemoHook-3';
// import { UseMemoHook2 } from './components/Class-1-31/Hooks/useMemoHook/UseMemoHook-2';
// import { UseEffectHook } from './components/Class-1-31/Hooks/useEffectHook/UseEffectHook-1';


export default function App() {


    // const [todo, setTodoList] = useState([])
    // const [updatedTodoList, setUpdatedTodoList] = useState([])
    // const [filterStatus, setFilterStatus] = useState(false)




    return (<>
        <UseCallbackHook4/>
        {/* <UseMemoHook3/> */}
        
        

        {/* <UseCallback5/> */}
        {/* <UseCallBackHooK2/> */}


        {/* <Provider store={store}>
            <Counter />
            <Todo />
        </Provider> */}
        {/* <UseMemoHook/> */}
        {/* <UseMemoHook2/> */}


        {/* <UseCallback1/> */}
        {/* <UseEffectHook4/> */}
        {/* <UserReducer /> */}
        {/* <UseEffectHook/> */}

        {/* <UserReducerCounter /> */}
        {/* <UserReducerProduct /> */}




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
