
// function Button(){
//     const styles={
       
//             backgroundColor: 'blue',
//             color: 'white',
//             padding: '10px 20px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//         }
    
//     return (
//         <>
//         <button style={styles}>Click Me</button>
//         </>
//     );
// }
// export default Button
function Button() {
    const handleClick= () =>{
        console.log("OUch! You clicked me!");
    
    }
    const handleClick2 = (name) => console.log(`${name} stopc clicking me!`);
    return (
        <>
        <button onClick={() => handleClick2("Bro")}>Click Me 😀</button>
        </>
    )
}
export default Button;
