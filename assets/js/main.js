
//Swim App 
//TODO'
//1. Get all input values to submit to the console
//2. 

(function () {
    let submit = document.querySelector("#submit");
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        //Def lets
        let today = new Date();
        let laps = document.querySelector("#laps").value;
        let notes = document.querySelector("#feeling").value; 
        let output = document.querySelector("#output");

        
        let table = output.innerHTML += `
        <tr class="data-content">
            <td class="data-date">${today}</td>
            <td class="data-laps">${laps}</td> 
            <td class="data-notes">${notes}</td>
        </tr>
        `
        output.firstElementChild.innerHTML = table;



    }, false);
})();
