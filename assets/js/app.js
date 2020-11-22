//Swim App
const submit = document.querySelector("#submit");
const form = document.querySelector("#swim-data");
const output = document.querySelector("#output");
const del = document.querySelector("a");

const swim = new Swim;


//Event listeners
function listeners() {
    document.body.addEventListener("click", removeSwimData);
    document.addEventListener("DOMContentLoaded", getSwimData);
    submit.addEventListener("click", addSwimData);
}
listeners();
















