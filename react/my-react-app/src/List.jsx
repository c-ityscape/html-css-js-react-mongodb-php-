function List(props){
    //const fruits = [{name: 'Apple', calories: 95}, {name: 'Banana', calories: 105}, {name: 'Cherry', calories: 50}, {name: 'Date', calories: 277}, {name: 'Elderberry', calories: 73}];
    //fruits.sort((a,b)=>a.name.localeCompare(b.name));// Sort fruits by name in alphabetical order
    // fruits.sort((a,b)=>a.calories-b.calories); // Sort fruits by calories in ascending order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); // Sort fruits by name in reverse alphabetical order
    const itemList = props.items;
    const category = props.category;
    const listItems = itemList.map(item=> <li>{item.name} - {item.calories} calories</li>)
    return(
        <>
        <h2>{category}</h2>
        <ul>
            {listItems}
        </ul>
        </>
         
    );
}
export default List;