
class Swim {
    constructor() {
        this.newDate = new Date();
        this.month = newDate.getMonth() + 1;
        this.day = newDate.getDate();
        this.year = newDate.getFullYear();

        //Variables
        this.date = `${day}/${month}/${year}`;
        this.laps = document.querySelector("#laps");
        this.notes = document.querySelector("#notes"); 
    }
    
    addSwimData(e) {
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
    
        output.insertBefore(tr, output.children[1]);

        //Store data as an object
        let dataObj = {
            date: this.date,
            laps: this.laps.value,
            notes: this.notes.value
        }
        //LS the object
        storeSwimData(dataObj);

    }

    getSwimData() {
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


    removeSwimData(e) {
        let el = e.target.parentElement.parentElement;

        if (e.target.parentElement.classList.contains("data-remove"
        )) {
            el.remove();
            removeLS(el);
        }    
    } 

    storeLS(dataObj) {
        let data;
        if (localStorage.getItem("data") === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem("data"));
        }
        data.push(dataObj);
        localStorage.setItem('data', JSON.stringify(data));
    }

    removeLS(row) {
        console.log(row);

        let data;

        if (localStorage.getItem("data") === null) {
            data = [];
        } else {
        data = JSON.parse(localStorage.getItem("data"));
        }

        data.forEach(function (info, index) {
            if (row.textContent === info) {
                data.splice(index, 1)
            }
        });
        localStorage.setItem('data', JSON.stringify(data));
    }

    
}






