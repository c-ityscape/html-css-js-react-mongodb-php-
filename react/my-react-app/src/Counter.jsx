import React, {useState} from "react";
function Counter(){
   const [count, setCount] = useState(0);
   const increment =()=>{
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count +1); // This will not work as expected due to closure
    setCount(prevCount=> prevCount +1); // This is the correct way to update state based on previous state
    setCount(prevCount=> prevCount +1); // This will work correctly
   }
   const decrement =()=>{
    setCount(count-1);
   }
   const reset=()=>{
    setCount(0);
   }
   return (
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>

    </div>
   );
};
export default Counter;