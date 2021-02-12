import React from "react";
import HomePage from "./pages/homepage";
import { Switch, Route } from "react-router-dom";
import ShopePage from "./pages/shop/shop";
import Header from "./components/header/header";

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopePage}/>
      </Switch>
    </div>
  );
}

export default App;
