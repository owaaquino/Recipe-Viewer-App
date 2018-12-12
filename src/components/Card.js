import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Recipe from "./Recipe";

const Card = ({ data }) => {
  return (
    <li className="card-item">
      <img src={data.img_src} alt={data.title} />
      <span>
        <h3>{data.title}</h3>
        <p>{data.description.substring(0, 255) + "..."}</p>
        <NavLink to={`/recipe/${data.slug}`}>Read More</NavLink>
      </span>
      <Switch>
        <Route path={`/recipe/${data.slug}`} component={() => <Recipe />} />
      </Switch>
    </li>
  );
};

export default Card;
