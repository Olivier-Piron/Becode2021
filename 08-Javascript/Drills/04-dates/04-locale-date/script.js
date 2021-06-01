
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();

let options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
document.getElementById("target").innerHTML = date.toLocaleDateString('en-GB', options) + ", " + date.getHours() + "h" + date.getMinutes();

})();
