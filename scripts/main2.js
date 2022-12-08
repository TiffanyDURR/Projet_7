// Logique de rendu en fonction de la recherche utilisateur.
export function mainSearch() {
  searchBar.addEventListener("input", (e) => {
    const inputSearchBar = e.target.value.toLowerCase();

    if (inputSearchBar.length >= 3) {
      filteredRecipes = data.filter((recipe) => {
        let ingredientsData = [];
        for (let i = 0; i < recipe.ingredients.length; i++) {
          let ingredientWay = recipe.ingredients[i].ingredient;
          ingredientsData.push(ingredientWay.toLocaleLowerCase());
        }
        return (
          recipe.name.toLocaleLowerCase().includes(inputSearchBar) ||
          recipe.description.toLocaleLowerCase().includes(inputSearchBar) ||
          ingredientsData.some((ing) => ing.includes(inputSearchBar))
        );
      });
      displayCards(filteredRecipes);

      /////////////////////////////
      appList = generateAppareils(filteredRecipes);
      displayAppareils(appList);
      appareilType(filteredRecipes);

      ustList = generateUstensils(filteredRecipes);
      displayUstensils(ustList);
      ustensilType(filteredRecipes);

      ingList = generateIngredients(filteredRecipes);
      displayIngredients(ingList);
      ingredientType(filteredRecipes);
      ////////////////////////////
    } else {
      filteredRecipes = [...recipes];
      displayCards(filteredRecipes);
    }
    if (filteredRecipes.length == 0) {
      cardsContent.innerHTML = `Aucune recette ne correspond à votre critère… vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
    }
  });
}
