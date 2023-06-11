import React, { Suspense, useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoHeader } from './components/Projects/Todo-1/TodoHeader';
import { TodoHead } from './components/Projects/Todo-1/TodoHead';
import { TodoContent } from './components/Projects/Todo-1/TodoContent';
// import { TodoHeader } from './components/Projects/Todo/TodoHeader';
// import { TodoContent } from './components/Projects/Todo/TodoContent';

export default function App() {
    const [todo, setTodoList] = useState([])
    const[updatedTodoList,setUpdatedTodoList]=useState([])
    // const [filterStatus, setFilterStatus] = useState(false)
    // console.log(todo,"---")

    return (<>
        {/* <TodoHeader todo={todo} addTodoList={setTodoList} setFilterStatus={setFilterStatus} /> */}
        {/* <TodoContent todo={todo} filterStatus={filterStatus} /> */}

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
        {/* <TodoHeader/> */}

        <TodoHead todo={todo} setTodoList={setUpdatedTodoList} />
        <TodoContent  todo={updatedTodoList}/>
    </>)

}
