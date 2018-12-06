import React from "react";
import App from "../App";

const Home = props => {
  return (
    <div className="card-wrapper">
      <div className="title-header">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <App />
    </div>
  );
};

export default Home;
