import {recipes} from "../data/recipes.js"
const cardsContent = document.querySelector(".cards-content");

let recipesDataAll = [];
recipesDataAll = recipes;
// console.log(clientsDataAll);

function cardsDisplay() {
    cardsContent.innerHTML = recipes.map ((recipe) => {
        let ingredientsDataAll = []; 
        let quantityDataAll = []; 
        let unitDataAll = [];  
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let ingredientWay = recipe.ingredients[i].ingredient;
            let quantityWay = recipe.ingredients[i].quantity;
            let unitWay = recipe.ingredients[i].unit;
            if (typeof quantityWay == "undefined") {
                quantityWay = "";
            }
            if (typeof unitWay == "undefined") {
                unitWay = "";
            }
            console.log(unitWay.length)
            ingredientsDataAll+unitDataAll+quantityDataAll.push(`
            <span><b>${ingredientWay}</b> <span class="deuxpoints">:</span> ${quantityWay} ${unitWay}<br/></span>
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
                ${ingredientsDataAll.join("")} ${quantityDataAll.join("")} ${unitDataAll.join("")}
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

