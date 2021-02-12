import React from "react";
import HomePage from "./pages/homepage";

import './App.css';
import { Route } from "react-router-dom";

const hats = (props) => {
  console.log(props);
  return <h1>HATS PAGE</h1>
}
const sneakers = (props) => {
  console.log(props);
  return <h1>SNEAKERS PAGE</h1>
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop/hats" component={hats}/>
      <Route path="/shop/sneakers" component={sneakers}/>
    </div>
  );
}

export default App;
