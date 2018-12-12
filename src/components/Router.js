import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              title={"Recipes App Viewer"}
              desc={"A simple React Router sample application"}
            />
          )}
        />
        <Route path="/recipe/:slug" component={Recipe} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
