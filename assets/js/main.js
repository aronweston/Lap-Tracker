
const swim = new Swim; 

//Swim App
const submit = document.querySelector("#submit");
const form = document.querySelector("#swim-data");
const output = document.querySelector("#output");
const del = document.querySelector("a");

//Event listeners
function listeners() {
    document.body.addEventListener("click", swim.removeSwimData());
    document.addEventListener("DOMContentLoaded", swim.getSwimData());
    submit.addEventListener("click", swim.addSwimData());
}
listeners();














