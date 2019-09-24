"use strict";

const chuckForm = document.querySelector("#chuckQuotesForm");

function updateChuckSays(category) {
    const chuckSays = document.getElementById("chuckSays");

    get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(
        function(response) {
            chuckSays.innerHTML = response.value;
        }
    );
}

function getChuckCategories() {
    const chuckCategorySelect = document.createElement("select");

    const inputWrapper = chuckForm.querySelector("#categorySelect");

    inputWrapper.append(chuckCategorySelect);

    get("https://api.chucknorris.io/jokes/categories").then(function(response) {
        response.map(function(category) {
            let categoryOption = document.createElement("option");
            categoryOption.text = category;
            categoryOption.value = category;
            chuckCategorySelect.append(categoryOption);
        });
    });
}

// Immediately invoked Function...
(function() {
    chuckForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const categoryValue = this.querySelector("select").value;
        updateChuckSays(categoryValue);
    });

    getChuckCategories();
    updateChuckSays("dev");
})();
