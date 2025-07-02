import { func } from "prop-types";
import React, {useState} from "react";

function MyComponent(){
    const [cars,setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear, 
            make: carMake,
            model: carModel
        };
        setCars(c=> [...c, newCar])
        setCarYear(new Date().getFullYear()); //reset year to current year
        setCarMake(""); //reset make to empty string
        setCarModel(""); //reset model to empty string
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index)); //using underscore to ignore the first parameter
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    return(
        <>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
                    
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter car year" />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" />
            <button onClick={handleAddCar}>Add Car</button>
        </>
    );
}
export default MyComponent;

// import { element, func } from "prop-types";

// import React, {useState} from 'react';
// function MyComponent(){
//     const [foods,setFoods]=useState(["Apple","Banana","Orange"]);

//     function handleAddFood(){
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value=""; //reset input field

//         setFoods(f =>[...f,newFood]); //add new food to the list


//     }
//     function handleRemoveFood(index){
//         setFoods(f => f.filter((_,i) => i !== index)) //using underscore to ignore the first parameter
//     }
// return(<>
// <h2>List of Food</h2>
// <ul>
//     {foods.map((food,index)=>
//          <li key={index} onClick={() => handleRemoveFood(index)}>{food}
//          </li>)}
// </ul>
// <input type="text" id="foodInput" placeholder="Enter food name" />
// <button onClick={handleAddFood}>Add Food</button>
// </>);
// }
// export default MyComponent;


// import React , {useState} from "react";
// function MyComponent(){
//     const [car,setCar] = useState({year: 2024, 
//         make:"Ford", 
//         model:"Mustang"});

//         function handleYearChange(event){
//             // setCar({...car,year:event.target.value});
//             setCar(prevCar => ({...prevCar, year: event.target.value}));
//         }
//         function handleMakeChange(event){
//             // setCar({...car,make:event.target.value})
//             setCar(prevCar => ({...prevCar, make: event.target.value}));
//         }
//         function handleModelChange(event){
//             // setCar({...car,model:event.target.value})
//             setCar(prevCar => ({...prevCar, model: event.target.value}));
//         }
//     return(
//         <div>
//             <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
//             <input type="number" name="" id="" value={car.year} onChange={handleYearChange}/><br />
//             <input type="text" name="" id="" value={car.make} onChange={handleMakeChange} /><br />
//             <input type="text" name="" id="" value={car.model} onChange={handleModelChange} /><br />
//         </div>
//     )
    
// }
// export default MyComponent;

// function MyComponent() {
//     const [name, setName]=useState("Guest");
//     const [quantity, setQuantity] = useState(0);
//     const [comment, setComment]=useState("");
//     const [payment, setPayment]=useState("");
//     const [shipping, setShipping]=useState("");
//     function handleNameChange(event){
//         setName(event.target.value);
//     }
//     function handleQuantityChange(event){
//         setQuantity(event.target.value);
//     }
//     function handleCommentChange(event){
//         setComment(event.target.value);
//     }
//     function handlePaymentChange(event){
//         setPayment(event.target.value);
//     }
//     function handleShippingChange(event){
//         setShipping(event.target.value);
//     }
//     return (
//         <div>
//             <input value={name} onChange={(event)=>handleNameChange(event)} />
//             <p>Name:{name}</p>
//             <input value={quantity} onChange={handleQuantityChange} type="number" />
//             <p>Quantity:{quantity}</p>
//             <textarea value={comment} onChange={handleCommentChange} id="" placeholder="Enter Delivery Instructions"></textarea>
//             <p>Comment:{comment}</p>
//             <select value={payment} onChange={handlePaymentChange} id="">
//                 <option value="">Select an option</option>
//                 <option value="Visa">Visa</option>
//                 <option value="MasterCard">MasterCard</option>
//                 <option value="PayPal">PayPal</option>
//                 <option value="Cash">Cash</option>
//             </select>
//             <p>Payment:{payment}</p>
//             <label>
//                 <input type="radio" value="Pick up" checked={shipping==="Pick up"} onChange={handleShippingChange} />Pick up</label>
//             <label>
//                 <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} />
//                 Delivery</label>
//                 <p>Shipping:{shipping}</p>
//         </div>
//     )
// }
// export default MyComponent;
// import React, {useState} from "react";
// function MyComponent(){
//     let [name,setName] =useState("Guest");
//     const [age, setAge]=useState(0);
//     const updateName = () => {
//         setName("Spongebob Squarepants");
//     }
//     const [isEmployed, setIsEmployed] = useState(false);
//     const setEmployment = () =>{
//         setIsEmployed(!isEmployed);
//     }

//     const incrementAge = () =>{
//         setAge(age+1);
//     }
//     return (<div>
//         <p>Name: {name}</p>
//         <button onClick={updateName}>Set Name</button>
//         <p>Age: {age}</p>
//         <button onClick={incrementAge}>Increment Age</button>
//         <p>Is Employed: {isEmployed?"Yes":"No"}</p>
//         <button onClick={setEmployment}>Toggle Employment</button>
//     </div>)
// }
// export default MyComponent;