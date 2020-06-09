import React from 'react';
import logo from './logo.svg';
import './App.css';

var myElement = ( 
  <div>
	    Nusrat W Khwaja - React Class Component 
  </div>
)
  
class MyComponent extends React.Component { /* return var */
  render() {
    return (myElement)
  }
}


function App() {  /* return Class  */
    return (
      <MyComponent /> ) 
    }

    export default App;