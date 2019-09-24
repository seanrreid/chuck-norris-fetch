"use strict";

const chuckQuotesForm = document.querySelector("#chuckQuotesForm");

chuckQuotesForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const categoryValue = chuckQuotesForm.querySelector("select").value;
    updateChuckSays(categoryValue);
});

function updateChuckSays(category) {
    const chuckSays = document.getElementById("chuckSays");

    get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(
        response => {
            chuckSays.innerHTML = response.value;
        }
    );
}

function getCategories() {
    const selectWrapper = document.querySelector("#selectWrapper");
    const categoryList = document.createElement("select");

    get(`https://api.chucknorris.io/jokes/categories`).then(function(response) {
        response.forEach(function(category) {
            const categoryOption = document.createElement("option");
            categoryOption.text = category;
            categoryOption.value = category;

            if (category !== "explicit") {
                categoryList.append(categoryOption);
            }
        });
    });
    selectWrapper.append(categoryList);
}

// Create an IMMEDIATELY INVOKED FUNCTION EXPRESSION, IIFE
(function() {
    const defaultCategory = "dev";
    getCategories();
    updateChuckSays(defaultCategory);
})();
