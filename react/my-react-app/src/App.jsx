import Card from './Card.jsx';
import Student from './Student.jsx';
import Button from './Button.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
function App() {
  const fruits = [{name: 'Apple', calories: 95}, {name: 'Banana', calories: 105}, {name: 'Cherry', calories: 50}, {name: 'Date', calories: 277}, {name: 'Elderberry', calories: 73}];
  return(
<>
<Card/>
!<Student name="John Doe" age={30} isStudent={true}/>
<Student name="Patrick" age={42} isStudent={false}/>
<Student></Student>
<Button/>
<UserGreeting isLoggedIn={true} username="BroCode"/>
<List items={fruits} category="Fruits"/>
</>

);
}

export default App;
