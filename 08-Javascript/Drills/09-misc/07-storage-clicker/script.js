// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    document.getElementById("increment").addEventListener("click",() => {
        localStorage.counter++;
        target.innerHTML = localStorage.counter;
    })
    window.onload = function (){
        if(!localStorage.getItem("counter")){localStorage.setItem("counter",0);};
        let target = document.getElementById("target");
        target.innerHTML = localStorage.counter;
    };

})();
