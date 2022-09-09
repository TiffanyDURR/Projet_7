import {recipes} from "../data/recipes.js"
import {filters} from "./filters.js";
import {JSstyles} from "./styles.js";

const cardsContent = document.querySelector(".cards-content");
const searchBar = document.getElementById("mainSearchInput");
let data = [];
data = recipes;


// Initialisation de l'affichage des cartes.
function initCards () {
    window.addEventListener("load", () => {
    displayCards(recipes);
    displayFilters();
    JSstyles();
    mainSearch();
    })
    }
    initCards();

// Logique d'affichage des cartes.
function displayCards(recipes) {
    const recipesData = 
    recipes.map((recipe) => {
            let ingredientsData = []; 
            let quantityData = []; 
            let unitData = [];  
            for (let i = 0; i < recipe.ingredients.length; i++) {
                let ingredientWay = recipe.ingredients[i].ingredient;
                let quantityWay = recipe.ingredients[i].quantity;
                let unitWay = recipe.ingredients[i].unit;
                let stringifyUnitWay = JSON.stringify(unitWay);
                if (typeof unitWay == "string") {
                    unitWay = stringifyUnitWay.replace(/"grammes"/i,`gr`);
                    unitWay = unitWay.replace(/"/g,"")
                } 
                ingredientsData+unitData+quantityData.push(`
                <span class="ingredient-element"><b>${ingredientWay}</b> : ${quantityWay || ""} <span class="unity">${unitWay || ""}</span><br/></span>
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
                    <p>${ingredientsData.join("")} ${quantityData.join("")} ${unitData.join("")}</p>
                </div>
                <div class="recipe-description">
                    <p>${recipe.description}</p>
                </div>
            </div>
        </div>
        </article>
        `;
        })
        .join('');
        cardsContent.innerHTML = recipesData;
}

// Logique de rendu en fonction de la recherche utilisateur.
function mainSearch () {
    searchBar.addEventListener("input", (e) => {
        const inputSearchBar = e.target.value.toLowerCase();
        const filteredRecipes = data.filter((recipe) => {
            return (
                recipe.name.toLocaleLowerCase().includes(inputSearchBar) ||
                recipe.description.toLocaleLowerCase().includes(inputSearchBar) 
            );
        });
        displayCards(filteredRecipes);
    })
    }

    

