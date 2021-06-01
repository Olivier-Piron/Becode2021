// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let x = document.getElementById('pass-one');
    let y = document.getElementById('counter');
    x.addEventListener('input', () => {
        x.value.length > 10 && (x.value = x.value.substring(0, x.value.length - 1));
        y.innerHTML = x.value.length + "/10";
    });

})();
