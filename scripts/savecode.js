

for (let i = 1; i < recipes.length; i++)
{
  const ustensilsList = recipes[0].ustensils.concat([... new Set(recipes[i].ustentils)];
}


for (let i = 1; i < recipes.length; i++)
{
  recipes[0].ustensils = recipes[0].ustensils.concat([... new Set(recipes[i].ustentils)];
}


for (let i = 1; i < recipes.length; i++)
{
  recipes[0].ustensils = recipes[0].ustensils.concat([... new Set(recipes[i].ustentils)];
}

let noDuplicate = [ ... new Set(recipes[0].ustensils];

return (noDuplicate);

for (let i = 1; i < recipes.length; i++)
{
  recipes[0].ustensils = recipes[0].ustensils.concat(recipes[i].ustentils);
}

let noDuplicate = [ ... new Set(recipes[0].ustensils];

return (noDuplicate);


let listUstensils = recipes[0].ustensils;

for (let i = 1; i < recipes.length; i++)
{
  listUstensils = listUstensils.concat(recipes[i].ustentils);
}

let noDuplicate = [ ... new Set(listUstensils];

return (noDuplicate);


let listUstensils = recipes[0].ustensils.slice();

for (let i = 1; i < recipes.length; i++)
{
  listUstensils.push(recipes[i].ustentils);
}

let noDuplicate = [ ... new Set(listUstensils];

return (noDuplicate);

let listUstensils = recipes[0].ustensils.slice();

for (let i = 1; i < recipes.length; i++)
{
  listUstensils.push(...recipes[i].ustentils);
}

let noDuplicate = [ ... new Set(listUstensils];

return (noDuplicate);


let listUstensils = recipes[0].ustensils.slice();

for (let i = 1; i < recipes.length; i++)
{
    for (let j = 0 ;j < recipes[i].ustensils.length;j++)
    {
      listUstensils.push(recipes[i].ustentils[j]);
    }
}

let noDuplicate = [ ... new Set(listUstensils];

return (noDuplicate);

export function generateIngredients(recipes) {
  let listIngredients = recipes[0].ingredients.slice();
  console.log(listIngredients)
  for (let i = 0; i < recipes.length; i++)
  {
      for (let j = 0 ;j < recipes[i].ingredients.length; j++)
      {
        listIngredients.push(recipes[i].ingredients[j].ingredient);
      }
  }
  let noDuplicate = [ ... new Set(listIngredients)];
  return (noDuplicate);
}

export function generateIngredients(recipes) {
    let listIngredients = recipes[0].ingredients.slice();
    console.log(listIngredients)
    for (let i = 0; i < recipes.length; i++)
    {
        for (let j = 0 ;j < recipes[i].ingredients.length; j++)
        {
          listIngredients.push(recipes[i].ingredients[j].ingredient);
        }
    }
    let noDuplicate = [ ... new Set(listIngredients)];
    return (noDuplicate);
}


export function generateIngredients(recipes) {
  let listIngredients = [];
  
  for (let i = 0; i < recipes.length; i++)
  {
      for (let j = 0 ;j < recipes[i].ingredients.length; j++)
      {
        listIngredients.push(recipes[i].ingredients[j].ingredient);
      }
  }
  let noDuplicate = [ ... new Set(listIngredients)];
  return (noDuplicate);
}

