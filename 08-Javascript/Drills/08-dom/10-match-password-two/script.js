// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        let passWord1 = document.getElementById("pass-one");
        let passWord2 = document.getElementById("pass-two");
        if(passWord1.value!==passWord2.value){
            passWord1.setAttribute("class","error");
            passWord2.setAttribute("class","error");
        }
    });

})();
