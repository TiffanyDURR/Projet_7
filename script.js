let recipesData = [];

async function getRecipes () {
    await fetch ("data/recipes.js")
    .then((res) => res.json())
    .then((data) => (recipesData = data.recipes))
    }
    
    async function displayRecipes () {
    await getRecipes();
    const main = document.querySelector("main"); 
    main.innerHTML = recipesData.map((recipe) => 
    `
        <article class="recipe-card">
            <figure></figure>
            <div class="recipe-card-content">
                <div class="card-header">
                    <h2>${recipe.name}</h2>
                    <span class="recipe-time">
                        <i class="far fa-clock"></i>
                    </span>
                </div>
                <div class="recipe-content">
                    <div class="recipe-ingredients">
                        <b></b>
                    </div>
                    <div class="recipe-description">
                    </div>
                </div>
            </div>
        </article>
    `)
    .join("");
    }   
    
    displayRecipes();