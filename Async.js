

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.addEventListener("load", () => {
    console.log(xhr.responseText);
});

xhr.addEventListener("error", () => {
    console.error('Error');
})

xhr.send();

