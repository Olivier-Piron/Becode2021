
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let opOne = parseInt(document.getElementById("op-one").value);
        let opTwo = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                let resultA = opOne + opTwo; 
                alert(resultA);
                break;
            case "substraction":
                let resultS = opOne - opTwo; 
                alert(resultS);
                break;
            case "multiplication":
                let resultM = opOne * opTwo; 
                alert(resultM);
                break;
            case "division":
                let resultD = opOne / opTwo; 
                alert(resultD);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
