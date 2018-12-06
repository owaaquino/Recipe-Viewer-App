import React from "react";
import { Recipies } from "../data/recipies";
// import NotFound from "./NotFound";

const Recipie = ({ match }) => {
  let slug = match.params.slug;
  // console.log(Object.keys(Recipies).includes(slug));
  // if (Object.keys(Recipies).includes(slug)) {
  //   console.log("ohyeah!");
  // } else {
  //   return <NotFound />;
  // }
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

export default Recipie;
