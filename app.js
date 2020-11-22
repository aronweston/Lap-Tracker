class Swim {
    constructor() {
        //calculations
        this.newDate = new Date();
        this.month = this.newDate.getMonth() + 1;
        this.day = this.newDate.getDate();
        this.year = this.newDate.getFullYear();

        //inputs
        this.date = `${this.day}/${this.month}/${this.year}`;
        this.laps = document.querySelector("#laps");
        this.feeling = document.querySelector("#feeling");
    }
}

const swim = new Swim();

class UI {
    addSwim() {
        const output = document.querySelector("#output");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="#" class="removeew2">Remove</a></td>
            <td>${swim.date}</td>
            <td>${swim.laps.value}</td>
            <td>${swim.feeling.value}</td>
            `;
        output.appendChild(row);
    }

    storeSwim() {
        //Data object
        let dataObj = {
            date: swim.date,
            laps: swim.laps.value,
            feeling: swim.feeling.value
        }
        //Validation and persistence to LS
        let data;
        if (localStorage.getItem("data") === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem("data"));
        }
        data.push(dataObj);
        localStorage.setItem('data', JSON.stringify(data));
    }  
    
    alert(msg, className) {
        const nav = document.querySelector('.navbar');
        const top = document.querySelector('.top');
        const div = document.createElement("div");
        div.className = className;
        div.innerHTML = msg;
        nav.insertBefore(top, div);
    }
}



//Submit
document.getElementById("swim-data").addEventListener("submit", (e) => {
    e.preventDefault();
    const ui = new UI();
    const swim = new Swim();
    //validation
    if (swim.laps.value === '' || swim.feeling.selectedIndex === null) {
        alert("stop")
        // ui.alert();
        // setTimeout(function () {
        //     ui.alert("Error: one or more fields are empty", "alert alert-danger");
        // }, 2000)
    } else {
        // setTimeout(function () {
        //     ui.alert("Data added!", "alert alert-success");
        // },2000)
        ui.addSwim();
        ui.storeSwim();
    }
});








// getSwimData() {
//     let data;
//     if (localStorage.getItem("data") === null) {
//         data = [];
//     } else {
//     data = JSON.parse(localStorage.getItem("data"));
//     }

//     //loop through the tasks
//     data.forEach(function (dataObj) {

//         //Remove 
//         let remove = document.createElement('td');
//         remove.className = 'data-remove';
//         let link = document.createElement('a')
//         link.setAttribute("href", "#");
//         link.className = 'remove';
//         link.appendChild(document.createTextNode("Delete"));
//         remove.appendChild(link);

//         // Date
//         let dateTD = document.createElement('td');
//         dateTD.className ='data-date';
//         dateTD.appendChild(document.createTextNode(dataObj.date));

//         //Laps
//         let lapsTD = document.createElement('td');
//         lapsTD.className ='data-laps';
//         lapsTD.appendChild(document.createTextNode(dataObj.laps));
        
//         //Notes
//         let notesTD = document.createElement('td');
//         notesTD.className ='data-notes';
//         notesTD.appendChild(document.createTextNode(dataObj.notes));

//         //Table row
//         const tr = document.createElement('tr');
//         tr.className = 'data-content';
//         tr.appendChild(remove);
//         tr.appendChild(dateTD);
//         tr.appendChild(lapsTD);
//         tr.appendChild(notesTD);
//         output.appendChild(tr);
//     });
// }


// removeSwimData(e) {

//     let el = e.target.parentElement.parentElement;

//     if (e.target.parentElement.classList.contains("data-remove"
//     )) {
//         el.remove();
//         removeLS(el);
//     }    
// } 

// removeLS(row) {
//     console.log(row);

//     let data;

//     if (localStorage.getItem("data") === null) {
//         data = [];
//     } else {
//     data = JSON.parse(localStorage.getItem("data"));
//     }

//     data.forEach(function (info, index) {
//         if (row.textContent === info) {
//             data.splice(index, 1)
//         }
//     });
//     localStorage.setItem('data', JSON.stringify(data));
// }

//Event listeners
// document.body.addEventListener("click", ui.removeSwimData());
// document.addEventListener("DOMContentLoaded", ui.getSwimData());



