import {recipes} from "../data/recipes.js"
import {displayCards} from "./main.js";
let data = [];
data = recipes;

const appareilsContent = document.querySelector(".appareils-list");
const searchAppareils = document.getElementById("inputAppareils");
const ingredientsList = document.querySelector(".ingredients-list");
const inputIngredients = document.getElementById("inputIngredients");
const ustensilesList = document.querySelector(".ustensiles-list");
const inputUstensiles = document.getElementById("inputUstensiles");
const ingredientTagAdd = document.querySelector(".ingredients-selected > span");

export function filters () {

    function initFilters () {
displayAppareils(recipes); 
appareilsSearch();
    }

    initFilters();

    function displayAppareils(recipes) {
        const appareilsList = 
        recipes.map ((recipe) => {
            let appareilsData = []; 
            appareilsData = [... new Set(appareilsData)]
            console.log(appareilsData)
            let appareilsWay = recipe.appliance;
            appareilsData.push(`<span data-appareil="${recipe.appliance}">${appareilsWay}</span>`)
            return appareilsData
        }
        ).join("");
        appareilsContent.innerHTML = appareilsList;
    }

    function appareilsSearch () {
        searchAppareils.addEventListener("input", (e) => {
            const inputSearchAppareils = e.target.value.toLowerCase();
            const filteredAppareilsTag = data
            .filter((recipe) => {
                return (
                    recipe.appliance.toLocaleLowerCase().includes(inputSearchAppareils)
                );
            });
            displayAppareils(filteredAppareilsTag);
            // displayCards(filteredAppareilsTag);
        })
        }
    
        
    
    



} // Fin export filters


