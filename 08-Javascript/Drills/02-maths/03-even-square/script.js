
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // Your code here
        let i = 1;
        let numbers="";
        while ((i*i) < 21) {
            if (i%i == 0) {
                let x = i*i;
                numbers = numbers + " , " + x;
            }
            i += 1;
        }
        alert(numbers.substring(2));
    });

})();
