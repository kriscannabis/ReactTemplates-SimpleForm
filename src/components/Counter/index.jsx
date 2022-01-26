import React, {useState} from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);

    const incrementHandler = ()=>setCount(count+1);
    const decremantHandler = ()=>setCount(count-1);

    return(
        <>
            <h1>Counter</h1>
            Count is: {count}
            <br/>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decremantHandler}>-</button>
        </>
    );
}

export default Counter;
