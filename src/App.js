import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "b191dc1c";
  const APP_KEY = "271540be1645e91e6ed3fdd8e5535458";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const resp = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await resp.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Wanna Cook Something ??</h1>
        <br />
        <h2>Just search for an ingredient to get some recipes</h2>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          placeholder="e.g. Banana"
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <div className="copyright">
        © Copyright 2020 YohavB Designed by YohavB. Check the Code {""}
        <a
          href="https://github.com/YohavB/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here.
        </a>
      </div>
    </div>
  );
}

export default App;
