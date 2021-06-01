// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
        let target = document.getElementById("target");
    let createTable = document.createElement("table");
    target.appendChild(createTable);
    
    let i = 0;
    while (i < 10){
        let x = i+1;
        let createRow = document.createElement("tr");
        target.children[0].appendChild(createRow);
        for(let j=0; j<10; j++){
            let y = j+1;
            let createColumn = document.createElement("td");
            target.children[0].children[i].appendChild(createColumn);
            let multi = y * x;
            target.children[0].children[i].children[j].innerHTML = y + " x " + x + " = " + multi;
        }
        i++;
    }



})();
