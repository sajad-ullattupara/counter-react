import React, { useReducer } from "react";
import { Button,ListGroup, Card } from "react-bootstrap";
import "./App.css";

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Header><h1>Count: {state.count}</h1></Card.Header>
        <ListGroup variant="flush">
        <ListGroup.Item> 
          <Button onClick={() => dispatch({ type: "increment" })}>
            <h1>+</h1>
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "decrement" })}
            >
            <h1>-</h1>
          </Button>
          <Button variant="danger" onClick={() => dispatch({ type: "reset" })}>
            <h1>Rst</h1>
          </Button></ListGroup.Item>
        </ListGroup>
      </Card>
   
    </div>
  );
}


function reducer(state, action) {
  switch (
    action.type 
  ) 
  {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}
export default App;
