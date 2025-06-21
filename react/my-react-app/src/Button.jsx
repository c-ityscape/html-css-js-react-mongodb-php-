
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
    let count =0
    // const handleClick= (name) =>{
    //     if(count<3){
    //         count++;
    //         console.log(`${name} clicked me! ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick = (event)=>{
        event.target.textContent = "Ouch! I got clicked!";
        console.log(event);
    }
   // const handleClick2 = (name) => console.log(`${name} stopc clicking me!`);
    return (
        <>
        <button onClick={(e) => handleClick(e)}>Click Me 😀</button>
        </>
    )
}
export default Button;
