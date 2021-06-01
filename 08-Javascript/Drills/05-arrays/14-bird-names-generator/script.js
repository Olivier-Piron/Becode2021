// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
    
    let i = Math.floor(Math.random()*birds.length);
    let array = Array.from(adjectives);
    let j = Math.floor(Math.random()*array.length);

        if (birds[i].fem == true) {
            document.getElementById("target").innerHTML = ("La " + birds[i].name + " " + array[j]+"e");
        }
        else {
            document.getElementById("target").innerHTML = ("Le " + birds[i].name + " " + array[j])
        }
    });

})();
