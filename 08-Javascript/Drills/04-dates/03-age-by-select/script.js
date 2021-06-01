
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.querySelector("#run").addEventListener("click", () => {
        let currentdate = new Date();

        let birthDay = document.querySelector("#dob-day").value;
        let birthMonth = document.querySelector("#dob-month").value;
        let birthYear = document.querySelector("#dob-year").value;

        let age = currentdate.getFullYear() - birthYear;
        if (birthMonth>currentdate.getMonth() + 1) {
            age -= 1;
        } 
        else if (birthMonth < currentdate.getMonth() + 1 ) {
            age = age;
        }
        else if (birthMonth == currentdate.getMonth() + 1) {
            if (birthDay < currentdate.getDate()) {
                age = age;
            }
            else {
                age -= 1;
            }
        }

        alert(age + " year(s) old")
        });

})();
