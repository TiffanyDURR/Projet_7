import { recipes } from "../data/recipes.js";
import { displayCards } from "./main.js";
let data = [];
data = recipes;
console.log(data);

const appareilsContent = document.querySelector(".appareils-list");
const ustensilsContent = document.querySelector(".ustensiles-list");
const ingredientsContent = document.querySelector(".ingredients-list");
const filterAppareil = document.querySelector(".app-div");
const filterUstensil = document.querySelector(".ust-div");
const filterIngredient = document.querySelector(".ing-div");

export function generateUstensils(recipes) {
  let listUstensils = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ustensils.length; j++) {
      listUstensils.push(recipes[i].ustensils[j]);
    }
  }
  let noDuplicate = [...new Set(listUstensils)];
  return noDuplicate;
}

export function displayUstensils(ustList) {
  const ustensilsList = ustList
    .map(
      (ustensil) =>
        `<span class="ustensiles" data-ustensil="${ustensil}">${ustensil}</span>`
    )
    .join("");
  ustensilsContent.innerHTML = ustensilsList;
}

export function ustensilsSearch(recipeList, ustList) {
  const ustINPUT = (e) => {
    const inputSearchUstensils = e.target.value.toLocaleLowerCase();
    ustList = generateUstensils(recipeList);
    const filtUst = ustList.filter((ust) => ust.includes(inputSearchUstensils));
    displayUstensils(filtUst);
    ustensilType(recipeList);
  };

  const searchUstensils = document.getElementById("inputUstensiles");
  const old_element = searchUstensils;
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  new_element.addEventListener("input", ustINPUT);
}

export function ustensilType(recipeList) {
  const ustensilsDivAll = document.querySelectorAll(".ustensiles");
  ustensilsDivAll.forEach((ustensilsDiv) => {
    ustensilsDiv.addEventListener("click", () => {
      const ustensilSelected =
        ustensilsDiv.dataset.ustensil.toLocaleLowerCase();
      filterUstensil.innerHTML += `
            <div class="filter-selected ustensiles-selected" id="hide${ustensilSelected.toLocaleLowerCase()}">
            <span data-type="ust">${ustensilSelected.toLocaleLowerCase()}</span>
            <i class="far fa-times-circle ustClose" id="close${ustensilSelected.toLocaleLowerCase()}"></i>
            </div>
            `;
      closeUstSelected();
      const filteredRecipes = filterByTag(recipeList);

      displayCards(filteredRecipes);

      function closeUstSelected() {
        const closeBtnList = [...document.querySelectorAll(".ustClose")];
        closeBtnList.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const div = e.target.parentNode;
            const value = div.querySelector("span").textContent;
            let hideDivUst = document.getElementById(
              `hide${value.toLocaleLowerCase()}`
            );
            hideDivUst.remove();
            const filteredRecipes = filterByTag(recipeList);
            displayCards(filteredRecipes);
          });
        });
      }
    });
  });
}

function filterRecipesByUstensilTag(recipeList, tag) {
  const filteredRecipes = recipeList.filter((recipe) => {
    return recipe.ustensils.includes(tag.textContent);
  });
  return filteredRecipes;
}

export function generateAppareils(recipes) {
  const appareilList = recipes.map((recipe) => recipe.appliance);
  const noDuplicate = [...new Set(appareilList)];
  return noDuplicate;
}

export function appareilType(recipeList) {
  const appareilsDivAll = document.querySelectorAll(".appareils");
  appareilsDivAll.forEach((appareilsDiv) => {
    appareilsDiv.addEventListener("click", () => {
      const appareilSelected =
        appareilsDiv.dataset.appareil.toLocaleLowerCase();
      filterAppareil.innerHTML += `
            <div class="filter-selected appareils-selected" id="hide${appareilSelected.toLocaleLowerCase()}">
            <span  data-type="app">${appareilSelected.toLocaleLowerCase()}</span>
            <i class="far fa-times-circle appClose" id="close${appareilSelected.toLocaleLowerCase()}"></i>
            </div>
            `;
      closeAppSelected();
      const filteredRecipes = filterByTag(recipeList);
      displayCards(filteredRecipes);

      function closeAppSelected() {
        const closeBtnList = [...document.querySelectorAll(".appClose")];
        closeBtnList.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const div = e.target.parentNode;
            const value = div.querySelector("span").textContent;
            let hideDivApp = document.getElementById(
              `hide${value.toLocaleLowerCase()}`
            );
            hideDivApp.remove();
            const filteredRecipes = filterByTag(recipeList);
            displayCards(filteredRecipes);
          });
        });
      }
    });
  });
}

