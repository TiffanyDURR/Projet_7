import {recipes} from "../data/recipes.js"
import {displayCards} from "./main.js";
let data = [];
data = recipes;

const appareilsContent = document.querySelector(".appareils-list");
const searchAppareils = document.getElementById("inputAppareils");
const ingredientsContent = document.querySelector(".ingredients-list");
const searchIngredients = document.getElementById("inputIngredients");
const ustensilesList = document.querySelector(".ustensiles-list");
const searchUstensiles = document.getElementById("inputUstensiles");

export function filters () {

    function initFilters () {
displayAppareils(recipes); 
displayIngredients(recipes);
displayUstensiles(recipes);
appareilsSearch();
ingredientsSearch();
ustensilesSearch();
    }

    initFilters();

    function displayAppareils(recipes) {
        const appareilsList = 
        recipes.map ((recipe) => {
            let appareilsData = []; 
            let appareilsWay = recipe.appliance;
            appareilsData.push(`<span data-appareil="${recipe.appliance}">${appareilsWay}</span>`)
            return appareilsData
        }).join("");
        appareilsContent.innerHTML = appareilsList;
    }

    function displayIngredients(recipes) {
        const ingredientsList = 
        recipes.map((recipe) => {
                let ingredientsData = []; 
                for (let i = 0; i < recipe.ingredients.length; i++) {
                    let ingredientWay = recipe.ingredients[i].ingredient;
                    ingredientsData.push(`<span data-ingredient="${ingredientWay}">${ingredientWay}</span>`);
                }
                return `
                        ${ingredientsData.join("")}
            `;
            })
            .join('');
            ingredientsContent.innerHTML = ingredientsList;
    }

    function displayUstensiles(recipes) {
        ustensilesList.innerHTML = 
        recipes.map ((recipe) => {
            let ustensilesData = []; 
            let ustensilesWay = recipe.ustensils;
            ustensilesData.push(`
                <span data-ustensiles="${ustensilesWay}">${ustensilesWay}</span>
                `);
    return `${ustensilesData.join("")}`
}
        ).join("");
    }
    
    function appareilsSearch () {
        searchAppareils.addEventListener("input", (e) => {
            const inputSearchAppareils = e.target.value.toLowerCase();
            const filteredAppareilsTag = 
            data.filter((recipe) => {
                return (
                    recipe.appliance.toLocaleLowerCase().includes(inputSearchAppareils)
                );
            });
            displayAppareils(filteredAppareilsTag);
            displayCards(filteredAppareilsTag);
        })
        }

        function ingredientsSearch() {
            searchIngredients.addEventListener("input", (e) => {
                const inputSearchIngredients = e.target.value.toLowerCase();
                const filteredIngredientsTag = 
                data.filter((recipe) => {
                    for (let i = 0; i < recipe.ingredients.length; i++) {
                        let ingredientWay = recipe.ingredients[i].ingredient;
                        return (
                            ingredientWay.toLocaleLowerCase().includes(inputSearchIngredients)
                        );
                    }
                });
                displayIngredients(filteredIngredientsTag);
                displayCards(filteredIngredientsTag);
            })
        }

        function ustensilesSearch () {
            searchUstensiles.addEventListener("input", (e) => {
                const inputSearchUstensiles = e.target.value.toLowerCase();
                const filteredUstensilesTag = 
                data.filter((recipe) => {
                    return (
                        recipe.ustensils.toLocaleLowerCase().includes(inputSearchUstensiles)
                    );
                });
                displayAppareils(filteredUstensilesTag);
                displayCards(filteredUstensilesTag);
            })
            }

} // Fin export filters


