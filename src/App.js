import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

function Hats() {
  return <h2>Hellow</h2>;
}

function App() {
  return (
    <div>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/hats">
        <Hats />
      </Route>
    </div>
  );
}

export default App;
