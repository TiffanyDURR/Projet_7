import {recipes} from "../data/recipes.js"
const appareilsList = document.querySelector(".appareils-list");
const inputAppareils = document.getElementById("inputAppareils");
const ingredientsList = document.querySelector(".ingredients-list");
// const inputIngredients = document.getElementById("inputIngredients");
const ustensilesList = document.querySelector(".ustensiles-list");
// const inputUstensiles = document.getElementById("inputUstensiles");
const ingredientTagAdd = document.querySelector(".ingredients-selected > span");


// Appareil --------------------------------------------------------------------------------------------------------------------------------------
function appareilsListDisplay() {
    appareilsList.innerHTML = recipes

    .filter((recipe) => 
        recipe.appliance.toLocaleLowerCase().includes(inputAppareils.value.toLocaleLowerCase()))

    .map ((recipe) => {
        
        let appareilsDataAll = []; 
        let appareilsWay = recipe.appliance;
        appareilsDataAll.push(`
            <span id="${recipe.id}appareil">${appareilsWay}</span>
            `);

        appareilsList.addEventListener("click", (e) => {
            console.log(e.target.id);
        })

return `
                ${appareilsDataAll.join("")}
`
}
    ).join("");
}

appareilsListDisplay();

inputAppareils.addEventListener("input", appareilsListDisplay);
// Ingrédients --------------------------------------------------------------------------------------------------------------------------------------

function ingredientsListDisplay() {

    recipes.map ((recipe) => {
        let ingredientsDataAll = []; 
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let ingredientWay = recipe.ingredients[i].ingredient;
            let ingredientID = ingredientWay;
            ingredientID = ingredientID.toLocaleLowerCase();
            ingredientID = ingredientID.replace(/[^a-zA-Z0-9_-]/g,'');
            ingredientsDataAll.push(`<span id="${ingredientID}">${ingredientWay}</span>`);
        }
        ingredientsList.innerHTML += `${ingredientsDataAll.join("")}`
}
    )
}

ingredientsListDisplay();

// Ustensiles --------------------------------------------------------------------------------------------------------------------------------------

function ustensilesListDisplay() {
    ustensilesList.innerHTML = recipes



    .map ((recipe) => {
        let ustensilesDataAll = []; 
        let ustensilesWay = recipe.ustensils;
        ustensilesDataAll.push(`
            <span id="${recipe.id}ustensiles">${ustensilesWay}</span>
            `);

        ustensilesList.addEventListener("click", (e) => {
         console.log(e.target.id);
        })

return `
                ${ustensilesDataAll.join("")}
`
}
    ).join("");
}

ustensilesListDisplay();
