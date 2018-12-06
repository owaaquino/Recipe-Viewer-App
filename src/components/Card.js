import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Recipie from "./Recipie";

const Card = ({ data }) => {
  return (
    <li className="card-item">
      <img src={data.img_src} alt={data.title} />
      <span>
        <h3>{data.title}</h3>
        <p>{data.description.substring(0, 255) + "..."}</p>
        <NavLink to={`/recipie/${data.slug}`}>Read More</NavLink>
      </span>
      <Switch>
        <Route path={`/recipie/${data.slug}`} component={() => <Recipie />} />
      </Switch>
    </li>
  );
};

export default Card;
