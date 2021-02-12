import React from "react";
import HomePage from "./pages/homepage";
import { Route } from "react-router-dom";
import ShopePage from "./pages/shop/shop";

import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopePage}/>
    </div>
  );
}

export default App;
