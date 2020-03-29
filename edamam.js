const request = require('request');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));

// Queries based on users preferences
const query = 
[
    mealType = "",
    cuisineType = "",
    protein = "",
    time = "",
    diet = "",
    calories = "",
    health = ""
];

// Used for each recipe result
const resultsTemplate =
{
    imageURL = "",
    recipeURL = "",
    name = "",
    ingredients = []
}

// Used for each ingredient in the results
const ingredientsTemplate =
{
    food = "",
    quantity = "",
    measure = ""
}

// API used to retrieve data from recipes based on specified queries
const apiURL = `https://api.edamam.com/search?q=${query.protein}&app_id=${config.appID}&app_key=${config.config.appKey}&
mealType=${query.mealType}&cuisineType=${query.cuisineType}&time=${query.time}&diet=${query.diet}&calories=${query.calories}&health=${query.health}`;

request 
({
    url: apiURL,
    json: true
}, async function (error, response, header)
{
    const results = [];

    // Fills out recipe object with image, recipe, name
    for (let i = 0; i < header.to; i++)
    {
        var tempResults = Object.create(resultsTemplate)
        const recipe = header.hits[i].recipe;

        tempResults.imageURL, tempResults.recipeURL, tempResults.name = recipe.image, recipe.shareAs, recipe.label;

        // Fills out ingredients in the recipe object
        for (let ings = 0; ings < header.hits[i].ingredients.length; ings++)
        {
            var tempIngs = Object.create(ingredientsTemplate)
            const ingredient = header.hits[i].recipe.ingredients[ings]; 

            tempIngs.food, tempIngs.quantity, tempIngs.measure = ingredient.food, ingredient.quantity, ingredient.measure;

            tempResults.ingredients[ings] = tempIngs;
        }
    }

    

})