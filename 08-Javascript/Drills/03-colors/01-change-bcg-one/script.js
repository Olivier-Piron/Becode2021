
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById('red').onclick = colorRed;   

    function colorRed() {
        document.body.style.backgroundColor = "red";
        return false;
    }   

    document.getElementById('green').onclick = colorGreen;   

    function colorGreen() {
        document.body.style.backgroundColor = "green";
        return false;
    }  

    document.getElementById('yellow').onclick = colorYellow;   

    function colorYellow() {
        document.body.style.backgroundColor = "yellow";
        return false;
    }  

    document.getElementById('blue').onclick = colorBlue;   

    function colorBlue() {
        document.body.style.backgroundColor = "blue";
        return false;
    }  
      


})();
