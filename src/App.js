import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "toggleTheme":
      return { ...state, isDark: !state.isDark };
    case "login":
      return { ...state, isLogedin: true };
    case "logout":
      return { ...state, isLogedin: false };
    default:
      return state;
  }
}

function App() {
  const initialValue = {
    counter: 0,
    isDark: false,
    likes: 0,
    isLogedin: false
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleThemeHandler = () => {
    dispatch({ type: "toggleTheme" });
  };

  const loginHandler = () => {
    dispatch({ type: "login" });
  };

  const logoutHandler = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="App">
      <h1>Counter: {state.counter}</h1>
      <h2>Theme: {state.isDark ? "Dark" : "Light"}</h2>
      <h2 
        style={{
          color: state.isLogedin ? "green" : "red",
          border: state.isLogedin ? "2px solid green" : "2px solid red",
          padding: "5px",
          backgroundColor: state.isLogedin ? "black" : "yellow",
        }}
      >
        Status: {state.isLogedin ? "Logged In" : "Logged Out"}
      </h2>
      <button onClick={toggleThemeHandler}>Toggle Theme</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}

export default App;
