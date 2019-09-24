"use strict";

const getMoreQuotesButton = document.getElementById("getMoreQuotes");
getMoreQuotesButton.addEventListener("click", function(e) {
    e.preventDefault();
    updateChuckSays();
});

function updateChuckSays() {
    const chuckSays = document.getElementById("chuckSays");

    get("https://api.chucknorris.io/jokes/random?category=dev").then(
        response => {
            chuckSays.innerHTML = response;
        }
    );
}
updateChuckSays();
