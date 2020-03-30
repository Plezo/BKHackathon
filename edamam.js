const request = require('request');
const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

// const appID = process.env.appID;
// const appKey = process.env.appKey;
const appID = "c856ec57";
const appKey = "7a69236db1f335f353aa31871a4d566c";

// Used for each recipe result
const resultsTemplate =
{
    imageURL : "",
    recipeURL : "",
    name : "",
    ingredients : []
}

// Used for each ingredient in the results
const ingredientsTemplate =
{
    food : "",
    quantity : "",
    measure : ""
}

let edamam = function()
{
    const input = arguments[0];

    // Queries based on users preferences
    const query = 
    {
        cuisineType : input.cuisineType,
        protein : input.proteinType,
        diet : input.dietType,
        health : input.healthType
    };

    // API used to retrieve data from recipes based on specified queries
    const apiURL = `https://api.edamam.com/search?q=${query.protein}&app_id=${appID}&app_key=${appKey}&cuisineType=${query.cuisineType}&diet=${query.diet}&health=${query.health}`;

    var opts =
    {
        uri: apiURL,
        json: true
    }

    request(opts, function (error, response, header)
    {
        let results = [];

        // Fills out recipe object with image, recipe, name
        for (let i = 0; i < 9; i++)
        {
            var tempResults = Object.create(resultsTemplate)
            const recipe = header.hits[i].recipe;

            tempResults.imageURL = recipe.image;
            tempResults.recipeURL = recipe.shareAs;
            tempResults.name = recipe.label;

            // Fills out ingredients in the recipe object
            for (let ings = 0; ings < header.hits[i].recipe.ingredients.length; ings++)
            {
                var tempIngs = Object.create(ingredientsTemplate)
                const ingredient = header.hits[i].recipe.ingredients[ings]; 

                tempIngs.food = ingredient.food;
                tempIngs.quantity = ingredient.quantity;
                tempIngs.measure = ingredient.measure;

                tempResults.ingredients[ings] = tempIngs;
            }
            results[i] = tempResults;
            results[i].ingredients = tempResults.ingredients;
        }
        
    });

    return results;
}

module.exports = edamam;