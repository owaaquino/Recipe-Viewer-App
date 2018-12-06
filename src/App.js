import React, { Component } from "react";
import { Recipies } from "./data/recipies";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="options">
        <ul className="cards">
          {Recipies.map((recipe, index) => {
            return <Card data={recipe} key={index} />;
          })}
        </ul>
        {/* <Navigation /> */}
      </div>
    );
  }
}

export default App;
