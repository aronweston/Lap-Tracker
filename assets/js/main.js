
const submit = document.querySelector("#submit");
const form = document.querySelector("#swim-data");
const output = document.querySelector("#output");
const del = document.querySelector(".remove");

//Event listeners
eventListeners()
function eventListeners() {
    submit.addEventListener("click", addSwimData);
    document.addEventListener("DOMContentLoaded", getSwimData);
    del.addEventListener("click", deleteSwimData);
}

//Date
const newDate = new Date();
let month = newDate.getMonth() + 1;
let day = newDate.getDate();
let year = newDate.getFullYear();

//Variables
const date = `${day}/${month}/${year}`;
const laps = document.querySelector("#laps");
const notes = document.querySelector("#notes");


function storeSwimData(a) {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }
    data.push(a);
    localStorage.setItem('data', JSON.stringify(data));
}

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


    console.log(tr);
    
    output.appendChild(tr);

    let input = [date, laps.value, notes.value];
    //     "Date": date,
    //     "Laps": laps.value,
    //     "Notes": notes.value
    
        
    storeSwimData(input);
}


function getSwimData() {
    let data;
    if (localStorage.getItem("data") === null) {
        data = [];
    } else {
      data = JSON.parse(localStorage.getItem("data"));
    }
    //loop through the tasks
    data.forEach(function (data) {

        // Date
        let dateTD = document.createElement('td');
        dateTD.className ='data-date';
        dateTD.appendChild(document.createTextNode(date));

        //Laps
        let lapsTD = document.createElement('td');
        lapsTD.className ='data-laps';
        lapsTD.appendChild(document.createTextNode(laps));
        
        //Notes
        let notesTD = document.createElement('td');
        notesTD.className ='data-notes';
        notesTD.appendChild(document.createTextNode(notes));

        //Table row
        const tr = document.createElement('tr');
        tr.className = 'data-content';
        tr.appendChild(dateTD);
        tr.appendChild(lapsTD);
        tr.appendChild(notesTD);
        output.appendChild(tr);
    });
}


function deleteSwimData() {
    
    
}