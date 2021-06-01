// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    document.querySelector("img").addEventListener("click", () => {
        document.querySelector("img").setAttribute("src", document.querySelector("img").getAttribute("data-hover"));
    });

})();
