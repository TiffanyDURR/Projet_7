export function styles () {

// let removeIngredientTag = document.querySelector(".ingClose");
// let tagIngredientDIV = document.querySelector(".ingredients-selected");
let ingDownChevron = document.querySelector("i.fas.fa-chevron-down.ingDownChevron");
let appDownChevron = document.querySelector("i.fas.fa-chevron-down.appDownChevron");
let ustDownChevron = document.querySelector("i.fas.fa-chevron-down.ustDownChevron");

let ingUpChevron = document.querySelector("i.fas.fa-chevron-up.ingUpChevron");
let appUpChevron = document.querySelector("i.fas.fa-chevron-up.appUpChevron");
let ustUpChevron = document.querySelector("i.fas.fa-chevron-up.ustUpChevron");

let inputIngredientStyle = document.getElementById("inputIngredients");
let inputAppareilStyle = document.getElementById("inputAppareils");
let inputUstensilesStyle = document.getElementById("inputUstensiles");

let appareilsContainer = document.querySelector(".appareils-list");
let ingredientsContainer = document.querySelector(".filters-tags > div.ingredients-list");
let ustensilesContainer = document.querySelector(".ustensiles-list");

let ingredientsMainDiv = document.getElementById("ingredients")
let appareilsMainDiv = document.getElementById("appareils")
let ustensilesMainDiv = document.getElementById("ustensiles")

function removetags () {

// removeIngredientTag.addEventListener("click", () => {
    // tagIngredientDIV.style.display = "none";
//})

}
removetags();

function appareilsStyleTags () {
inputAppareilStyle.addEventListener("click", () => {

    ingredientsContainer.style.display = "none";
    ingDownChevron.style.display = "block";
    ingUpChevron.style.display = "none";
    ingredientsMainDiv.style.width = "200px";
    ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";

    ustensilesContainer.style.display = "none";
    ustDownChevron.style.display = "block";
    ustUpChevron.style.display = "none";
    ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";


inputAppareilStyle.addEventListener("input", (e) => {
    let inputAppareilValue = e.target.value;
    if (inputAppareilValue == null || inputAppareilValue == "") {
        appareilsContainer.style.display = "none";
        appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        appDownChevron.style.display = "block";
        appUpChevron.style.display = "none";
    } else {
        appareilsContainer.style.display = "flex";
        appareilsMainDiv.style.borderRadius = "6px 6px 0px 0px";
        appDownChevron.style.display = "none";
        appUpChevron.style.display = "block";
    }    
})
})
appDownChevron.addEventListener("click", () => {
    appDownChevron.style.display = "none";
    appUpChevron.style.display = "block";
    appareilsContainer.style.display = "flex";
    appareilsMainDiv.style.borderRadius = "6px 6px 0px 0px";

    ingredientsContainer.style.display = "none";
    ingDownChevron.style.display = "block";
    ingUpChevron.style.display = "none";
    ingredientsMainDiv.style.width = "200px";
    ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";

    ustensilesContainer.style.display = "none";
    ustDownChevron.style.display = "block";
    ustUpChevron.style.display = "none";
    ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
})

appUpChevron.addEventListener("click", () => {
    appDownChevron.style.display = "block";
    appUpChevron.style.display = "none";
    appareilsContainer.style.display = "none";
    appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";

    ingredientsContainer.style.display = "none";
    ingDownChevron.style.display = "block";
    ingUpChevron.style.display = "none";
    ingredientsMainDiv.style.width = "200px";
    ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";

    ustensilesContainer.style.display = "none";
    ustDownChevron.style.display = "block";
    ustUpChevron.style.display = "none";
    ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
})
}

appareilsStyleTags();


function ingredientsStyleTags () {
    inputIngredientStyle.addEventListener("click", () => {

        appareilsContainer.style.display = "none";
        appDownChevron.style.display = "block";
        appUpChevron.style.display = "none";
        appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
    
        ustensilesContainer.style.display = "none";
        ustDownChevron.style.display = "block";
        ustUpChevron.style.display = "none";
        ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
    })

    inputIngredientStyle.addEventListener("input", (e) => {
        let inputingredientValue = e.target.value;
        if (inputingredientValue == null || inputingredientValue == "") {
            ingredientsContainer.style.display = "none";
            ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";
            ingDownChevron.style.display = "block";
            ingUpChevron.style.display = "none";
            ingredientsMainDiv.style.width = "200px";
        } else {
            ingredientsContainer.style.display = "flex";
            ingredientsMainDiv.style.borderRadius = "6px 6px 0px 0px";
            ingDownChevron.style.display = "none";
            ingUpChevron.style.display = "block";
            ingredientsMainDiv.style.width = "669px";
        }    
    })

    ingDownChevron.addEventListener("click", () => {
        ingDownChevron.style.display = "none";
        ingUpChevron.style.display = "block";
        ingredientsContainer.style.display = "flex";
        ingredientsMainDiv.style.borderRadius = "6px 6px 0px 0px";
        ingredientsMainDiv.style.width = "669px";

        appareilsContainer.style.display = "none";
        appDownChevron.style.display = "block";
        appUpChevron.style.display = "none";
        appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
    
        ustensilesContainer.style.display = "none";
        ustDownChevron.style.display = "block";
        ustUpChevron.style.display = "none";
        ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
    })
    
    ingUpChevron.addEventListener("click", () => {
        ingDownChevron.style.display = "block";
        ingUpChevron.style.display = "none";
        ingredientsContainer.style.display = "none";
        ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        ingredientsMainDiv.style.width = "200px";

        appareilsContainer.style.display = "none";
        appDownChevron.style.display = "block";
        appUpChevron.style.display = "none";
        appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
    
        ustensilesContainer.style.display = "none";
        ustDownChevron.style.display = "block";
        ustUpChevron.style.display = "none";
        ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
    })
    }
    
    ingredientsStyleTags();


    function ustensilesStyleTags () {
        inputUstensilesStyle.addEventListener("click", () => {

            
    ingredientsContainer.style.display = "none";
    ingDownChevron.style.display = "block";
    ingUpChevron.style.display = "none";
    ingredientsMainDiv.style.width = "200px";
    ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";

    appareilsContainer.style.display = "none";
    appDownChevron.style.display = "block";
    appUpChevron.style.display = "none";
    appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        
            inputUstensilesStyle.addEventListener("input", (e) => {
            let inputustensileValue = e.target.value;
            if (inputustensileValue == null || inputustensileValue == "") {
                ustensilesContainer.style.display = "none";
                ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";
                ustDownChevron.style.display = "block";
                ustUpChevron.style.display = "none";
            } else {
                ustensilesContainer.style.display = "flex";
                ustensilesMainDiv.style.borderRadius = "6px 6px 0px 0px";
                ustDownChevron.style.display = "none";
                ustUpChevron.style.display = "block";
            }    
        })
        })
        ustDownChevron.addEventListener("click", () => {
            ustDownChevron.style.display = "none";
            ustUpChevron.style.display = "block";
            ustensilesContainer.style.display = "flex";
            ustensilesMainDiv.style.borderRadius = "6px 6px 0px 0px";

            ingredientsContainer.style.display = "none";
            ingDownChevron.style.display = "block";
            ingUpChevron.style.display = "none";
            ingredientsMainDiv.style.width = "200px";
            ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        
            appareilsContainer.style.display = "none";
            appDownChevron.style.display = "block";
            appUpChevron.style.display = "none";
            appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        })
        
        ustUpChevron.addEventListener("click", () => {
            ustDownChevron.style.display = "block";
            ustUpChevron.style.display = "none";
            ustensilesContainer.style.display = "none";
            ustensilesMainDiv.style.borderRadius = "6px 6px 6px 6px";

            ingredientsContainer.style.display = "none";
            ingDownChevron.style.display = "block";
            ingUpChevron.style.display = "none";
            ingredientsMainDiv.style.width = "200px";
            ingredientsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        
            appareilsContainer.style.display = "none";
            appDownChevron.style.display = "block";
            appUpChevron.style.display = "none";
            appareilsMainDiv.style.borderRadius = "6px 6px 6px 6px";
        })
        }
        
        ustensilesStyleTags();
        

    }
