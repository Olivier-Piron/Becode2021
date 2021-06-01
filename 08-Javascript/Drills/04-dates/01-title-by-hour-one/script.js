
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentdate = new Date(); 

    let currentHour = currentdate.getHours();

    if (currentHour < 18) {
    document.getElementById("target").innerHTML = "<i>Hello</i>"
    }
    else {
    document.getElementById("target").innerHTML = "<i>Good evening</i>"
    }

})();
