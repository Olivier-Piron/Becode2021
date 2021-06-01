// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    let callback = ((error, posts) => {

        for (index in posts) {
            console.log(`article ${index}: ${posts[index].title}: ${posts[index].content}`);
        }
       
    });
    document.getElementById("run").addEventListener("click", () => {
    
        window.lib.getPosts(callback);
    });
})();
