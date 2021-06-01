// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let imgSource = document.getElementById('source');
    let src = imgSource.getAttribute('data-image');
    let target = document.getElementById('target');

    target.innerHTML = `<img src=${src}></img> `;

    source.removeChild(target);

})();