export function displayAppareils(appList) {
  const appareilsList = appList
    .map(
      (appareil) =>
        `<span class="appareils" data-appareil="${appareil}">${appareil}</span> `
    )
    .join("");
  appareilsContent.innerHTML = appareilsList;
}

export function appareilsSearch(recipeList, appList) {
  const appINPUT = (e) => {
    const inputSearchAppareils = e.target.value.toLocaleLowerCase();
    appList = generateAppareils(recipeList);
    const filtApp = appList.filter((app) =>
      app.toLocaleLowerCase().includes(inputSearchAppareils)
    );
    displayAppareils(filtApp);
    appareilType(recipeList);
  };

  const searchAppareils = document.getElementById("inputAppareils");
  const old_element = searchAppareils;
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  new_element.addEventListener("input", appINPUT);
}

function filterRecipesByAppareilTag(recipeList, tag) {
  const filteredRecipes = recipeList.filter((recipe) => {
    return recipe.appliance.toLocaleLowerCase().includes(tag.textContent);
  });

  return filteredRecipes;
}

export function generateIngredients(recipes) {
  let listIngredients = [];

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      listIngredients.push(recipes[i].ingredients[j].ingredient.toLowerCase());
    }
  }
  let noDuplicate = [...new Set(listIngredients)].sort();
  return noDuplicate;
}

export function ingredientType(recipeList) {
  const ingredientsDivAll = document.querySelectorAll(".ingredients");
  ingredientsDivAll.forEach((ingredientsDiv) => {
    ingredientsDiv.addEventListener("click", () => {
      const ingredientSelected =
        ingredientsDiv.dataset.ingredient.toLocaleLowerCase();
      filterIngredient.innerHTML += `
            <div class="filter-selected ingredients-selected" id="hide${ingredientSelected.toLocaleLowerCase()}">
            <span data-type="ing">${ingredientSelected.toLocaleLowerCase()}</span>
            <i class="far fa-times-circle ingClose" id="close${ingredientSelected.toLocaleLowerCase()}"></i>
            </div>
            `;
      closeIngSelected();

      const filteredRecipes = filterByTag(recipeList);
      displayCards(filteredRecipes);

      const ingList = generateIngredients(filteredRecipes);
      displayIngredients(ingList);
      ingredientsSearch(filteredRecipes, ingList);
      ingredientType(filteredRecipes);

      function closeIngSelected() {
        const closeBtnList = [...document.querySelectorAll(".ingClose")];
        closeBtnList.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const div = e.target.parentNode;
            const value = div.querySelector("span").textContent;
            let hideDivIng = document.getElementById(
              `hide${value.toLocaleLowerCase()}`
            );
            hideDivIng.remove();
            const filteredRecipes = filterByTag(recipeList);
            displayCards(filteredRecipes);

            const ingList = generateIngredients(filteredRecipes);
            displayIngredients(ingList);
            ingredientsSearch(filteredRecipes, ingList);
            ingredientType(filteredRecipes);
          });
        });
      }
    });
  });
}

export function displayIngredients(ingList) {
  const ingredientsList = ingList
    .map(
      (ingredient) =>
        `<span class="ingredients" data-ingredient="${ingredient}">${ingredient}</span>`
    )
    .join("");
  ingredientsContent.innerHTML = ingredientsList;
}

export function ingredientsSearch(recipeList, ingList) {
  const ingINPUT = (e) => {
    const inputSearchIngredients = e.target.value.toLocaleLowerCase();
    ingList = generateIngredients(recipeList);
    const filtIng = ingList.filter((ing) =>
      ing.includes(inputSearchIngredients)
    );
    displayIngredients(filtIng);
    ingredientType(recipeList);
  };

  const searchAppareils = document.getElementById("inputIngredients");
  const old_element = searchAppareils;
  const new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);

  new_element.addEventListener("input", ingINPUT);
}

function filterRecipesByIngredientTag(recipeList, tag) {
  const filteredRecipes = recipeList.filter((recipe) => {
    return recipe.ingredients.some(
      (ing) => ing.ingredient.toLowerCase() === tag.textContent.toLowerCase()
    );
  });

  return filteredRecipes;
}

function filterByTag(recipeList) {
  const allSpan = [...document.querySelectorAll(".selected-filters span")];

  let filteredRecipes = [...recipeList];
  allSpan.forEach((span) => {
    switch (span.dataset.type) {
      case "ing":
        filteredRecipes = filterRecipesByIngredientTag(filteredRecipes, span);
        break;
      case "app":
        filteredRecipes = filterRecipesByAppareilTag(filteredRecipes, span);
        break;
      case "ust":
        filteredRecipes = filterRecipesByUstensilTag(filteredRecipes, span);
        break;
    }
  });
  return filteredRecipes;
}
