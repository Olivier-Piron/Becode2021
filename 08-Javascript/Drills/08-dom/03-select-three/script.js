// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let p = document.querySelectorAll(".target");
    p.forEach( p => p.innerHTML = "owned");

})();
