"use strict"

const getMoreQuotesButton = document.getElementById('getMoreQuotes');
getMoreQuotesButton.addEventListener('click', function(e){
    e.preventDefault();
    updateChuckSays();
});

async function updateChuckSays() {
    const chuckSays = document.getElementById('chuckSays');

    const response = await getWithAwait('https://api.chucknorris.io/jokes/random?category=dev');
    chuckSays.innerHTML = response.value;

    // get('https://api.chucknorris.io/jokes/random?category=dev')
    // .then((response) => {
    //     chuckSays.innerHTML = response;
    // });
}
