import { useReducer } from 'react';
import './App.css';

function reducer(state, action){
 
  // switch (state.type) {
  //   case :
      
  //     break;
   
  //   default:
  //     break;
  //  }
}


function App() {
  
   const intialValue = {
   counter:0,
   isDark:false,
   likes:0,
   isLogedin:false
   }

 const[state, dispatch] = useReducer(reducer,intialValue)




 const incremethandler=()=>{
  dispatch(1)
}
 const decremethandler=()=>{
  dispatch(-1)
 }



  return (
    <div className="App">
     <h1>Heading{state}</h1>
     <button>theme</button>    
     <div>
      <button onClick={incremethandler}>Increment</button>
      <button onClick={decremethandler}>decrement</button>
      <button onClick={decremethandler}>login</button>
      <button onClick={decremethandler}>logout</button>
     </div>
    </div>
  );
}

export default App;
