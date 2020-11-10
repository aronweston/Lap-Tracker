
//Swim App

const submit = document.querySelector("#submit");
const form = document.querySelector("#swim-data");
const output = document.querySelector("#output");
const del = document.querySelector("a");

//Event listeners
function listeners() {
    document.addEventListener("DOMContentLoaded", getSwimData);
    submit.addEventListener("click", addSwimData);
}
listeners();

//Date
const newDate = new Date();
let month = newDate.getMonth() + 1;
let day = newDate.getDate();
let year = newDate.getFullYear();

//Variables
const date = `${day}/${month}/${year}`;
const laps = document.querySelector("#laps");
const notes = document.querySelector("#notes");




//Add Swim Data to DOM
function addSwimData(e) {
    e.preventDefault();
    //Remove 
        let remove = document.createElement('td');
        remove.className = 'data-remove';

        let link = document.createElement('a')
        link.setAttribute("href", "#");
        link.className = 'remove';
        link.appendChild(document.createTextNode("Delete"));

        remove.appendChild(link);
    
    // Date
    let dateTD = document.createElement('td');
        dateTD.className ='data-date';
        dateTD.appendChild(document.createTextNode(date));

    //Laps
    let lapsTD = document.createElement('td');
        lapsTD.className ='data-laps';
        lapsTD.appendChild(document.createTextNode(laps.value));
    
    //Notes
    let notesTD = document.createElement('td');
        notesTD.className ='data-notes';
        notesTD.appendChild(document.createTextNode(notes.value));

    //Table row
    const tr = document.createElement('tr');
    tr.className = 'data-content';
    tr.appendChild(remove)
    tr.appendChild(dateTD);
    tr.appendChild(lapsTD);
    tr.appendChild(notesTD);
    
    output.appendChild(tr);

    //Store data as an object 
    let dataObj = {
        date: date,
        laps: laps.value,
        notes: notes.value
    }
    //LS the object
    storeSwimData(dataObj);

    remove.addEventListener("click", removeSwimData);
}

//Remove each 
function removeSwimData(e) {
    if (e.target.classList = "data-content") {
        e.target.parentElement.remove();
    }
    removeLS(e.target.parentElement.parentElement);
}


//Store in local storage 
function storeSwimData(dataObj) {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }

    data.push(dataObj);
    
    localStorage.setItem('data', JSON.stringify(data));
}



function getSwimData() {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }

    //loop through the tasks
    data.forEach(function (dataObj) {

        //Remove 
        let remove = document.createElement('td');
        remove.className = 'data-remove';
        let link = document.createElement('a')
        link.setAttribute("href", "#");
        link.className = 'remove';
        link.appendChild(document.createTextNode("Delete"));
        remove.appendChild(link);

        // Date
        let dateTD = document.createElement('td');
        dateTD.className ='data-date';
        dateTD.appendChild(document.createTextNode(dataObj.date));

        //Laps
        let lapsTD = document.createElement('td');
        lapsTD.className ='data-laps';
        lapsTD.appendChild(document.createTextNode(dataObj.laps));
        
        //Notes
        let notesTD = document.createElement('td');
        notesTD.className ='data-notes';
        notesTD.appendChild(document.createTextNode(dataObj.notes));

        //Table row
        const tr = document.createElement('tr');
        tr.className = 'data-content';
        tr.appendChild(remove);
        tr.appendChild(dateTD);
        tr.appendChild(lapsTD);
        tr.appendChild(notesTD);
        output.appendChild(tr);
    });
}


function removeLS() {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }

    data.forEach(function (dataObj, index) {
        if (dataObj.textContent === input) {
            data.splice(index, 1)
        }
    });

    localStorage.setItem('data', JSON.stringify(data));

}




