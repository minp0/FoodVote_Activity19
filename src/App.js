import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Food(props) {
  const {title, callback} = props                       // define props parameter
  const [name,set_name] = useState("min")               // set state

  const change_name = () => {                           // define function
    set_name("Inferno")
    callback("So hungary")                           // set parameter to parent object
  }
  
  return (
    <div>
      <a>{title}</a>
      
      <button onClick = {change_name}> click here! {name} </button>
    </div>
  )
}


function App() {
  const [food_child,set_child] = useState("Hungry")       // sent setter_child to child function

  return (
    <div className="App">
      <header className="App-header">
          <Food title="apple" callback={set_child}/> 
          <a href = "#"> {food_child} </a>
          <Food title="kiwi" callback={set_child}  /> 
      </header>
    </div>
  );
}

export default App;
