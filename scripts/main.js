import { recipes } from "../data/recipes.js";
import {
  generateAppareils,
  displayAppareils,
  appareilsSearch,
  generateUstensils,
  displayUstensils,
  ustensilsSearch,
  generateIngredients,
  displayIngredients,
  ustensilType,
  appareilType,
  ingredientType,
  ingredientsSearch,
} from "./filters.js";
import { styles } from "./styles.js";

const cardsContent = document.querySelector(".cards-content");
const searchBar = document.getElementById("mainSearchInput");

let filteredRecipes = [...recipes];
let data = [];
data = recipes;
console.log(data);
let appList = [];
let ustList = [];
let ingList = [];

function init() {
  window.addEventListener("load", () => {
    displayCards(recipes);

    appList = generateAppareils(recipes);
    displayAppareils(appList);
    appareilsSearch(filteredRecipes, appList);
    appareilType(filteredRecipes);

    ustList = generateUstensils(recipes);
    displayUstensils(ustList);
    ustensilsSearch(filteredRecipes, ustList);
    ustensilType(filteredRecipes);

    ingList = generateIngredients(recipes);
    displayIngredients(ingList);
    ingredientsSearch(filteredRecipes, ingList);
    ingredientType(filteredRecipes);

    styles();
    mainSearch();
  });
}
init();

// Logique d'affichage des cartes.
export function displayCards(recipes) {
  const recipesList = recipes
    .map((recipe) => {
      let ingredientsData = [];
      let quantityData = [];
      let unitData = [];
      for (let i = 0; i < recipe.ingredients.length; i++) {
        let ingredientWay = recipe.ingredients[i].ingredient;
        let quantityWay = recipe.ingredients[i].quantity;
        let unitWay = recipe.ingredients[i].unit;
        let stringifyUnitWay = JSON.stringify(unitWay);
        if (typeof unitWay == "string") {
          unitWay = stringifyUnitWay.replace(/"grammes"/i, `gr`);
          unitWay = unitWay.replace(/"/g, "");
        }
        ingredientsData +
          unitData +
          quantityData.push(`
                <span class="ingredient-element"><b>${ingredientWay}</b> : ${
            quantityWay || ""
          } <span class="unity">${unitWay || ""}</span><br/></span>
                `);
      }
      return `
            <article class="recipe-card" id="${recipe.id}recipe">
            <figure></figure>
            <div class="recipe-card-content">
                <div class="card-header">
                <h2>${recipe.name}</h2>
                <span class="recipe-time">
                    <i class="far fa-clock"></i>
                    <span>${recipe.time} min</span>
                </span>
            </div>
            <div class="recipe-content">
                <div class="recipe-ingredients">
                    <p>${ingredientsData.join("")} ${quantityData.join(
        ""
      )} ${unitData.join("")}</p>
                </div>
                <div class="recipe-description">
                    <p>${recipe.description}</p>
                </div>
            </div>
        </div>
        </article>
        `;
    })
    .join("");
  cardsContent.innerHTML = recipesList;
}

export function mainSearch() {
  searchBar.addEventListener("input", (e) => {
    const inputSearchBar = e.target.value.toLowerCase();

    if (inputSearchBar.length >= 3) {
      filteredRecipes = [];
      for (let i = 0; i < recipes.length; i++) {
        let ingredientsData = [];
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          let ingredientWay = recipes[i].ingredients[j].ingredient;
          ingredientsData.push(ingredientWay.toLocaleLowerCase());
        }

        if (
          recipes[i].name.toLocaleLowerCase().includes(inputSearchBar) ||
          recipes[i].description.toLocaleLowerCase().includes(inputSearchBar) ||
          ingredientsData.some((ing) => ing.includes(inputSearchBar))
        ) {
          filteredRecipes.push(recipes[i]);
        }
      }
      displayCards(filteredRecipes);

      appList = generateAppareils(filteredRecipes);
      displayAppareils(appList);
      appareilType(filteredRecipes);

      ustList = generateUstensils(filteredRecipes);
      displayUstensils(ustList);
      ustensilType(filteredRecipes);

      ingList = generateIngredients(filteredRecipes);
      displayIngredients(ingList);
      ingredientType(filteredRecipes);
    } else {
      filteredRecipes = [...recipes];
      displayCards(filteredRecipes);
    }
    if (filteredRecipes.length == 0) {
      cardsContent.innerHTML = "Aucun résultat de recherche !";
    }
  });
}
