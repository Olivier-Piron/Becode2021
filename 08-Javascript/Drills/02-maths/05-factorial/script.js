
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let a = parseInt(document.getElementById("number").value);
        function factorial(a){
            if (a < 0) {
                return undefined;
            }
            else if(a <= 1){
                return 1;
            }else{
                return a * factorial(a - 1);
            }
        }
        
        answer = factorial(a);
        alert(answer);
        

    });

})();
