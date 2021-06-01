
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let opOne =  parseInt(document.getElementById("op-one").value);
        let opTwo =  parseInt(document.getElementById("op-two").value);
        let result = opOne + opTwo; 
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let opOne =  parseInt(document.getElementById("op-one").value);
        let opTwo =  parseInt(document.getElementById("op-two").value);
        let result = opOne - opTwo; 
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let opOne =  parseInt(document.getElementById("op-one").value);
        let opTwo =  parseInt(document.getElementById("op-two").value);
        let result = opOne * opTwo; 
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let opOne =  parseInt(document.getElementById("op-one").value);
        let opTwo =  parseInt(document.getElementById("op-two").value);
        let result = opOne / opTwo; 
        alert(result);
    });
})();
