// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let passWord1 = document.getElementById("pass-one");
    let passWord2 = document.getElementById("pass-two");
    document.getElementById("run").addEventListener("click", () =>{
        if (passWord1.value !== passWord2.value ){
            passWord2.style.borderColor = 'red';
            passWord1.style.borderColor = 'red';
        }
    })

})();
