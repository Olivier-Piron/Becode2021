
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("year").value;
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        let i = 0;
        let months = "";

            while (i < 12) {
                var d = new Date(year, i, 13);
                if (d.getDay() == 5) {
                    months = months + " " + monthNames[d.getMonth()];
                }
                i++
            }

        alert(months);

    
    });

})();
