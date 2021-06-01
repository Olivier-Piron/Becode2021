
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentdate = new Date(); 

    let currentHour = currentdate.getHours();
    let currentMinute = currentdate.getMinutes();
    let sum = (currentHour*60) + currentMinute;
    alert(sum)

    if (sum < 1050) {
    document.getElementById("target").innerHTML = "<i>Hello</i>"
    }
    else {
    document.getElementById("target").innerHTML = "<i>Good evening</i>"
    }

})();
