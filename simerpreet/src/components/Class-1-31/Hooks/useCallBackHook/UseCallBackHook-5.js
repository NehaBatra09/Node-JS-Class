import React,{useCallback, useState} from 'react'
import { MyList } from './MyList';
export const UseCallback5 = () => {

    const [count, setCount] = useState(0);

    
    const increment = () => {
        setCount((c) => c + 1);
    };
   
    
    return (
        <>
            <MyList/>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}