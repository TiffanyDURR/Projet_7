import {recipes} from "../data/recipes.js"
const cardsContent = document.querySelector(".cards-content");

let recipesDataAll = [];
recipesDataAll = recipes;

function cardsDisplay() {
    cardsContent.innerHTML = recipes.map ((recipe) => {
        let ingredientsDataAll = []; 
        let quantityDataAll = []; 
        let unitDataAll = [];  
        let regexGrammes = /grammes/i;
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let ingredientWay = recipe.ingredients[i].ingredient;
            let quantityWay = recipe.ingredients[i].quantity;
            let unitWay = recipe.ingredients[i].unit;
            let stringifyUnitWay = JSON.stringify(unitWay);
  
            if (typeof unitWay == "string") {
                unitWay = stringifyUnitWay.replace(regexGrammes,`gr`);
                unitWay = unitWay.replace(/"/g,"")
            } 

            if (typeof quantityWay == "undefined") {
                quantityWay = "";
            } 
            if (typeof unitWay == "undefined") {
                unitWay = "";
            } 

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
}

cardsDisplay();

