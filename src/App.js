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


function Box_food(props) {
  const {topic,name,img,lore} = props       // set var
  
  return (
    <div>
      <h2>{topic}</h2>
      <p>{name}</p>
    </div>
  );
}


function App() {
  /*const [food_child,set_child] = useState("Hungry")       // sent setter_child to child function

  return (
    <div className="App">
      <header className="App-header">
          <Food title="apple" callback={set_child}/> 
          <a href = "#"> {food_child} </a>
          <Food title="kiwi" callback={set_child}  /> 
      </header>
    </div>
  );
  */


  return (
    <div class="main">
      <h1> โหวตอาหาร </h1>
      <div> 
          <Box_food 
            topic="อาหารคาว" 
            name="ข้าวผัด"  
          />
          <Box_food 
            topic="อาหารหวาน" 
            name="บัวลอย"
          />
      </div>
    </div>
  )

}

export default App;
