// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let infos = {
            lastName: "O",
            firstName: "P",
            age: 24,
            city: "Namur",
            country: "Belgium"
        }
        console.log(infos);
    });
})();
