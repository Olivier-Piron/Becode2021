const quote = document.getElementById('quote'); 
const author = document.getElementById('author');

let getData = function() {
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data) =>{
        quote.innerText = data.quote;
        author.innerText = data.author;
        if (data.quote.length > 100)
            getData();
    });
};

getData();
