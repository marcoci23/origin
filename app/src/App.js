import './App.css';
import App_2 from './App_2';

function formatName(user) {
  return user.firstName + ' '+ user.lastName;
}
const user = { 
  firstName : 'adasd',
  lastName : 'JHG'
}
const element =  <h1> Hello {formatName(user)} ! </h1>
function App() {
  return (
    <div className="App">
      <p>{element}</p>
      <App_2/>
    </div>
  );
}

export default App;
