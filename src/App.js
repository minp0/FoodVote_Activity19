import logo from './logo.svg';
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
  const {topic,name,img} = props       // set var
  
  return (
    <div>
      <style>
        {`
          .container_food {

            display : flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            border: 2px solid red;

            width: 60vw;
            // height: 400px;
          
          }   

          img {
            width: 200px; 
            align-self: flex-end;
          }
        
        
        
        `}
      </style>
      <div className="container_food">
        <h2 className="food">{topic}</h2>
        <strong>{name}</strong>
        <img src={img} />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti iusto aliquid quia? 
            Cupiditate illo molestias corporis, tempore libero reprehenderit eligendi. 
            Architecto expedita omnis tenetur aperiam perspiciatis maiores laborum aspernatur! Rem et eos recusandae, 
            maxime voluptate delectus cum facere, illum numquam totam corrupti enim, 
            perspiciatis culpa iste voluptas? Dolorum, vitae et.
          </p>
      </div>
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

  //  style using javascript document
  document.body.style.backgroundColor = "#696969"


  return (
    <div className="main">
      <style>
        {`
          * {
            color: black;
          }
        
          .main {
            display : flex;
            flex-direction: column;
            align-items: center;
          }
        
        `
        }
      </style>
      <h1> โหวตอาหาร </h1>
      <div className="main"> 
          <Box_food 
            topic="อาหารคาว" 
            name="ข้าวผัด"  
            img="https://yayoirestaurants.com/productimages/7995__AW-Yayoi-_800-x-800-px.jpg"
          />
          <Box_food 
            topic="อาหารหวาน" 
            name="บัวลอย"
            img="https://www.ryoiireview.com/upload/article/202107/1626078739_a28004f9ed889dbddfb6c09599155f35.jpg"
          />
      </div>
    </div>
  )

}

export default App;




const style_css = {

}