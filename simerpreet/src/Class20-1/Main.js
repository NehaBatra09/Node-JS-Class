import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoFilter } from "./TodoFilter";
import { TodoContent } from "./TodoContent";
export const Main = () => {


    return (<>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <TodoHeader />
            <TodoFilter />
        </div>
        <div>
            <TodoContent />
        </div>

    </>)

}