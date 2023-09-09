

const btn = document.querySelector('button');

btn.addEventListener("click",() => {
    getPosts((response) => {
        //console.log(response);
        const fragment = document.createDocumentFragment();
        response.forEach((post) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = post.title;
            const article = document.createElement('p');
            article.classList.add('card-text');
            article.textContent = post.body;
            cardBody.appendChild(title);
            cardBody.appendChild(article);
            console.log(cardBody);
        })
    });
    
})

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


