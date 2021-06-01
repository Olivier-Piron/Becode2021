// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = document.getElementById("target").textContent;
    let target = document.getElementById("target");
    target.innerHTML = ""; 

    let i = 0; 
    function typeWriter() {
            document.getElementById("target").innerHTML += text.charAt(i); 
            i++;
            setTimeout(typeWriter, 50);
    };

    typeWriter();

})();
