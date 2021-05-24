import { useState } from 'react'
import './App.css';
import Component from  './component';
import './App.css'

function App() {
  const [show, setShow]= useState(null)

  const onSubmitHandler=(title)=> {    
    setShow(title);

  }
 // console.log("In App", props)
  return (
    <div className="App">
    <div className="container">
    <div className='containerName'>Welcome to Big Bazaar</div> 
  <Component componentClass= "LeftShoppingWindow" title='Left Shopping Window' onSubmitHandler={onSubmitHandler} />
  <Component componentClass= "RightShoppingWindow" title='Right Shopping Window' onSubmitHandler={onSubmitHandler} />
  <Component  componentClass="FrontEntrance" title='Front Entrance' onSubmitHandler={onSubmitHandler} />
  <Component  componentClass="ShoeWall" title='Shoe Wall' onSubmitHandler={onSubmitHandler} />
    </div>

{show!==null? <div className='Box'>{show}</div>:null }
</div>
  );
}

export default App;
