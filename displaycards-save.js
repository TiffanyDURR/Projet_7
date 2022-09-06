import {recipes} from "../data/recipes.js"
// Récupère les données de RECIPES.JS.
const cardsContent = document.querySelector(".cards-content");
// Element du DOM contenant toutes les cartes des recettes.

// Logique de recherche pour la recherche principale.
function mainSearch () {
const mainSearchInput = document.getElementById("mainSearchInput");

mainSearchInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    console.log(inputValue)
})
}

mainSearch();

// Logique d'affichage des cartes. 
function cardsDisplay() {
    // Affichage des cartes. 
    cardsContent.innerHTML = recipes.map ((recipe) => {
        // MAP de toutes les recettes dans le conteneur des cartes.
        let ingredientsDataAll = []; 
        let quantityDataAll = []; 
        let unitDataAll = [];  
        // Déclaration de variables qui vont contenir les éléments "ingredient", "unit" et "quantity" du fichier recipes.js.
        for (let i = 0; i < recipe.ingredients.length; i++) {
            // Tant que i a une valeur de 0, ajoute +1 à chaque tour tant que i n'est pas égal au total des éléments de chaque tableau "ingredients".
            let ingredientWay = recipe.ingredients[i].ingredient;
            let quantityWay = recipe.ingredients[i].quantity;
            let unitWay = recipe.ingredients[i].unit;
            // Chemin pour accéder aux éléments "ingredient", "unit" et "quantity".
            let stringifyUnitWay = JSON.stringify(unitWay);
            // Transforme les valeurs de "unit" en chaine de caractères.
  
            if (typeof unitWay == "string") {
                // Si "unit" est une chaine de caractères.
                unitWay = stringifyUnitWay.replace(/"grammes"/i,`gr`);
                unitWay = unitWay.replace(/"/g,"")
                // Remplace grammes par "gr" et remplace les guillemets par du un espace vide. 
            } 

            if (typeof quantityWay == "undefined") {
                // Si "quantity" est de type "undefined" (chaque élément du tableau ne contient pas forcément une unité).
                quantityWay = "";
                // Remplace "quantity" par un espace vide pour éviter l'affichage de "undefined" dans le DOM car l'élément n'existe pas. 
            } 
            if (typeof unitWay == "undefined") {
                unitWay = "";
            } 

            // Ajout des éléments "ingredient", "unit" et "quantity".
            ingredientsDataAll+unitDataAll+quantityDataAll.push(`
            <span class="ingredient-element"><b>${ingredientWay}</b> : ${quantityWay} <span class="unity">${unitWay}</span><br/></span>
            `);
        }

return `
    <article class="recipe-card">
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
                <p>${ingredientsDataAll.join("")} ${quantityDataAll.join("")} ${unitDataAll.join("")}</p>
            </div>
            <div class="recipe-description">
                <p>${recipe.description}</p>
            </div>
        </div>
    </div>
    </article>
`
}
    ).join("");
    // Remplace la virgule par un espace vide.
}

cardsDisplay();

// ---------------------------------------------------------------------------

import {recipes} from "../data/recipes.js"

const ingredientsList = document.querySelector(".ingredients-list");
const appareilList = document.querySelector(".appareils-list");
const inputIngredients = document.getElementById("inputIngredients");
const ingredientDIV = document.getElementById("ingredients");
const inputAppareils = document.getElementById("inputAppareils");
const appareilsDIV = document.getElementById("appareils");


// INGREDIENTS 

function ingredientsListDisplay() {

    recipes.map ((recipe) => {
        let ingredientsDataAll = []; 
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let ingredientWay = recipe.ingredients[i].ingredient;
            let ingredientID = ingredientWay;
            ingredientID = ingredientID.toLocaleLowerCase();
            ingredientID = ingredientID.replace(/[^a-zA-Z0-9_-]/g,'')
            ingredientsDataAll.push(`<span id="${ingredientID}">${ingredientWay}</span>`);
        }
        ingredientsList.innerHTML += `${ingredientsDataAll.join("")}`
}
    )
}

ingredientsListDisplay();

// APPAREILS

function appareilListDisplay() {

    ingredientDIV.innerHTML = recipes

    .map ((recipe) => {
        let appareilsWay = recipe.appliance;
        appareilList.innerHTML += `<span>${appareilsWay}</span>`

        return ``
    
}
    )
}

appareilListDisplay();

// ----------------------------------


function appareilsListDisplay() {

    recipes.filter((recipe) => {
        appareilsList.addEventListener("click", (e) => {
            console.log(e.target.id);
        })
        recipe.appliance.toLocaleLowerCase().includes(inputAppareils.value.toLocaleLowerCase())
    })

    recipes.map((recipe) => {
appareilsList.innerHTML += `<span id="${recipe.id}appareil">${recipe.appliance}</span>`
    })

}

appareilsListDisplay();

inputAppareils.addEventListener("input", appareilsListDisplay);
