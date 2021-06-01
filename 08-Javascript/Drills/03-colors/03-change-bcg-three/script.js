
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let color = "#" + Math.floor(Math.random() * 99999) + 1  ;
        document.body.style.backgroundColor = color;
    });

})();
