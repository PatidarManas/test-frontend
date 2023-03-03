
import './App.css';
import Entry from './component/entrypage';
import Home from './component/home';

function App() {
  return (
    <>
    <div className='head'><h1>Welcome to demo site</h1><span>you can create a patient ,see all patients details,delete a single patient</span>
    <span>patient details will only be added if email , contact no. and pincode are in correct format</span>
      </div>
    <Entry></Entry>
    <Home></Home> 
    </>
      
    
  );
}

export default App;
