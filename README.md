#Simple React Router Application

An app that displays a list of food recipe

**Goal:**

- Learn how to use the React Router API
- Understand how to add dynamic information from a JSON file / Object Literals

**Features:**

- Displays a list of recipe then when clicked the "Read More" button it will direct user to more information of the recipe.

**Techs:**

- React.js
- React Router
- CSS
- HTML

**Assets:**

- Font -

**Live links:**

- Codepen -
- Hosted with Netlify -

# Notes

Prerequisites:

- Must install Nodejs on your unit
- Must install NPM on your unit
- Install create-react-app installed to your node module ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have a basic understanding of Javascript (ES6)
- Have a basic knowledge about React.js framework
- React Router is included in the dependencies of your npm
```bash
        npm install react-router-dom --save
```
## 1. Initialize and create basic Components

## App.js

Our list of recipes will be added in our App.js file that renders a <Card> that will display some of the details of the recipe.
```javascript
    import React, { Component } from "react";
    import Card from "./components/Card";

    class App extends Component {
      render() {
        return (
          <div className="options">
            <ul className="cards">
              <li>{/* list of recipe goes here */}</li>
            </ul>
          </div>
        );
      }
    }

    export default App;
```
## Home.js

Home is just a wrapper will be adding for displaying some text on the site for design / content purposes. Here we'll render the <App>
```javascript
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
```
## Cards.js

this will be the component that will display a card style list for the different recipes.
```javascript
    import React from "react";

    const Card = (props) => {
      return (
        <li className="card-item">
          <img src={data.img_src} alt={data.title} />
          <span>
            <h3>{recipe titlehere}</h3>
            <p>{recipe desc here}</p>
            <a>Read More</a>
          </span>
        </li>
      );
    };

    export default Card;
```
## Recipe.js

this will display the full details of our recipe
```javascript
    import React from "react";

    const Recipe = (props) => {
    	// details of a food recipe will be added here
    };

    export default Recipe;
```
## 2. Lets start by assigning Route information

Routing can be done in the App.js file but we decided to use new file to separate the Routing components.

## Router.js
```javascript
    import React from "react";
    import { BrowserRouter, Route, Switch } from "react-router-dom";
    import Home from "./Home";
    import Recipie from "./Recipie";
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
                  title={"Recipies App View"}
                  desc={"Below are list of recipies..."}
                />
              )}
            />
            <Route path="/recipie/:slug" component={Recipie} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      );
    };

    export default Router;
```
- we import the BrowserRouter, Switch, and Route components from the react-router-dom. This are components that are available in the api.
- We set the default or home route to <Home> component
- Add a route when a specific recipe is visited and render the <Recipe> component
- <NotFound> is rendered as a fallback if there are no route that are existing in the list of routes

## 3. Map the list of recipe to the <App> component
```javascript
    class App extends Component {
      render() {
        return (
          <div className="options">
            <ul className="cards">
              {Recipies.map((recipe, index) => {
                return <Card data={recipe} key={index} />;
              })}
            </ul>
          </div>
        );
      }
    }
```
- We map out the recipes from the Object Literal to be displayed properly as a card. And we pass some data as props.

In our <Card>  we used the props (data) and display the details properly for design
```javascript
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
```
- we added a <Route> in here for the Read More link.

## 4. Display the whole details of the Recipe

- here we display the details of the recipe based on the slug of the card clicked in the <Card> component
```javascript
    import React from "react";
    import { Recipies } from "../data/recipies";
    // import NotFound from "./NotFound";

    const Recipe = ({ match }) => {
      let slug = match.params.slug;
      let recepie = Recipies.filter(recepie => recepie.slug === slug).map(
        (recepie, key) => {
          return (
            <div className="recipie-container" key={key}>
              <div className="recipie-top">
                <div className="recipie-left">
                  <h2>{recepie.title}</h2>
                  <p>{recepie.description}</p>
                  <p>
                    <strong>Ingredients</strong>
                  </p>
                  <ul>
                    {recepie.ingredients.map((ingredient, key) => {
                      return <li key={key}>{ingredient}</li>;
                    })}
                  </ul>
                </div>
                <div className="recipie-right">
                  <img src={recepie.img_src} alt={recepie.title} />
                </div>
              </div>

              <div className="steps">
                <p>
                  <strong>Steps</strong>
                </p>
                <ol>
                  {recepie.steps.map((step, key) => {
                    return <li key={key}>{step}</li>;
                  })}
                </ol>
              </div>
            </div>
          );
        }
      );
      return <div>{recepie}</div>;
    };

    export default Recipe;
    ```