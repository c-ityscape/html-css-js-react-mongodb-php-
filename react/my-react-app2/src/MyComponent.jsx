import React, {useState, useEffect} from 'react';
function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
    console.log("Event listener added");
        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    },[]);

    useEffect(() => {
        document.title = `Width: ${width}px, Height: ${height}px`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}
export default MyComponent;

// import React, {useState, useEffect} from 'react';
// function MyComponent(){
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");
//     useEffect(() => {
//         document.title = `Count: ${count} ${color}`;
//     }, [count,color]); // Update document title whenever count changes
//     function addCount(){
//         setCount(c => c + 1);
//     }
//     function subtractCount(){
//         setCount(c => c - 1);
//     }
//     function changeColor(){
//         setColor(c => c === "green" ? "red" : "green");
//         document.body.style.color = color; // Change background color
//     }
//     return(<>
//         <p>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={subtractCount}>Subtract</button>
//         <button onClick={changeColor}>Change Color</button>
//     </>);
// }
// export default MyComponent;