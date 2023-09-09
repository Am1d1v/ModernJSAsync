


function getPosts(cb){ 
     const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText)
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.error('Error');
    })

xhr.send();
}

getPosts((response) => {
    console.log(response);
});

